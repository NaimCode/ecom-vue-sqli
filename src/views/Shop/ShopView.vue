<script setup>
import { onMounted, computed } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import router from "@/router";
import { COLORS, SIZES } from "@/data";
import { useStore } from "vuex";
const store = useStore();
const products = computed(() => store.getters.filteredProducts);
const collections = computed(() => store.getters.collections);
const filter = computed(() => store.state.product.filter);
const onSearch = (e) => {
  store.dispatch("filter", { search: e.currentTarget.value });
};
const onChangeColor = () => {
  // store.dispatch("filter", { color: e });
};
const onChangeSize = () => {
  // store.dispatch("filter", { size: e });
};
onMounted(async () => {
  console.log(router.currentRoute.value.query);
});
</script>

<template>
  <div
    class="bg-[url('https://cdn.shopify.com/s/files/1/0582/4131/9071/files/img-slider-home-mini-tablet-3.png?v=1631192732')] bg-accent w-full h-[400px] bg-no-repeat bg-[center_top_2rem] bg-fixed"
  ></div>
  <div class="flex flex-row justify-end items-center py-16 section">
    <input
      type="search"
      @input="onSearch"
      placeholder="Search"
      class="w-[400px] border outline-none border-accent p-2 rounded-sm placeholder:text-gray-400 placeholder:font-light"
    />
  </div>
  <div class="section grid grid-cols-[300px_auto] gap-10">
    <div class="space-y-10">
      <div class="">
        <h2 class="text-3xl font-light mb-4">Collections</h2>
        <div
          v-for="(item, index) in collections"
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
          <button
            v-for="(color, index) in COLORS"
            :key="index"
            @click="onChangeColor(color)"
            :style="`background-color: ${color}`"
            class="w-8 h-8 rounded-full border"
          ></button>
        </div>
      </div>

      <hr />
      <div class="mt-4">
        <h2 class="text-3xl font-light mb-4">
          Sizes:
          <h6>{{ filter.size }}</h6>
        </h2>
        <div class="grid grid-cols-3 gap-2 items-center">
          <button
            v-for="(size, index) in SIZES"
            :key="index"
            @click="onChangeSize(size)"
            :style="`background-color: ${size}`"
            :class="filter.size === size ? 'border shadow-xl' : ''"
            class="rounded-md bg-accent py-1 uppercase font-semibold text-sm text-center"
          >
            {{ size }}
          </button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </div>
  <div class="h-[100px]"></div>
</template>
