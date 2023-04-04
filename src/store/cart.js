import {
  collection,
  addDoc,
  getDocs,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { writeBatch } from "firebase/firestore";
import { db } from "../utils/firebase";

export default {
  state: {
    cart: [],
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    cartTotal(state) {
      return state.cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    },
  },
  mutations: {
    SET_CART(state, data) {
      state.cart = data;
    },
    ADD_TO_CART(state, data) {
      state.cart = [...state.cart, data];
    },
    REMOVE_FROM_CART(state, data) {
      state.cart = state.cart.filter((item) => item.id !== data.id);
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
  },
  actions: {
    async addToCart(context, data) {
      const doc = await addDoc(collection(db, "cart"), data);
      if (doc) {
        context.commit("ADD_TO_CART", { ...data, id: doc.id });
      }
    },
    async removeFromCart(context, data) {
      await deleteDoc(doc(collection(db, "cart"), data.id));
      context.commit("REMOVE_FROM_CART", data);
    },
    async fetchCart(context, userUid) {
      const querySnapshot = await getDocs(
        collection(db, "cart"),
        where("user", "==", userUid)
      );
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      context.commit("SET_CART", data);
    },
    async clearCart(context) {
      const batch = writeBatch(db);
      const cartCollectionRef = collection(db, "cart");
      context.state.cart.forEach((documentId) => {
        const docRef = doc(cartCollectionRef, documentId.id);
        batch.delete(docRef);
      });
      batch.commit();
      context.commit("CLEAR_CART");
    },
  },
};
