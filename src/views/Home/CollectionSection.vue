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
  <div class="section grid grid-cols-2 lg:grid-cols-4 gap-4">
    <div
      v-for="(collection, i) in collections"
      :key="collection.id"
      class="overflow-hidden group relative"
      :class="i === 0 ? 'col-span-2' : 'col-span-1'"
    >
      <img
        :src="collection.url"
        :alt="collection.title"
        class="transition-all duration-500 group-hover:scale-[120%]"
      />
      <div
        class="absolute top-0 left-0 w-full h-full bg-black/0 transition-all duration-500 group-hover:bg-black/[.35] p-2 lg:p-10"
      >
        <div
          class="w-full border border-white h-full transition-all delay-200 duration-500 flex flex-row items-end justify-end"
        >
          <a :href="`/shop?category=${collection.title}`" class="primary">
            {{ collection.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
