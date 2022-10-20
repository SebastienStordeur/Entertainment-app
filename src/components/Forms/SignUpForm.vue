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
      <p v-if="emailHasError" class="font-bold text-red text-13">
        {{ emailMsgError }}
      </p>
      <p v-if="emailIsUsed" class="font-bold text-red text-13">
        Email already used
      </p>
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
        autocomplete="off"
      />
      <p v-if="passwordHasError" class="font-bold text-red text-13">
        {{ passwordMsgError }}
      </p>
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
        ref="repeatpsw"
        autocomplete="off"
      />
      <p v-if="confirmPswHasError" class="font-bold text-red text-13">
        {{ confirmPswMsgError }}
      </p>
      <p
        v-if="!confirmPswHasError && passwordsHaveError"
        class="font-bold text-red text-13"
      >
        {{ passwordsMsgError }}
      </p>
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
    <div class="text-white flex justify-center" v-if="accountCreated">
      Account created successfully
    </div>
    <div class="flex justify-center text-15 mt-6 font-light">
      <p class="text-white">Already have an account?&nbsp;</p>
      <a href="/login" class="text-red cursor-pointer">Login</a>
    </div>
  </form>
</template>

<script>
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      emailRegex:
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
      emailHasError: false,
      passwordHasError: false,
      confirmPswHasError: false,
      passwordsHaveError: false,
      emailIsUsed: false,
      emailMsgError: "",
      passwordMsgError: "",
      confirmPswMsgError: "",
      passwordsMsgError: "",
      accountCreated: false,
      auth: getAuth(),
    };
  },
  methods: {
    emailValidityHandler(email) {
      if (email.trim() === "") {
        this.emailHasError = true;
        this.emailMsgError = "Can't be empty";
      } else if (email.trim() !== "" && !this.emailRegex.test(email)) {
        this.emailHasError = true;
        this.emailMsgError = "Wrong email format";
      } else {
        this.emailHasError = false;
        this.emailMsgError = "";
      }
    },
    passwordValidityHandler(password) {
      if (password.length < 6) {
        this.passwordHasError = true;
        this.passwordMsgError = "Password should contain at least 6 characters";
      } else {
        this.passwordHasError = false;
        this.passwordMsgError = "";
      }
    },
    confirmPasswordValidityHandler(confirmPassword) {
      if (confirmPassword.length < 6) {
        this.confirmPswHasError = true;
        this.confirmPswMsgError =
          "Password should contain at least 6 characters";
      } else {
        this.confirmPswHasError = false;
        this.confirmPswMsgError = "";
      }
    },
    passwordsEqualityHandler(password, confirmPassword) {
      if (password !== confirmPassword) {
        this.passwordsHaveError = true;
        this.passwordsMsgError = "Passwords should be identical";
      } else {
        this.passwordsHaveError = false;
        this.passwordsMsgError = "";
      }
    },
    handleSubmit() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      const confirmPassword = this.$refs.repeatpsw.value;
      const usersCollectionRef = collection(db, "users");
      this.accountCreated = false;

      this.emailValidityHandler(email);
      this.passwordValidityHandler(password);
      this.confirmPasswordValidityHandler(confirmPassword);
      this.passwordsEqualityHandler(password, confirmPassword);

      if (
        !this.emailHasError &&
        !this.passwordHasError &&
        !this.confirmPswHasError &&
        !this.passwordsHaveError
      ) {
        createUserWithEmailAndPassword(this.auth, email, password)
          .then(async (user) => {
            const userUid = user.user.uid;
            const email = user.user.email;
            await setDoc(doc(usersCollectionRef, userUid), {
              userUid,
              email,
              bookmarks: [],
            });
            this.accountCreated = true;
          })
          .catch((error) => {
            error.message === "Firebase: Error (auth/email-already-in-use)."
              ? (this.emailIsUsed = true)
              : (this.emailIsUsed = false);
          });
      }
    },
  },
};
</script>