<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-semidarkblue rounded-lg py-8 px-6 w-full max-w-[400px] mx-auto"
  >
    <h1 class="text-[32px] font-light text-white">Login</h1>
    <div class="flex flex-col mt-10">
      <form-label forInput="email" label="Email Address" />
      <base-input
        :type="'email'"
        :name="'email'"
        :value="emailValue"
        @update:value="(newValue) => (emailValue = newValue)"
      />
    </div>
    <div class="flex flex-col mt-6">
      <form-label forInput="password" label="Password"></form-label>
      <base-input
        :type="'password'"
        :name="'password'"
        :value="passwordValue"
        @update:value="(newValue) => (passwordValue = newValue)"
      />
    </div>
    <base-button type="submit">Login to your account</base-button>
    <login-error v-if="formHasError"></login-error>
    <div class="flex justify-center text-15 mt-6 font-light">
      <p class="text-white">Don't have an account? &nbsp;</p>
      <a href="/signup" class="text-red cursor-pointer">Sign Up</a>
    </div>
  </form>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import FormLabel from "./FormLabel.vue";
import BaseInput from "../UI/BaseInput.vue";
import BaseButton from "../UI/BaseButton.vue";
import LoginError from "./Errors/LoginError.vue";

export default {
  components: {
    FormLabel,
    BaseInput,
    BaseButton,
    LoginError,
  },
  data() {
    return {
      emailValue: "",
      passwordValue: "",
      auth: getAuth(),
      formHasError: false,
    };
  },
  methods: {
    handleSubmit() {
      const email = this.emailValue;
      const password = this.passwordValue;
      setPersistence(this.auth, browserLocalPersistence).then(() => {
        signInWithEmailAndPassword(this.auth, email, password)
          .then(() => {
            return this.$router.push("/");
          })
          .catch(() => {
            this.formHasError = true;
          });
      });
    },
  },
};
</script>