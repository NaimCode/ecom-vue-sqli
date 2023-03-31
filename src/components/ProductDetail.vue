<script setup>
import { defineProps } from "vue";
const props = defineProps(["product"]);
// eslint-disable-next-line vue/no-setup-props-destructure
const { product } = props;
</script>

<template>
  <div class="w-full">
    <h1>
      {{ product.name }}
    </h1>
  </div>
</template>
