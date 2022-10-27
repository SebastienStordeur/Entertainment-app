<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-col mt-10">
      <form-label forInput="email" label="Email Address" />
      <base-input type="email" name="email" ref="email" />
    </div>
  </form>
</template>

<script>
import BaseInput from "../UI/BaseInput.vue";
export default {
  components: {
    BaseInput,
  },
  methods: {
    handleSubmit() {
      const email = this.$refs.email.value;
      console.log(email);
    },
  },
};
</script>


