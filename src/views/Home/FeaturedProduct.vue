<script setup>
import api from "@/api";
import ProductCard from "@/components/ProductCard.vue";
import { ref, onMounted } from "vue";
const products = ref([]);

onMounted(async () => {
  const data = await api.get("item", {
    "fields.featured": true,
  });
  products.value = data;
});
</script>
<template>
  <div class="section space-y-10">
    <h2 class="text-4xl text-center">Featured Products</h2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="w-full flex items-center justify-center py-10">
      <a href="/shop?featured=true">
        <button class="secondary px-20">View All</button>
      </a>
    </div>
  </div>
</template>
