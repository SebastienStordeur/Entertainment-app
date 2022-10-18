<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-semidarkblue rounded-lg py-8 px-6 text-15"
  >
    <h1 class="text-3xl font-light text-white">Sign Up</h1>
    <div class="flex flex-col">
      <label for="email" class="text-15 text-white font-light opacity-50"
        >Email address</label
      >
      <input
        id="email"
        type="email"
        name="email"
        class="bg-semidarkblue border-b-greyblue"
        ref="email"
      />
    </div>
    <div class="flex flex-col">
      <label for="password" class="text-white font-light opacity-50"
        >Password</label
      >
      <input
        id="password"
        type="password"
        name="password"
        class="bg-semidarkblue border-b-greyblue"
        ref="password"
      />
    </div>
    <div class="flex flex-col">
      <label for="repeat-password" class="text-white font-light opacity-50"
        >Repeat Password</label
      >
      <input
        id="repeat-password"
        type="password"
        name="repeat-password"
        class="bg-semidarkblue border-b-greyblue border-b-2"
        ref="repeat-psw"
      />
    </div>
    <button
      type="submit"
      class="h-12 w-full bg-red text-white rounded-md border-none"
    >
      Create an account
    </button>
    <div class="flex justify-center text-15 mt-6 font-light">
      <p class="text-white">Already have an account?&nbsp;</p>
      <a href="/login" class="text-red cursor-pointer">Login</a>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    handleSubmit() {},
  },
};
</script>