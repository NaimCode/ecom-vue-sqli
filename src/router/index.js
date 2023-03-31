import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/Shop/ShopView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("../views/Product/ProductView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
