import { createRouter, createWebHistory } from "vue-router";

// Page Routes
import HomeView from "../views/HomeView.vue";
import CatalogView from '../views/CatalogView.vue';
import ContactView from '../views/ContactView.vue';
import BlogView from '../views/BlogView.vue';
import BlogPost from '../views/BlogPost.vue';
import CartView from '../views/CartView.vue';
import ProfileView from '../views/ProfileView.vue';
import WishlistView from '../views/WishlistView.vue';
import CompareView from '../views/CompareView.vue';
import ProductView from '../views/ProductView.vue';
import DynamicInfo from '../views/DynamicInfo.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
    meta: {
      title: "ElectroShop - Home"
    }
  }, {
    name: "catalog",
    path: "/catalog",
    component: CatalogView,
    meta: {
      title: "ElectroShop - Catalog",
    },
  }, {
    name: "contact",
    path: "/contact",
    component: ContactView,
    meta: {
      title: "ElectroShop - Contact Us",
    },
  }, {
    name: "blog",
    path: "/blog",
    component: BlogView,
    meta: {
      title: "ElectroShop - Blog",
    },
  }, {
    name: "blog-page",
    path: "/blog/:id/:description",
    component: BlogPost,
    meta: {
      title: "ElectroShop - BLOG",
    },
  }, {
    name: "cart",
    path: "/my-Cart",
    component: CartView,
    meta: {
      title: "ElectroShop - My Cart",
    },
  }, {
    name: "profile",
    path: "/profile-page",
    component: ProfileView,
    meta: {
      title: "ElectroShop - Login Account",
    },
  }, {
    name: "wishlist",
    path: "/wishlist",
    component: WishlistView,
    meta: {
      title: "ElectroShop - Wishlist",
    },
  }, {
    name: "compare",
    path: "/compare",
    component: CompareView,
    meta: {
      title: "ElectroShop - Comparison",
    },
  }, {
    name: "product",
    path: "/product/:id/:description",
    component: ProductView,
    meta: {
      title: "ElectroShop - Product Details",
    },
  }, {
    name: "footer-link",
    path: "/informations/:name",
    component: DynamicInfo,
    meta: {
      title: "ElectroShop - Informations",
    },
  }, {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
    meta: {
      title: "404-NotFound",
    },
  },
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