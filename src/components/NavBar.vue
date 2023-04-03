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
        <button>
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
        </button>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
          >
            <path
              d="M 25 1 C 19.464844 1 15 5.464844 15 11 L 15 13 L 7.09375 13 L 7 13.875 L 3 48.875 L 2.875 50 L 47.125 50 L 47 48.875 L 43 13.875 L 42.90625 13 L 35 13 L 35 11 C 35 5.464844 30.535156 1 25 1 Z M 25 3 C 29.464844 3 33 6.535156 33 11 L 33 13 L 17 13 L 17 11 C 17 6.535156 20.535156 3 25 3 Z M 8.90625 15 L 15 15 L 15 17.28125 C 14.402344 17.628906 14 18.261719 14 19 C 14 20.105469 14.894531 21 16 21 C 17.105469 21 18 20.105469 18 19 C 18 18.261719 17.597656 17.628906 17 17.28125 L 17 15 L 33 15 L 33 17.28125 C 32.402344 17.628906 32 18.261719 32 19 C 32 20.105469 32.894531 21 34 21 C 35.105469 21 36 20.105469 36 19 C 36 18.261719 35.597656 17.628906 35 17.28125 L 35 15 L 41.09375 15 L 44.875 48 L 5.125 48 Z"
            ></path>
          </svg>
        </button>
        <LoginButton />
      </div>
    </div>
  </nav>
</template>

<script setup>
import LoginButton from "./LoginButton.vue";
</script>
