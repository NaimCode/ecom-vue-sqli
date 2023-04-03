<script setup>
import { defineProps, reactive, ref } from "vue";
import { toast } from "vue3-toastify";

import { useStore } from "vuex";
import { computed } from "vue";
import Loader from "./Loader.vue";

const store = useStore();
const isLoading = ref(false);
const user = computed(() => {
  console.log("store.state.user :>> ", store.state.user);
  return store.state.user;
});
// eslint-disable-next-line vue/no-setup-props-destructure
const { product } = defineProps(["product"]);

const imgs = reactive(product.urls);
const imgIndex = ref(0);
const onMouseEnter = () => {
  setTimeout(() => {
    imgIndex.value = imgs.length <= 1 ? 0 : 1;
  }, 200);
};

const onMouseLeave = () => {
  setTimeout(() => {
    imgIndex.value = 0;
  }, 200);
};

const addToCart = async () => {
  isLoading.value = true;
  console.log("user.value :>> ", user.value);
  await store
    .dispatch("addToCart", {
      product: product,
      user: user.value.uid,
      quantity: 1,
      size: "",
      color: product.colors ? product.colors[0] : "",
    })
    .then(() => {
      toast.success("Added to cart");
    })
    .catch((err) => {
      toast.error(err.message);
    })
    .finally(() => {
      isLoading.value = false;
    });
};
</script>

<template>
  <div>
    <div
      @mouseover="onMouseEnter"
      @mouseleave="onMouseLeave"
      class="flex flex-col group relative items-start h-full"
    >
      <div class="overflow-hidden h-full relative">
        <!-- <div class="absolute top-0 left-0 flex flex-col gap-2">
          <div
            v-for="(tag, i) in product.tags"
            :key="i"
            class="bg-black/30 py-[2px] font-semibold px-2 text-white"
          >
            {{ tag }}
          </div>
        </div> -->
        <img
          :src="imgs[imgIndex]"
          alt="product"
          class="group-hover:scale-[120%] transition-all duration-500"
        />
        <div
          class="absolute bottom-0 left-0 w-full flex flex-row item-center gap-2 justify-center"
        >
          <a
            :href="`/product/${product.id}`"
            class="primary transition-all duration-300 translate-y-16 group-hover:translate-y-0"
          >
            View Product
          </a>
          <Loader v-if="isLoading" />

          <button
            v-else
            @click="addToCart"
            class="secondary fill-white duration-300 hover:fill-primary transition-all translate-y-16 group-hover:translate-y-0 delay-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                d="M 12.027344 2 C 11.699344 2 11.392078 2.1616406 11.205078 2.4316406 L 6.6679688 9 L 2.0019531 9 C 1.6889531 9 1.3950781 9.1455313 1.2050781 9.3945312 C 1.0170781 9.6425312 0.95315625 9.964625 1.0351562 10.265625 L 3.5957031 19.53125 C 3.8347031 20.39525 4.6274375 21 5.5234375 21 L 12 21 L 12 19 L 5.5234375 19 L 3.3144531 11 L 16.8125 11 L 20.685547 11 L 20.410156 12 L 22.484375 12 L 22.964844 10.265625 C 23.046844 9.964625 22.982922 9.6425313 22.794922 9.3945312 C 22.604922 9.1455313 22.311047 9 21.998047 9 L 17.339844 9 L 12.853516 2.4355469 C 12.667516 2.1635469 12.36025 2.001 12.03125 2 L 12.027344 2 z M 12.023438 4.765625 L 14.916016 9 L 9.0976562 9 L 12.023438 4.765625 z M 18 14 L 18 18 L 14 18 L 14 20 L 18 20 L 18 24 L 20 24 L 20 20 L 24 20 L 24 18 L 20 18 L 20 14 L 18 14 z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <h3 class="text-lg font-semibold mt-2">{{ product.title }}</h3>
      <p class="text-gray-500 mt-1">${{ product.price }}.00</p>
    </div>
  </div>
</template>
