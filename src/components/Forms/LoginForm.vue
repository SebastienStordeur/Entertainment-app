<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-semidarkblue rounded-lg py-8 px-6 w-full max-w-[400px] mx-auto"
  >
    <h1 class="text-[32px] font-light text-white">Login</h1>
    <div class="flex flex-col mt-10">
      <label class="text-white opacity-50 font-light text-15 ml-4"
        >Email Address</label
      >
      <input
        type="email"
        name="email"
        ref="email"
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
    </div>
    <div class="flex flex-col mt-6">
      <label class="text-white opacity-50 font-light text-15 ml-4"
        >Password</label
      >
      <input
        type="password"
        name="password"
        ref="password"
        class="
          h-9
          bg-semidarkblue
          border-b border-greyblue
          focus:border-b-2
          px-4
          outline-0
          text-white
        "
        autocomplete="off"
      />
    </div>
    <button
      type="submit"
      class="
        h-12
        w-full
        bg-red
        text-white
        font-light
        rounded-md
        border-none
        mt-10
      "
    >
      Login to your account
    </button>
    <div
      v-if="formHasError"
      class="
        flex
        justify-center
        items-center
        h-12
        mt-2
        w-full
        bg-red
        text-white
      "
    >
      Wrong email/password combination
    </div>
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

export default {
  data() {
    return {
      auth: getAuth(),
      formHasError: false,
    };
  },
  methods: {
    handleSubmit() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
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