<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const cart = computed(() => store.getters.cart);
const total = computed(() => store.getters.cartTotal);

const data = ref({
  email: "",
  cardNumber: "",
  cardHolder: "",
  expiredMonth: "",
  expiredYear: "",
  cvv: "",
});

const onPlaceOrder = () => {
  console.log("e :>> ", data.value);
  if (
    data.value.email &&
    data.value.cardNumber &&
    data.value.cardHolder &&
    data.value.expiredMonth &&
    data.value.expiredYear &&
    data.value.cvv
  ) {
    toast.loading(`Placing order...`);
    store
      .dispatch("placeOrder")
      .then(() => {
        toast.clearAll();
        toast.success("Order placed");
        router.push({
          name: "orderConfirmed",
          params: {
            email: data.value.email,
            value: total.value,
          },
        });
      })
      .catch((err) => {
        toast.clearAll();
        toast.error(err.message);
      });
    return;
  } else {
    toast.error("Email is required");
  }
};

const onBack = () => {
  router.back();
};
</script>

<template>
  <div class="relative mx-auto w-full bg-white">
    <div class="grid min-h-screen grid-cols-10">
      <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
        <div class="mx-auto w-full max-w-lg">
          <h1 class="relative text-2xl font-medium text-gray-700 sm:text-3xl">
            Secure Checkout<span
              class="mt-2 block h-1 w-10 bg-[#3C3C3C] sm:w-20"
            ></span>
          </h1>
          <div class="mt-10 flex flex-col space-y-4">
            <div>
              <label for="email" class="text-xs font-semibold text-gray-500"
                >Email</label
              ><input
                type="email"
                id="email"
                v-model="data.email"
                name="email"
                placeholder="john.capler@fang.com"
                class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div class="relative">
              <label
                for="card-number"
                class="text-xs font-semibold text-gray-500"
                >Card number</label
              ><input
                type="text"
                v-model="data.cardNumber"
                id="card-number"
                name="card-number"
                placeholder="1234-5678-XXXX-XXXX"
                class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
              /><img
                src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                alt=""
                class="absolute bottom-3 right-3 max-h-4"
              />
            </div>
            <div>
              <p class="text-xs font-semibold text-gray-500">Expiration date</p>
              <div class="mr-6 flex flex-wrap">
                <div class="my-1">
                  <label for="month" class="sr-only"
                    >Select expiration month</label
                  ><select
                    name="month"
                    v-model="data.expiredMonth"
                    id="month"
                    class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  >
                    <option
                      v-for="item in [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                      ]"
                      :key="item"
                      :value="item"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div class="my-1 ml-3 mr-6">
                  <label for="year" class="sr-only"
                    >Select expiration year</label
                  ><select
                    v-model="data.expiredYear"
                    name="year"
                    id="year"
                    class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  >
                    <option
                      v-for="item in [
                        2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031,
                        2032,
                      ]"
                      :key="item"
                      :value="item"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div class="relative my-1">
                  <label for="security-code" class="sr-only"
                    >Security code</label
                  ><input
                    type="text"
                    v-model="data.cvv"
                    id="security-code"
                    name="security-code"
                    placeholder="Security code"
                    class="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>
            <div>
              <label for="card-name" class="sr-only">Card name</label
              ><input
                type="text"
                id="card-name"
                name="card-name"
                v-model="data.cardHolder"
                placeholder="Name on the card"
                class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
          <p class="mt-10 text-center text-sm font-semibold text-gray-500">
            By placing this order you agree to the
            <a
              href="#"
              class="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
              >Terms and Conditions</a
            >
          </p>
          <div class="flex flex-row items-center gap-4 py-3">
            <button @click="onBack" class="primary rounded-md">Back</button>
            <button
              @click="onPlaceOrder"
              class="inline-flex w-full items-center justify-center rounded secondary border border-[#3C3C3C] py-2.5 px-4 text-base font-semibold tracking-wide text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <div
        class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24"
      >
        <h2 class="sr-only">Order summary</h2>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div
            class="absolute inset-0 h-full w-full bg-gradient-to-t from-[#3C3C3C] to-teal-600 opacity-95"
          ></div>
        </div>
        <div class="relative">
          <ul class="space-y-5">
            <li
              v-for="(item, index) in cart"
              :key="index"
              class="flex justify-between"
            >
              <div class="inline-flex">
                <img
                  :src="item.product.urls[0]"
                  alt=""
                  class="max-h-16 rounded-md"
                />
                <div class="ml-3">
                  <p class="text-base font-semibold text-white">
                    Nano Titanium Hair Dryer
                  </p>
                  <p class="text-sm font-medium text-white text-opacity-80">
                    {{ item.size + " " + item.color }}
                  </p>
                </div>
              </div>
              <p class="text-sm font-semibold text-white">
                ${{ item.product.price }}.00
              </p>
            </li>
          </ul>
          <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
          <div class="space-y-2">
            <p class="flex justify-between text-lg font-bold text-white">
              <span>Total price:</span><span>${{ total }}.00</span>
            </p>
            <p class="flex justify-between text-sm font-medium text-white">
              <span>Vat: 10%</span><span>$55.00</span>
            </p>
          </div>
        </div>

        <div class="relative mt-10 flex">
          <p class="flex flex-col">
            <span class="text-sm font-bold text-white"
              >Money Back Guarantee</span
            ><span class="text-xs font-medium text-white"
              >within 30 days of purchase</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
