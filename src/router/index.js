import { createRouter, createWebHistory } from "vue-router";

// Page Routes
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
    meta: {
      title: "ElectroShop - Home"
    }
  }
  // soon will be added more
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

router.beforeEach((to) => {
  document.title = to.meta.title
});

export default router;