import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/book",
  },
  {
    path: "/book",
    name: "userHome",
    component: () => import("@/views/book/HomePage.vue"),
  },
  {
    path: "/shop",
    name: "product",
    component: () => import("@/views/book/ProductsView.vue"),
    props: true,
  },
  {
    path: "/productDetails/:id",
    name: "productDetails",
    component: () => import("@/views/book/ProductDetail.vue"),
  },
  {
    path: "/latest",
    name: "latest",
    component: () => import("@/components/book/LatestByCategory.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/book/cartView.vue"),
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: () => import("@/views/book/wishlistView.vue"),
  },
  {
    path: "/checkout2",
    name: "checkout",
    component: () => import("@/views/book/placeOrder.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/book/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
export default router;
