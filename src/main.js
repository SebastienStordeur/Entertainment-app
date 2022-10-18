import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import MoviesPage from "./pages/MoviesPage.vue";
import SeriesPage from "./pages/SeriesPage.vue";
import BookmarkPage from "./pages/BookmarkPage.vue";
import SignUp from "./pages/SignUp.vue";
import LoginPage from "./pages/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, name: "Home" },
    { path: "/movies", component: MoviesPage, name: "Movies" },
    { path: "/series", component: SeriesPage, name: "Series" },
    { path: "/bookmarks", component: BookmarkPage, name: "Bookmarks" },
    { path: "/signup", component: SignUp, name: "Signup" },
    { path: "/login", component: LoginPage, name: "Login" },
  ],
  linkActiveClass: "brightness-300",
});

const app = createApp(App);

app.use(router);
app.mount("#app");
