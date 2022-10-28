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
    autocomplete
    :value="value"
    @input="$emit('update:value', $event.target.value)"
  />
</template>

<script>
export default {
  emits: ["update:value"],
  props: ["type", "name", "value"],
};
</script>