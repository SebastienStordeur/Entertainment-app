<template>
  <nav
    class="
      flex
      justify-between
      items-center
      w-full
      h-full
      md:px-6 md:h-[72px] md:rounded-lg
      bg-semidarkblue
    "
  >
    <img src="/assets/logo.svg" alt="Logo" class="w-6 h-5 md:w-8 md:h-6" />
    <ul class="flex children:px-3 children:cursor-pointer">
      <li>
        <router-link to="/"
          ><img src="../../assets/home.svg" alt="Home" class="md:w-5 md:h-5" />
        </router-link>
      </li>
      <li>
        <router-link :to="'/movies'"
          ><img
            src="../../assets/movies.svg"
            alt="Home"
            class="md:w-5 md:h-5"
          />
        </router-link>
      </li>
      <li>
        <router-link :to="'/series'"
          ><img
            src="../../assets/series.svg"
            alt="Home"
            class="md:w-5 md:h-5"
          />
        </router-link>
      </li>
      <li>
        <router-link :to="'/bookmarks'">
          <img
            src="../../assets/bookmark.svg"
            alt="Home"
            class="md:w-5 md:h-5"
          />
        </router-link>
      </li>
    </ul>
    <div v-if="!isAuthenticated">
      <router-link :to="'/login'">
        <button class="bg-red text-white h-12 w-24 px-4 rounded">Login</button>
      </router-link>
    </div>
    <div v-if="isAuthenticated">
      <img
        src="../../assets/logout.svg"
        alt="Logout"
        class="h-6 w-6 cursor-pointer"
      />
    </div>
  </nav>
</template>

<script>
import { onAuthStateChanged, getAuth } from "firebase/auth";
export default {
  data() {
    return {
      isAuthenticated: false,
      auth: getAuth(),
    };
  },
  beforeMount() {
    onAuthStateChanged(this.auth, (user) => {
      user !== null
        ? (this.isAuthenticated = true)
        : (this.isAuthenticated = false);
    });
  },
};
</script>

