<template>
  <article class="min-w-40 lg:min-w-72 h-40 md:h-56 bg-darkblue text-white">
    <div
      class="relative rounded-lg overflow-hidden w-full h-28 md:h-36 lg:h-44"
    >
      <picture>
        <source
          :srcset="media.thumbnail.regular.large"
          media="(min-width:1024px)"
        />
        <source
          :srcset="media.thumbnail.regular.medium"
          media="(min-width:768px)"
        />
        <img
          :src="media.thumbnail.regular.small"
          :alt="media.title"
          class="h-full w-full absolute object-cover"
        />
      </picture>
      <bookmark-button
        :isBookmarked="isBookmarked"
        @click="toggleMovie"
      ></bookmark-button>
    </div>
    <div
      class="flex children:pr-3 font-light text-11 md:text-13 opacity-75 mt-2"
    >
      <span>{{ media.year }}</span>
      <span class="dot flex relative"
        ><img
          src="../../assets/movie-icon.svg"
          alt="Movie icon"
          class="mr-1"
        />{{ media.category }}</span
      >
      <span>{{ media.rating }}</span>
    </div>
    <h2 class="font-medium text-sm md:text-lg">{{ media.title }}</h2>
  </article>
</template>

<script>
import { db } from "@/firebase/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import BookmarkButton from "./BookmarkButton.vue";
export default {
  props: ["media"],
  components: {
    BookmarkButton,
  },
  data() {
    return {
      auth: getAuth(),
      isAuthenticated: false,
      isBookmarked: false,
    };
  },
  methods: {
    async toggleMovie() {
      if (this.auth.currentUser !== null) {
        const userDoc = doc(db, "users", this.auth.currentUser.uid);

        if (!this.isBookmarked) {
          await updateDoc(userDoc, {
            bookmarks: arrayUnion(this.media),
          }).then(() => (this.isBookmarked = true));
        } else {
          await updateDoc(userDoc, {
            bookmarks: arrayRemove(this.media),
          }).then(() => (this.isBookmarked = false));
        }
      }
    },
  },
  beforeMount() {
    onAuthStateChanged(this.auth, (user) => {
      if (user !== null) {
        this.isAuthenticated = true;
        const userRef = doc(db, "users", user.uid);
        const userSnap = getDoc(userRef);

        userSnap.then((res) => {
          const data = res.data();
          if (data !== undefined) {
            const isFound = data.bookmarks.find(
              (movie) => movie.title === this.media.title
            );
            isFound ? (this.isBookmarked = true) : (this.isBookmarked = false);
          }
        });
      }
    });
  },
};
</script>

<style scoped>
.dot::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 2px;
  border-radius: 100%;
  background: #ffffff;
  right: 4px;
  top: 6px;
}
.dot::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 2px;
  border-radius: 100%;
  background: #ffffff;
  left: -6px;
  top: 6px;
}

@media (min-width: 768px) {
  .dot::after {
    right: 4px;
    top: 7px;
  }
  .dot::before {
    left: -7px;
    top: 7px;
  }
} ;
</style>