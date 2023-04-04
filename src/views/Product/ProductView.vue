<script setup>
import router from "@/router";
import api from "@/api";
import ProductDetail from "@/views/Product/ProductDetail.vue";
import { ref, onMounted, reactive } from "vue";

const isLoading = ref(false);
const product = ref();
let imgs = reactive([]);
const selectedImg = ref(0);
const getProduct = async () => {
  isLoading.value = true;

  const data = await api.getSingle("item", router.currentRoute.value.params.id);
  product.value = data;
  imgs = data.urls;
  isLoading.value = false;
};

onMounted(() => {
  getProduct();
});
</script>

<template>
  <div v-if="product" class="section grid grid-cols-7 py-10 gap-10">
    <div class="space-y-10 col-span-2 md:col-span-1">
      <img
        v-for="(img, index) in imgs"
        :key="index"
        @click="($event) => (selectedImg = index)"
        :src="img"
        :alt="index"
        class="cursor-pointer transition-all duration-300 delay-75 hover:shadow"
      />
    </div>
    <div class="col-span-5 md:col-span-3">
      <img :src="imgs[selectedImg]" alt="image" />
    </div>
    <div class="col-span-7 md:col-span-3 space-y-10">
      <ProductDetail :product="product" />
    </div>
  </div>
</template>
