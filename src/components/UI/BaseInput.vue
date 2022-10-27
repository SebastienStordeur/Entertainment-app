<template>
  <input
    class="
      h-9
      bg-semidarkblue
      px-4
      border-b border-greyblue
      focus:border-b-2
      outline-0
      text-white
    "
    :type="type"
    :name="name"
    :ref="name"
  />
</template>

<script>
export default {
  props: ["type", "name"],
};
</script>