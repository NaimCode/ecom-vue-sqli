<script setup>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import Animation from "@/assets/success.json";
</script>

<template>
  <div
    class="h-[60vh] md:h-screen w-full flex flex-col items-center text-center justify-center gap-6"
  >
    <h1 class="text-4xl font-extralight">Thank You For Your Order</h1>

    <button class="secondary font-extralight rounded-full">
      <router-link to="/shop"> 🧡 </router-link>
    </button>
    <div class="fixed top-0 left-[50%] -translate-x-[50%] w-full">
      <Vue3Lottie :animationData="Animation"></Vue3Lottie>
    </div>
  </div>
</template>
