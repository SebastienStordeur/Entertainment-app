<template>
  <form class="bg-semidarkblue rounded-lg py-8 px-6 max-w-[400px] mx-auto">
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
          px-4
          outline-0
          text-white
        "
      />
    </div>
    <button
      type="submit"
      class="h-12 w-full bg-red text-white rounded-md border-none mt-10"
    >
      Login to your account
    </button>
    <div class="flex justify-center text-15 mt-6 font-light">
      <p class="text-white">Don't have an account? &nbsp;</p>
      <a href="/signup" class="text-red cursor-pointer">Sign Up</a>
    </div>
  </form>
</template>