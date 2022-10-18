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
      <button
        class="
          flex
          justify-center
          items-center
          absolute
          bg-darkblue
          w-8
          h-8
          bg-opacity-50
          rounded-full
          top-2
          right-2
        "
      >
        <img src="../../assets/icon-bookmark-empty.svg" alt="bookmark" />
      </button>
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
export default {
  props: ["media"],
  methods: {},
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