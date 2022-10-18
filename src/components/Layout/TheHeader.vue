<template>
  <header
    class="
      w-full
      h-14
      md:h-32
      px-4
      md:px-6 md:py-6
      bg-semidarkblue
      md:bg-darkblue
    "
  >
    <the-navigation></the-navigation>
  </header>
</template>

<script>
import TheNavigation from "../Nav/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>
