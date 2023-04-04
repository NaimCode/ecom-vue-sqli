import api from "@/api";
export default {
  state: {
    products: [],
  },
  getters: {
    products(state) {
      return state.products;
    },
    featuredProducts(state) {
      return state.products.filter((product) => product.featured);
    },
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
  },
  actions: {
    async fetchProducts(context) {
      const data = await api.get("item");
      console.log("data :>> ", data);
      context.commit("SET_PRODUCTS", data);
    },
  },
};
