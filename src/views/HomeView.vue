<template>
  <div class="home">
    <MainBanner />
    <ProductSwiper :products="popularProducts" text="Popular Products" />
    <Category />
    <ProductSwiper :products="featuredProducts" text="Featured Products" />
    <SecondBanner />
    <ProductSwiper :products="latestProducts" text="Latest Products" />
    <BlogHome />
  </div>
</template>

<script setup>
import MainBanner from '../components/Home/MainBanner.vue'
import ProductSwiper from '../components/Home/ProductSwiper.vue'
import Category from '../components/Home/Category.vue'
import SecondBanner from '../components/Home/SecondBanner.vue'
import BlogHome from '../components/Home/BlogHome.vue'

import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

const { state, commit } = useStore()
const popularProducts = ref([])
const latestProducts = ref([])
const featuredProducts = ref([])

onMounted(() => {
  commit('getPopularProducts')
  popularProducts.value = state.popularProducts
  latestProducts.value = state.latestProducts
  featuredProducts.value = state.featuredProducts
})
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
