<template>
  <h1 class="text-xl md:text-3xl text-white font-light mb-6">Trending</h1>
  <section id="trending-section" class="flex overflow-auto children:mr-4">
    <trending-card
      v-for="media in trendingMedias"
      :key="media.title"
      :media="media"
    ></trending-card>
  </section>
  <h2 class="text-xl md:text-3xl text-white font-light mt-10 mb-6">
    Recommended for you
  </h2>
  <section
    id="recommended-section"
    class="
      grid grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-4
      pb-8
    "
  >
    <media-card
      v-for="media in recommendedMedias"
      :key="media.id"
      :media="media"
    ></media-card>
  </section>
</template>

<script>
import TrendingCard from "../components/Media/TrendingCard.vue";
import MediaCard from "../components/Media/MediaCard.vue";
import Medias from "../data/data.json";

export default {
  components: {
    TrendingCard,
    MediaCard,
  },
  data() {
    return {
      trendingMedias: Medias.filter((media) => media.isTrending === true),
      recommendedMedias: Medias.filter((media) => media.isTrending === false),
    };
  },
};
</script>
