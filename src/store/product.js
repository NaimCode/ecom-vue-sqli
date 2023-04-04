import api from "@/api";
export default {
  state: {
    products: [],
    collections: [],
    filter: {
      collections: [],
      color: undefined,
      size: undefined,
      search: "",
    },
  },
  getters: {
    products: (state) => state.products,

    featuredProducts: (state) =>
      state.products.filter((product) => product.featured),
    collections: (state) => state.collections,

    filteredProducts: (state) => {
      return state.products.filter((product) => {
        let match = false;
        if (state.filter.color) {
          match = product.colors.includes(state.filter.color);
        }
        if (state.filter.size) {
          match = product.sizes.includes(state.filter.size);
        }

        match = product.title
          .toLowerCase()
          .includes(state.filter.search.toLowerCase());

        return match;
      });
    },
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
    SET_COLLECTIONS(state, data) {
      state.collections = data;
    },
    SET_FILTER(state, data) {
      state.filter = Object.assign(state.filter, data);
    },
  },
  actions: {
    async fetchProducts(context) {
      const data = await api.get("item");
      context.commit("SET_PRODUCTS", data);
    },
    async fetchCollections(context) {
      const data = await api.get("category");
      context.commit("SET_COLLECTIONS", data);
    },
    filter(context, filter) {
      context.commit("SET_FILTER", filter);
    },
  },
};
