import { createRouter, createWebHistory } from "vue-router";
// Views
import ViewHome from "../views/ViewHome.vue";
import ViewDishDetail from "../views/ViewDishDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ViewHome,
  },
  {
    path: "/:dishId",
    name: "dish-detail",
    component: ViewDishDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
