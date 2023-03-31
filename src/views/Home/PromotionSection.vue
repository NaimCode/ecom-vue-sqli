<template>
  <div class="section grid grid-cols-1 lg:grid-cols-4 gap-12">
    <div class="col-span-3 bg-[#F4F4F4] flex justify-end px-10 relative">
      <div
        class="absolute left-[50%] -translate-x-[50%] md:translate-x-0 md:left-[5%] top-[50%] -translate-y-[50%] flex flex-col items-center"
      >
        <span class="text-2xl lg:text-4xl tracking-widest font-extralight">
          MERRY
        </span>
        <span
          class="text-4xl lg:text-7xl tracking-widest font-light capitalize"
        >
          Christmas
        </span>
        <div class="grid grid-cols-3">
          <div class="col-span-2">
            <span class="text-6xl lg:text-8xl tracking-widest font-semibold">
              40
            </span>
          </div>
          <div
            class="text-2xl lg:text-4xl flex flex-col justify-center items-center"
          >
            %
            <br />
            Off
          </div>
        </div>
        <a href="/shop?off=40">
          <button class="tertiary text-base py-3 px-6 mt-6">Shop Now</button>
        </a>
      </div>
      <img
        src="https://cdn.shopify.com/s/files/1/0582/4131/9071/files/banner-2.png?v=1632190606"
        alt="promotoin"
        class="align-middle"
      />
    </div>
    <div class="relative bg-accent hidden md:block">
      <div
        class="absolute left-0 top-0 w-full h-full justify-center flex flex-col items-center"
      >
        <span class="text-2xl tracking-widest font-extralight"> YOUR NEXT</span>
        <span class="text-5xl tracking-widest font-light capitalize">
          Purchase
        </span>
        <div class="grid grid-cols-3">
          <div class="col-span-2">
            <span class="text-7xl tracking-widest font-semibold"> 10 </span>
          </div>
          <div class="text-2xl flex flex-col justify-center items-center">
            %
            <br />
            Off
          </div>
        </div>
        <a href="/shop?off=10">
          <button class="tertiary text-base py-3 px-6 mt-6">Shop Now</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>
