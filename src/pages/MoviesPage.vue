<template>
  <h1 class="font-light text-xl text-white mb-6">Movies</h1>
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
      :key="media.id"
      :media="media"
    ></media-card>
  </section>
</template>


<script>
import MediaCard from "../components/Media/MediaCard.vue";
import Medias from "../data/data.json";

export default {
  components: {
    MediaCard,
  },
  data() {
    return {
      medias: Medias.filter((media) => media.category === "Movie"),
    };
  },
};
</script>