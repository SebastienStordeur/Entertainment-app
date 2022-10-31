<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-semidarkblue rounded-lg py-8 px-6 w-full max-w-[400px] mx-auto"
  >
    <h1 class="text-[32px] font-light text-white">Sign Up</h1>
    <div class="flex flex-col mt-10">
      <form-label for="email" label="Email Address" />
      <base-input
        :type="'email'"
        :name="'email'"
        :value="emailValue"
        @update:value="(newValue) => (emailValue = newValue)"
      />
      <email-errors
        :emailHasError="emailHasError"
        :emailIsUsed="emailIsUsed"
        :message="emailMsgError"
      />
    </div>
    <div class="flex flex-col mt-6">
      <form-label for="password" label="Password" />
      <base-input
        :type="'password'"
        :name="'password'"
        :value="passwordValue"
        @update:value="(newValue) => (passwordValue = newValue)"
      />
      <password-error v-if="passwordHasError" :message="passwordMsgError" />
    </div>
    <div class="flex flex-col mt-6">
      <form-label for="repeat-password" label="Repeat Password" />
      <base-input
        :type="'password'"
        :name="'repeat-password'"
        :value="repeatPasswordValue"
        @update:value="(newValue) => (repeatPasswordValue = newValue)"
      />
      <passwords-errors
        :hasError="confirmPswHasError"
        :passwordsHaveError="passwordsHaveError"
        :message="confirmPswMsgError"
        :passwordsMsg="passwordsMsgError"
      />
    </div>
    <base-button type="submit">Create an account</base-button>
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

import FormLabel from "./FormLabel.vue";
import EmailErrors from "./Errors/EmailErrors.vue";
import PasswordError from "./Errors/PasswordError.vue";
import PasswordsErrors from "./Errors/PasswordsErrors.vue";
import BaseButton from "../UI/BaseButton.vue";
import BaseInput from "../UI/BaseInput.vue";

export default {
  components: {
    FormLabel,
    EmailErrors,
    PasswordError,
    PasswordsErrors,
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      emailValue: "",
      passwordValue: "",
      repeatPasswordValue: "",
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
      const email = this.emailValue;
      const password = this.passwordValue;
      const confirmPassword = this.repeatPasswordValue;
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
            this.emailValue = "";
            this.passwordValue = "";
            this.repeatPasswordValue = "";
            return this.$router.push("/");
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