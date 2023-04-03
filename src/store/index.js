import { createStore } from "vuex";
//import logout from firebase
import { auth, GoogleAuthProvider } from "../utils/firebase";
import { signOut, signInWithPopup } from "firebase/auth";
export default createStore({
  state: {
    user: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    async logIn(context) {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      if (response) {
        context.commit("SET_USER", response.user);
      } else {
        throw new Error("login failed");
      }
    },

    async logOut(context) {
      await signOut(auth);
      context.commit("SET_USER", null);
    },

    async fetchUser(context, user) {
      if (user) {
        context.commit("SET_USER", user);
      } else {
        context.commit("SET_USER", null);
      }
    },
  },
  modules: {},
});
