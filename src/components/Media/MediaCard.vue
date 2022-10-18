<template>
  <article class="min-w-40 h-40 bg-darkblue text-white">
    <div class="rounded-lg overflow-hidden w-full h-28">
      <img :src="media.thumbnail.regular.small" :alt="media.title" />
    </div>
    <div class="flex children:pr-3 font-light text-11 opacity-75 mt-2">
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
    <h2 class="font-medium text-sm">{{ media.title }}</h2>
  </article>
</template>

<script>
export default {
  props: ["media"],
  methods: {},
  created() {
    console.log(this.media);
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
</style>