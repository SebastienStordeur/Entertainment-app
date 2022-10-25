<template>
  <h2 class="font-light text-[20px] text-white" v-if="movies.length >= 1">
    Bookmarked Movies
  </h2>
  <section
    class="
      grid grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-4
      pb-8
      mt-6
    "
    v-if="movies.length >= 1"
  >
    <media-card
      v-for="movie in movies"
      :key="movie.title"
      :media="movie"
    ></media-card>
  </section>
  <h2 class="font-light text-[20px] text-white" v-if="series.length >= 1">
    Bookmarked TV Series
  </h2>
  <section
    class="
      grid grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-4
      pb-8
      mt-6
    "
  >
    <media-card
      v-for="serie in series"
      :key="serie.title"
      :media="serie"
    ></media-card>
  </section>
</template>

<script>
import { db } from "@/firebase/firebase-config";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { doc, getDoc } from "@firebase/firestore";
import MediaCard from "../components/Media/MediaCard.vue";
export default {
  components: {
    MediaCard,
  },
  data() {
    return {
      auth: getAuth(),
      medias: [],
      movies: [],
      series: [],
    };
  },
  beforeMount() {
    onAuthStateChanged(this.auth, (user) => {
      if (user !== null) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = getDoc(userRef);

        userSnap.then((res) => {
          const data = res.data();
          if (data) {
            this.medias = data.bookmarks;
            this.movies = this.medias.filter(
              (media) => media.category === "Movie"
            );
            this.series = this.medias.filter(
              (media) => media.category === "TV Series"
            );
          }
        });
      }
    });
  },
};
</script>
