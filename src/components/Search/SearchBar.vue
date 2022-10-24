<template>
  <input
    class="w-full h-8 bg-darkblue mb-6 placeholder:font-light px-10 text-white"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: ["searchValue", "placeholder"],
};
</script>