<template>
  <section
    :id="id"
    class="
      grid grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-4
      md:gap-x-8 md:gap-y-6
    "
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ["id"],
};
</script>