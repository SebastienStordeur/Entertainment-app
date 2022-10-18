<template>
  <nav class="flex justify-between items-center w-full h-full">
    <img src="../../../public/assets/logo.svg" alt="Logo" class="w-6 h-5" />
    <ul class="flex children:px-3 children:cursor-pointer">
      <li>
        <router-link to="/"
          ><img src="../../assets/home.svg" alt="Home"
        /></router-link>
      </li>
      <li>
        <router-link :to="'/movies'"
          ><img src="../../assets/movies.svg" alt="Home"
        /></router-link>
      </li>
      <li>
        <router-link :to="'/series'"
          ><img src="../../assets/series.svg" alt="Home"
        /></router-link>
      </li>
      <li>
        <router-link :to="'/bookmarks'"
          ><img src="../../assets/bookmark.svg" alt="Home"
        /></router-link>
      </li>
    </ul>
    <div class="rounded-full w-6 h-6 bg-white"></div>
  </nav>
</template>

