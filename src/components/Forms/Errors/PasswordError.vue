<template>
  <p class="font-bold text-red text-13">
    {{ message }}
  </p>
</template>

<script>
export default {
  props: ["message"],
};
</script>