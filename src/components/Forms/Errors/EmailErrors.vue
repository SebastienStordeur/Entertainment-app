<template>
  <p v-if="emailHasError" class="font-bold text-red text-13">
    {{ message }}
  </p>
  <p v-if="emailIsUsed" class="font-bold text-red text-13">
    Email already used
  </p>
</template>

<script>
export default {
  props: ["emailHasError", "emailIsUsed", "message"],
};
</script>