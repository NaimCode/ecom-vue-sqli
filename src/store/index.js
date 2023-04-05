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
