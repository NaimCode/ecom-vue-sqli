<!-- eslint-disable vue/no-setup-props-destructure -->
<script setup>
import { toast } from "vue3-toastify";
import { COLORS, SIZES } from "@/data";
import { defineProps, ref } from "vue";

import { useStore } from "vuex";
import { computed } from "vue";

const { product } = defineProps(["product"]);
const store = useStore();

const user = computed(() => {
  console.log("store.state.user :>> ", store.state.user);
  return store.state.user;
});
const order = ref({
  quantity: 1,
  size: undefined,
  color: product.colors ? product.colors[0] : undefined,
});

const increase = () => {
  order.value.quantity += 1;
};
const decrease = () => {
  if (order.value.quantity > 1) {
    order.value.quantity -= 1;
  }
};

const addToCart = () => {
  console.log("addToCart");
  toast(<h1>Error</h1>);
};

const selectSize = (size) => {
  order.value.size = size;
};

const selectColor = (color) => {
  order.value.color = color;
};
</script>

<template>
  <div class="space-y-6 font-light text-lg">
    <div class="flex flex-wrap gap-3 items-center">
      <div
        v-for="item in product.tags"
        :key="item"
        class="bg-green-100 rounded-full py-1 px-3 text-xs text-green-600"
      >
        {{ item }}
      </div>
    </div>
    <h1 class="text-4xl capitalize">
      {{ product.title }}
    </h1>
    <hr />
    <!-- <div class="flex flex-row items-center p-0 w-10 h-10">
      <button class="primary">-</button>
    </div> -->
    <h6 class="text-4xl font-bold">$ {{ product.price * order.quantity }}</h6>
    <div class="space-y-6">
      <h6>
        Size: <span class="font-semibold uppercase">{{ order.size }}</span>
      </h6>
      <div class="flex flex-wrap gap-2 items-center py-3">
        <button
          v-for="item in SIZES"
          :key="item"
          @click="selectSize(item)"
          class="w-24 py-2 px-1 border border-gray-500 text-center hover:outline-dashed uppercase"
        >
          {{ item }}
        </button>
      </div>
      <div>
        <h6>
          Colors: <span class="font-semibold">{{ order.color }}</span>
        </h6>
        <div class="flex flex-wrap gap-4 items-center py-3">
          <div
            v-for="(color, index) in COLORS.slice(0, 5)"
            :key="index"
            :style="`background-color: ${color}`"
            @click="selectColor(color)"
            class="w-16 h-16 rounded-full border hover:outline-dashed"
          ></div>
        </div>
      </div>
      <div class="grid grid-cols-[1fr_1fr_1fr_5fr] gap-3">
        <button @click="decrease" class="primary border">-</button>
        <h6 class="border flex justify-center items-center">
          {{ order.quantity }}
        </h6>
        <button @click="increase" class="primary border">+</button>
        <button
          :disabled="!user"
          @click="addToCart"
          class="secondary hover:bg-accent disabled:bg-accent disabled:text-primary disabled:cursor-not-allowed"
        >
          {{ user ? "Add to cart" : "Sign in before adding" }}
        </button>
      </div>
    </div>
    <hr />
    <div class="flex items-center gap-2">
      <span class="text-gray-500">Brand:</span>
      <span class="text-gray-700 capitalize">{{ product.brand }}</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-gray-500">Condition:</span>
      <span class="text-gray-700 capitalize"> Lorem ipsum dolor sit amet </span>
    </div>

    <p class="text-base font-normal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nostrum
      magnam cupiditate dolore voluptatum culpa. Ab repellendus nemo error
      itaque, praesentium, quo ipsa quas ad magni consequuntur harum rem.
      Deleniti.
    </p>
  </div>
</template>
