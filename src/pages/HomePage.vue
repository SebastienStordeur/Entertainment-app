<template>
  <h1 class="text-xl text-white font-light">Trending</h1>
  <section id="trending-section" class="flex overflow-auto">
    <media-card
      v-for="media in trendingMedias"
      :key="media.id"
      :media="media"
    ></media-card>
  </section>
  <h2 class="text-xl text-white font-light mb-6">Recommended for you</h2>
  <section id="recommended-section">
    <media-card></media-card>
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
      trendingMedias: Medias.filter((media) => media.isTrending === true),
    };
  },
};
</script>
