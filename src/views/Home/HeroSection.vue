<template>
  <CCarousel indicators dark>
    <CCarouselItem>
      <div class="relative">
        <div class="absolute top-0 left-[10%] h-full w-full flex items-center">
          <h1 class="text-3xl lg:text-7xl capitalize text-black">
            the white
            <br />
            collection
          </h1>
        </div>
        <img class="d-block w-100" src="/assets/hero_1.webp" alt="slide 1" />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div class="absolute top-0 left-[10%] h-full w-full flex items-center">
        <h1 class="text-3xl lg:text-7xl capitalize text-black">
          the black
          <br />
          collection
        </h1>
      </div>
      <img class="d-block w-100" src="/assets/hero_2.webp" alt="slide 2" />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from "@coreui/vue";
</script>
