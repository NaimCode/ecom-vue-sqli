<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineProps } from "vue";
const props = defineProps(["type", "onClick"]);

// eslint-disable-next-line vue/no-setup-props-destructure
const { onClick, type = "primary" } = props;
</script>

<template>
  <button @click="onClick()" :class="type">
    <slot />
  </button>
</template>
