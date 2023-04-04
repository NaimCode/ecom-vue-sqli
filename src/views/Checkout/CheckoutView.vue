<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const cart = computed(() => store.getters.cart);
const total = computed(() => store.getters.cartTotal);
</script>

<template>
  <div
    class="grid grid-cols-2 overflow-hidden fixed top-0 left-0 z-50 h-screen w-screen"
  >
    <div class="bg-accent border-r px-4 py-12">
      <div class="flex flex-col gap-2 max-w-lg mx-auto">
        <div class="flex flex-col gap-2">
          <div
            v-for="item in cart"
            :key="item.id"
            class="flex flex-row items-center justify-between text-xs font-bold"
          >
            <div class="flex flex-row items-center gap-2">
              <img
                :src="item.product.urls[0]"
                class="w-12 h-12 object-cover border border-black rounded-md"
                :alt="item.product.title"
              />
              <h3>{{ item.product.title }}</h3>
            </div>
            <div class="flex flex-row items-center gap-4">
              <p>${{ item.quantity * item.product.price }}</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="flex flex-row items-center justify-between">
          <h2 class="">Subtotal</h2>
          <h2 class="">${{ total }}</h2>
        </div>
        <div class="flex flex-row items-center justify-between">
          <h2 class="">Shipping</h2>
          <h2 class="">${{ cart.length * 4 }}</h2>
        </div>
        <div class="flex flex-row items-center justify-between">
          <h2 class="text-2xl">Total</h2>
          <h2 class="text-2xl">${{ total + cart.length * 4 }}</h2>
        </div>
      </div>
    </div>
    <div class="bg-white border-l"></div>
  </div>
</template>
