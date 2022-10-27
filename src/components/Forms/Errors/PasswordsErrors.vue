<template>
  <p v-if="hasError" class="font-bold text-red text-13">
    {{ message }}
  </p>
  <p v-if="!hasError && passwordsHaveError" class="font-bold text-red text-13">
    {{ passwordsMsg }}
  </p>
</template>

<script>
export default {
  props: ["hasError", "passwordsHaveError", "message", "passwordsMsg"],
};
</script>