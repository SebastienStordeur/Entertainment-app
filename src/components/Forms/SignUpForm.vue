<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-semidarkblue rounded-lg py-8 px-6 max-w-[400px] mx-auto"
  >
    <h1 class="text-[32px] font-light text-white">Sign Up</h1>
    <div class="flex flex-col mt-10">
      <label for="email" class="ml-4 text-15 text-white font-light opacity-50"
        >Email address</label
      >
      <input
        id="email"
        type="email"
        name="email"
        class="
          bg-semidarkblue
          outline-none
          px-4
          text-white
          border-b border-b-greyblue
          h-9
        "
        ref="email"
      />
    </div>
    <div class="flex flex-col mt-6">
      <label
        for="password"
        class="ml-4 text-15 text-white font-light opacity-50"
        >Password</label
      >
      <input
        id="password"
        type="password"
        name="password"
        class="
          bg-semidarkblue
          outline-none
          px-4
          text-white
          border-b border-b-greyblue
          h-9
        "
        ref="password"
      />
    </div>
    <div class="flex flex-col mt-6">
      <label
        for="repeat-password"
        class="ml-4 text-15 text-white font-light opacity-50"
        >Repeat Password</label
      >
      <input
        id="repeat-password"
        type="password"
        name="repeat-password"
        class="
          bg-semidarkblue
          outline-none
          border-b
          px-4
          text-white
          border-b-greyblue
          h-9
        "
        ref="repeat-psw"
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