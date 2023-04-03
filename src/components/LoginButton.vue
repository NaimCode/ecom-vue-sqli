<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from "@coreui/vue";
import { useStore } from "vuex";
import { computed } from "vue";

import { toast } from "vue3-toastify";
const store = useStore();
const login = async () => {
  try {
    await store.dispatch("logIn");
  } catch (error) {
    toast.error(error.message);
  }
};

const logout = async () => {
  try {
    await store.dispatch("logOut");
  } catch (error) {
    toast.error(error.message);
  }
};

const user = computed(() => {
  console.log("store.state.user :>> ", store.state.user);
  return store.state.user;
});
</script>

<template>
  <button
    v-if="!user"
    @click="login"
    class="flex flex-row gap-1 rounded-full bg-blue-500 text-white p-1 items-center border transition-all outline-primary/0 hover:outline-primary/100 hover:shadow"
  >
    <span class="text-[12px] font-bold px-1">Sign with Google</span>
    <div class="bg-white rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 48 48"
      >
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        ></path>
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        ></path>
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        ></path>
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        ></path>
      </svg>
    </div>
  </button>
  <div v-if="user">
    <CDropdown direction="dropstart">
      <CDropdownToggle custom color="primary">
        <button
          class="flex flex-row gap-1 rounded-full bg-white p-1 items-center border transition-all outline-primary/0 hover:outline-primary/100 hover:shadow"
        >
          <span class="text-[12px] font-bold px-1">{{ user.displayName }}</span>
          <img :src="user.photoURL" class="w-8 h-8 rounded-full" alt="user" />
        </button>
      </CDropdownToggle>
      <CDropdownMenu
        class="translate-y-[50%] drop-shadow-xl border-none active:bg-accent text-[14px] font-bold"
      >
        <CDropdownItem
          component="button"
          @click="login"
          class="flex flex-row items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M12,1C7.714,1,4.005,3.678,2.598,7.578L1.212,7.074	c-0.432-0.157-0.871,0.375-0.7,0.841l1.253,3.34c0.153,0.428,0.604,0.592,0.996,0.363l3.107-1.753	C6.299,9.617,6.305,8.927,5.873,8.77L4.478,8.262C5.603,5.143,8.57,3,12,3c4.077,0,7.494,3.049,7.949,7.093	c0.058,0.511,0.49,0.888,0.992,0.888c0.038,0,0.075-0.002,0.113-0.006c0.549-0.062,0.944-0.557,0.882-1.105	C21.368,4.813,17.096,1,12,1z"
              opacity=".35"
            ></path>
            <circle cx="12" cy="10" r="4" opacity=".35"></circle>
            <path
              d="M16,16H8c-1.657,0-3,1.343-3,3s1.343,3,3,3h8c1.657,0,3-1.343,3-3S17.657,16,16,16z"
            ></path>
          </svg>
          Change Account</CDropdownItem
        >
        <CDropdownDivider />
        <CDropdownItem
          component="button"
          @click="logout"
          class="flex flex-row items-center gap-2 text-red-500 fill-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" opacity=".35"></circle>
            <path
              d="M7,7.869C7,7.098,6.07,6.71,5.522,7.253l-3.893,3.856c-0.495,0.491-0.495,1.291,0,1.782l3.893,3.856	C6.07,17.29,7,16.902,7,16.131V7.869z"
            ></path>
            <rect width="7.799" height="4" x="4.201" y="10"></rect>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
          Logout</CDropdownItem
        >
      </CDropdownMenu>
    </CDropdown>
  </div>
</template>
