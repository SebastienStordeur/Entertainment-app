<template>
  <div class="relative flex items-center">
    <img
      src="../../assets/search.svg"
      alt="search icon"
      class="absolute top-2 left-1"
    />
    <input
      class="
        w-full
        h-8
        bg-darkblue
        mb-6
        placeholder:font-light
        px-10
        text-white
      "
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: ["placeholder"],
};
</script>