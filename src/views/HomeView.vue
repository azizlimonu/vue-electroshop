<template>
  <div class="home">
    <MainBanner />
    <ProductSwiper />
    <Category />
    <SecondBanner />
    <ProductSwiper />
    <BlogHome />
  </div>
</template>

<script setup>
import MainBanner from '../components/Home/MainBanner.vue';
import ProductSwiper from '../components/Home/ProductSwiper.vue';
import Category from '../components/Home/Category.vue';
import SecondBanner from '../components/Home/SecondBanner.vue';
import BlogHome from '../components/Home/BlogHome.vue';

import { onMounted } from 'vue';
import { mapState, mapMutations, useStore } from "vuex";

const { state, commit } = useStore();
// console.log(state);

const { popularProducts, latestProducts, featuredProducts } = mapState([
  "popularProducts",
  "latestProducts",
  "featuredProducts",
]);

const getPopularProducts = () => {
  commit("getPopularProducts");
};

onMounted(() => {
  getPopularProducts();
});
</script>

<style lang="scss" scoped>
.home {
  flex: 1;
  width: 80%;
  padding: 30px 15px;

  @media (max-width: 1199px) {
    width: 100%;
    padding: 30px 0;
  }
}
</style>