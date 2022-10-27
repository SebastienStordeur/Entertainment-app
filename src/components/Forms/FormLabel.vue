<template>
  <label
    class="text-white opacity-50 font-light text-15 ml-4"
    :for="forInput"
    >{{ label }}</label
  >
</template>

<script>
export default {
  props: ["forInput", "label"],
};
</script>