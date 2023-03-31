<!-- eslint-disable vue/no-unused-vars -->
<script setup>
import api from "@/api";
import { ref, onMounted } from "vue";
const collections = ref([]);

const fetchCollections = async () => {
  const data = await api.get("category");
  collections.value = data;
};

onMounted(() => {
  fetchCollections();
});
</script>

<template>
  <div class="section grid grid-cols-4 gap-4">
    <div
      v-for="(collection, i) in collections"
      :key="collection.id"
      :class="i === 0 ? 'col-span-2' : 'col-span-1'"
    >
      <img :src="collection.url" :alt="collection.title" />
    </div>
  </div>
</template>
