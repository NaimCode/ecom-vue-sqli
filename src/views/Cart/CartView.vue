<script setup>
import { useStore } from "vuex";

import { computed } from "vue";
import { toast } from "vue3-toastify";

const store = useStore();
const cart = computed(() => {
  return store.state.cart;
});

const removeFromCart = (item) => {
  store.dispatch("removeFromCart", item).catch((err) => {
    toast.error(err.message);
  });
};

const clearCart = () => {
  store.dispatch("clearCart");
};
</script>

<template>
  <section class="section py-10 space-y-6">
    <h1 class="text-4xl">Shopping Cart</h1>

    <table class="table-auto w-full font-light text-lg">
      <thead>
        <tr class="uppercase font-light border-b space">
          <th>Product</th>
          <th class="text-lg">Variant</th>
          <th class="text-lg text-end">Quantity</th>
          <th class="text-lg text-end">Price</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in cart"
          :key="item.id"
          class="border-t border-b"
          style="margin: 10px 0px"
        >
          <td>
            <div class="flex items-center gap-3 py-4">
              <img :src="item.product.urls[0]" alt="image" class="w-12" />
              <div>
                <router-link
                  :to="`/product/${item.product.id}`"
                  class="text-lg"
                >
                  {{ item.product.title }}
                </router-link>
              </div>
            </div>
          </td>
          <td class="text-lg">
            <div class="flex items-center gap-3">
              <p class="text-sm text-gray-500 uppercase font-bold">
                {{ item.size }}
              </p>
              <div
                class="w-12 h-5 rounded-full"
                :style="{ backgroundColor: item.color }"
              ></div>
            </div>
          </td>
          <td class="text-lg text-end">x{{ item.quantity }}</td>
          <td class="text-lg text-end">
            ${{ item.product.price * item.quantity }}
          </td>
          <td class="text-lg text-end">
            <button
              @click="removeFromCart(item)"
              class="text-red-500 text-xs uppercase font-bold"
            >
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      v-if="cart.length > 0"
      class="flex flex-row justify-between items-center gap-3"
    >
      <button @click="clearCart" class="tertiary px-10">Clear Cart</button>
      <button class="secondary px-10">
        <router-link to="/checkout"> Checkout </router-link>
      </button>
    </div>

    <div v-else class="flex flex-col items-center py-10 gap-10">
      <h6 class="text-4xl font-extralight">Your cart is empty !</h6>

      <router-link to="/shop" class="secondary font-extralight"
        >Continue Shopping 👉</router-link
      >
    </div>
  </section>
</template>
