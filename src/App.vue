<template>
  <the-header></the-header>
  <main id="main" class="bg-darkblue w-full px-4 md:px-6 main relative">
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "./components/Layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import "./style.css";
</style>
