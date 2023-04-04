import user from "./user";
import product from "./product";
import cart from "./cart";
import { createStore } from "vuex";

export default createStore({
  modules: {
    user,
    product,
    cart,
  },
});

// import { createStore } from "vuex";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   where,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import { writeBatch } from "firebase/firestore";

// import { db } from "../utils/firebase";
// //import logout from firebase
// import { auth, GoogleAuthProvider } from "../utils/firebase";
// import { signOut, signInWithPopup } from "firebase/auth";
// export default createStore({
//   state: {
//     user: null,
//     cart: [],
//   },
//   getters: {
//     user(state) {
//       return state.user;
//     },
//   },
//   mutations: {
//     SET_USER(state, data) {
//       state.user = data;
//     },
//     SET_CART(state, data) {
//       state.cart = data;
//     },
//     ADD_TO_CART(state, data) {
//       state.cart = [...state.cart, data];
//     },
//     REMOVE_FROM_CART(state, data) {
//       state.cart = state.cart.filter((item) => item.id !== data.id);
//     },
//   },
//   actions: {
//     async logIn(context) {
//       const provider = new GoogleAuthProvider();
//       const response = await signInWithPopup(auth, provider);
//       if (response) {
//         context.commit("SET_USER", response.user);
//       } else {
//         throw new Error("login failed");
//       }
//     },

//     async logOut(context) {
//       await signOut(auth);
//       context.commit("SET_USER", null);
//     },

//     async fetchUser(context, user) {
//       if (user) {
//         context.commit("SET_USER", user);
//         context.dispatch("fetchCart", user.uid);
//       } else {
//         context.commit("SET_USER", null);
//         context.commit("SET_CART", []);
//       }
//     },

//     async addToCart(context, data) {
//       const doc = await addDoc(collection(db, "cart"), data);
//       if (doc) {
//         context.commit("ADD_TO_CART", { ...data, id: doc.id });
//       }
//     },
//     async removeFromCart(context, data) {
//       console.log("data.id :>> ", data.id);
//       await deleteDoc(doc(collection(db, "cart"), data.id));

//       context.commit("REMOVE_FROM_CART", data);
//     },
//     async fetchCart(context, userUid) {
//       const querySnapshot = await getDocs(
//         collection(db, "cart"),
//         where("user", "==", userUid)
//       );
//       const data = querySnapshot.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       context.commit("SET_CART", data);
//     },
//     async clearCart(context) {
//       const batch = writeBatch(db);
//       const cartCollectionRef = collection(db, "cart");
//       context.state.cart.forEach((documentId) => {
//         const docRef = doc(cartCollectionRef, documentId.id);
//         batch.delete(docRef);
//       });
//       batch.commit();
//       context.commit("SET_CART", []);
//     },
//   },
//   modules: {},
// });
