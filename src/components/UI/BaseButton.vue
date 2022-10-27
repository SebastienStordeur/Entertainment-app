<template>
  <button
    :type="type"
    class="
      h-12
      w-full
      bg-red
      text-white
      font-light
      rounded-md
      border-none
      mt-10
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type"],
};
</script>