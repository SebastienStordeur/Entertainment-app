<template>
  <section
    id="signup-section"
    class="w-full h-full flex justify-center items-center main"
  >
    <sign-up-form></sign-up-form>
  </section>
</template>

<script>
import SignUpForm from "../components/Forms/SignUpForm.vue";

export default {
  components: {
    SignUpForm,
  },
};
</script>
