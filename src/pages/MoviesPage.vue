<template>
  <search-bar :placeholder="'Search for movies'" @input="filterMovies" />
  <search-results
    :title="'Movies'"
    :searchValue="searchValue"
    :results="medias.length"
  />
  <section
    id="movies-section"
    class="
      grid grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-4
      md:gap-x-8 md:gap-y-6
    "
  >
    <media-card
      v-for="media in medias"
      :key="media.title"
      :media="media"
    ></media-card>
  </section>
</template>


<script>
import SearchBar from "../components/Search/SearchBar.vue";
import SearchResults from "@/components/Search/SearchResults.vue";
import MediaCard from "../components/Media/MediaCard.vue";
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
      medias: Medias.filter((media) => media.category === "Movie"),
    };
  },
  methods: {
    filterMovies(event) {
      this.searchValue = event.target.value;
      if (this.searchValue.length > 0) {
        this.medias = Medias.filter(
          (media) =>
            media.category === "Movie" &&
            media.title.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      } else {
        this.medias = Medias.filter((media) => media.category === "Movie");
      }
      return this.medias;
    },
  },
};
</script>