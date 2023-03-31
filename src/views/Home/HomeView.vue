<script setup>
import CollectionSection from "./CollectionSection.vue";
import FeaturedProduct from "./FeaturedProduct.vue";
import HeroSection from "./HeroSection.vue";
import PromotionSection from "./PromotionSection.vue";
</script>

<template>
  <div class="space-y-16 lg:space-y-20 mb-10">
    <div class="bg-accent"><HeroSection /></div>
    <CollectionSection />
    <FeaturedProduct />
    <PromotionSection />
  </div>
</template>
