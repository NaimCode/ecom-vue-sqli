<template>
  <nav class="sticky top-0 left-0 h-20 w-full bg-accent z-20">
    <div
      class="section justify-between h-full flex flex-row gap-3 items-center"
    >
      <span class="text-2xl font-bold tracking-[.8rem]"> SQLi </span>
      <span class="font-light space-x-6">
        <a href="/" class="transition-all font-normal hover:font-bold">
          Home
        </a>
        <a href="/shop" class="transition-all font-normal hover:font-bold">
          Shop</a
        >
      </span>
      <div class="hidden lg:flex flex-row gap-6 items-center fill-primary">
        <router-link to="/shop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
          >
            <path
              d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
            ></path>
          </svg>
        </router-link>
        <CartButton />
        <LoginButton />
      </div>
    </div>
  </nav>
</template>

<script setup>
import CartButton from "./CartButton.vue";
import LoginButton from "./LoginButton.vue";
</script>
