<template>
  <div class="font-light text-xl text-white mb-6">
    <h1 v-if="searchValue.length === 0">{{ title }}</h1>
    <h2 v-if="searchValue.length > 0 && results > 1">
      Found {{ results }} results for ‘{{ searchValue }}’
    </h2>
    <h2 v-if="searchValue.length > 0 && results <= 1">
      Found {{ results }} result for ‘{{ searchValue }}’
    </h2>
  </div>
</template>

<script>
export default {
  props: ["title", "searchValue", "results"],
};
</script>