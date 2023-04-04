<script setup>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import Animation from "@/assets/404.json";
</script>

<template>
  <div class="py-20">
    <Vue3Lottie :animationData="Animation" :height="200"></Vue3Lottie>
  </div>
</template>
