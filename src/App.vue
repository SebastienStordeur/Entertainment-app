<template>
  <the-header></the-header>
  <main id="main" class="bg-darkblue min-h-screen px-4">
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
