<template>
  <article
    class="
      relative
      h-36
      md:h-60
      min-w-[240px]
      md:min-w-[470px]
      rounded-lg
      overflow-hidden
    "
  >
    <bookmark-button></bookmark-button>
    <picture>
      <source
        :srcset="media.thumbnail.trending.large"
        media="(min-width: 1024px)"
      />
      <img
        :src="media.thumbnail.trending.small"
        :alt="media.title"
        class="absolute w-full h-full object-cover"
      />
    </picture>
    <div class="absolute bottom-4 left-4">
      <div
        class="
          flex
          children:pr-3
          text-white
          font-light
          text-xs
          md:text-13
          opacity-90
          mt-2
        "
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
      <h2 class="mt-1 text-15 md:text-xl text-white font-medium">
        {{ media.title }}
      </h2>
    </div>
  </article>
</template>

<script>
import BookmarkButton from "./BookmarkButton.vue";
export default {
  props: ["media"],
  components: {
    BookmarkButton,
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
  top: 12px;
}
.dot::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 2px;
  border-radius: 100%;
  background: #ffffff;
  left: -6px;
  top: 12px;
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