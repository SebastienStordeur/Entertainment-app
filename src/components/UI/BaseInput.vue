<template>
  <input
    :type="type"
    :name="name"
    class="
      h-9
      bg-semidarkblue
      px-4
      border-b border-greyblue
      focus:border-b-2
      outline-0
      text-white
    "
  />
</template>

<script>
export default {
  props: ["type", "name", "refInput"],
  beforeMount() {
    console.log(this.refInput, this.name);
  },
};
</script>