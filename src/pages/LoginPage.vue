<template>
  <section
    id="signup-section"
    class="w-full h-full flex justify-center items-center main"
  >
    <login-form></login-form>
  </section>
</template>

<script>
import LoginForm from "../components/Forms/LoginForm.vue";
export default {
  components: {
    LoginForm,
  },
};
</script>