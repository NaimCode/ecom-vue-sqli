<script setup>
import NavBar from "@/components/NavBar.vue";
import { useStore } from "vuex";
import { auth } from "@/utils/firebase";

const store = useStore();
auth.onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});
</script>

<template>
  <NavBar />
  <router-view />
</template>
