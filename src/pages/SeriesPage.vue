<template>
  <search-bar
    :placeholder="'Search for series'"
    @input="filterMovies"
  ></search-bar>
  <h1
    class="font-light text-xl text-white mb-6"
    v-if="searchValue.length === 0"
  >
    TV Series
  </h1>

  <h2
    v-if="searchValue.length > 0 && medias.length > 1"
    class="font-light text-xl text-white mb-6"
  >
    Found {{ medias.length }} results for ‘{{ searchValue }}’
  </h2>
  <h2
    v-if="searchValue.length > 0 && medias.length <= 1"
    class="font-light text-xl text-white mb-6"
  >
    Found {{ medias.length }} result for ‘{{ searchValue }}’
  </h2>

  <section
    id="series-section"
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <media-card
      v-for="media in medias"
      :key="media.id"
      :media="media"
    ></media-card>
  </section>
</template>


<script>
import MediaCard from "../components/Media/MediaCard.vue";
import SearchBar from "@/components/Search/SearchBar.vue";
import Medias from "../data/data.json";

export default {
  components: {
    MediaCard,
    SearchBar,
  },
  data() {
    return {
      searchValue: "",
      medias: Medias.filter((media) => media.category === "TV Series"),
    };
  },
  methods: {
    filterMovies(event) {
      this.searchValue = event.target.value;
      if (this.searchValue.length > 0) {
        this.medias = Medias.filter(
          (media) =>
            media.category === "TV Series" &&
            media.title.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      } else {
        this.medias = Medias.filter((media) => media.category === "TV Series");
      }
      return this.medias;
    },
  },
};
</script>
