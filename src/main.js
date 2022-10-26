import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import MoviesPage from "./pages/MoviesPage.vue";
import SeriesPage from "./pages/SeriesPage.vue";
import BookmarkPage from "./pages/BookmarkPage.vue";
import SignUp from "./pages/SignUp.vue";
import LoginPage from "./pages/LoginPage.vue";

const auth = getAuth();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, name: "Home" },
    { path: "/movies", component: MoviesPage, name: "Movies" },
    { path: "/series", component: SeriesPage, name: "Series" },
    {
      path: "/bookmarks",
      component: BookmarkPage,
      name: "Bookmarks",
      beforeEnter: (to, from, next) => {
        onAuthStateChanged(auth, async (user) => {
          user ? next() : next({ name: "Home" });
        });
      },
    },
    {
      path: "/signup",
      component: SignUp,
      name: "Signup",
      beforeEnter: (to, from, next) => {
        onAuthStateChanged(auth, async (user) => {
          user ? next({ name: "Home" }) : next();
        });
      },
    },
    {
      path: "/login",
      component: LoginPage,
      name: "Login",
      beforeEnter: (to, from, next) => {
        onAuthStateChanged(auth, async (user) => {
          user ? next({ name: "Home" }) : next();
        });
      },
    },
  ],
  linkActiveClass: "brightness-300",
});

const app = createApp(App);

app.use(router);
app.mount("#app");
