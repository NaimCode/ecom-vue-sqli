<script setup>
import { ref, onMounted, watch, reactive } from "vue";
import api from "@/api";
import ProductCard from "@/components/ProductCard.vue";
import router from "@/router";
const products = ref([]);
const isLoading = ref(false);
const filteredProducts = ref([]);
const categories = ref([]);
const filter = reactive({});
const search = ref("");
const onFilter = (filter) => {
  console.log("filter :>> ", filter);
  if (Object.keys(filter).length === 0) {
    filteredProducts.value = products.value;
  } else {
    for (let key in filter) {
      if (key === "category") {
        filteredProducts.value = products.value.filter((product) => {
          return product.categories.some((f) => f.fields.title === filter[key]);
        });
      }
    }
  }
};
const onSarch = () => {
  console.log("search.value :>> ", search.value);
  if (search.value === "") {
    filteredProducts.value = products.value;
  } else {
    filteredProducts.value = products.value.filter((product) => {
      return product.title.toLowerCase().includes(search.value.toLowerCase());
    });
  }
};
watch(filter, onFilter);
onMounted(async () => {
  isLoading.value = true;
  const categoriesData = await api.get("category");
  categories.value = categoriesData;

  const data = await api.get("item");
  products.value = data;
  filteredProducts.value = data;
  isLoading.value = false;

  filter.value = router.currentRoute.value.query;
});

const COLORS = [
  "black",
  "white",
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "gray",
];
const SIZES = ["xs", "s", "m", "l", "xl", "xxl"];
</script>

<template>
  <div
    class="bg-[url('https://cdn.shopify.com/s/files/1/0582/4131/9071/files/img-slider-home-mini-tablet-3.png?v=1631192732')] bg-accent w-full h-[400px] bg-no-repeat bg-[center_top_2rem] bg-fixed"
  ></div>
  <div class="flex flex-row justify-end items-center py-16 section">
    <input
      type="search"
      @input="onSarch"
      v-model="search"
      placeholder="Search"
      class="w-[400px] border outline-none border-accent p-2 rounded-sm placeholder:text-accent placeholder:font-light"
    />
  </div>
  <div class="section grid grid-cols-[300px_auto] gap-10">
    <div class="space-y-10">
      <div class="">
        <h2 class="text-3xl font-light mb-4">Categories</h2>
        <div
          v-for="(item, index) in categories"
          :key="index"
          class="flex flex-row items-center gap-4 my-3"
        >
          <input type="checkbox" name="" id="" />
          {{ item.title }}
        </div>
      </div>
      <hr />
      <div class="mt-4">
        <h2 class="text-3xl font-light mb-4">Colors</h2>
        <div class="flex flex-wrap gap-4 items-center">
          <div
            v-for="(color, index) in COLORS"
            :key="index"
            :style="`background-color: ${color}`"
            class="w-8 h-8 rounded-full border"
          ></div>
        </div>
      </div>

      <hr />
      <div class="mt-4">
        <h2 class="text-3xl font-light mb-4">Sizes</h2>
        <div class="grid grid-cols-3 gap-2 items-center">
          <div
            v-for="(size, index) in SIZES"
            :key="index"
            :style="`background-color: ${color}`"
            class="rounded-md bg-accent py-1 uppercase font-semibold text-sm text-center"
          >
            {{ size }}
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <ProductCard
        v-for="(product, index) in filteredProducts"
        :key="index"
        :product="product"
      />
    </div>
  </div>
  <div class="h-[100px]"></div>
</template>
