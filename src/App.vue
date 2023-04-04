<script setup>
import NavBar from "@/components/NavBar.vue";
import { useStore } from "vuex";
import { auth } from "@/utils/firebase";
import { onMounted } from "vue";
const store = useStore();

auth.onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});
onMounted(() => {
  store.dispatch("fetchProducts");
});
</script>

<template>
  <NavBar />
  <!-- <router-view /> -->
</template>
