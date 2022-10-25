<template>
  <search-bar
    :placeholder="'Search for series'"
    @input="filterMovies"
  ></search-bar>
  <search-results
    :title="'TV Series'"
    :searchValue="searchValue"
    :results="medias.length"
  />
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
import SearchResults from "@/components/Search/SearchResults.vue";
import Medias from "../data/data.json";

export default {
  components: {
    MediaCard,
    SearchBar,
    SearchResults,
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
