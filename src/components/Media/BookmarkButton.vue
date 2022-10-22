<template>
  <button
    @click="toggleBookmark"
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
      z-10
    "
  >
    <img
      v-if="!isBookmarked"
      src="../../assets/icon-bookmark-empty.svg"
      alt="bookmark"
    />
    <img
      v-if="isBookmarked"
      src="../../assets/icon-bookmark-full.svg"
      alt="bookmark"
    />
  </button>
</template>

<script>
export default {
  data() {
    return {
      isBookmarked: false,
    };
  },
  methods: {
    toggleBookmark() {
      this.isBookmarked = !this.isBookmarked;
    },
  },
};
</script>