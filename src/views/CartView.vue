<template>
  <div class="my-cart">
    <CartContent />
  </div>
</template>

<script setup>
import CartContent from '../components/Cart/CartContent.vue'
</script>

<style lang="scss" scoped>
.my-cart {
  flex: 1;
  @media (max-width: 767px) {
    max-width: 100%;
  }
  @media (max-width: 1199px) {
    flex-direction: column-reverse;
    padding: 0 12px;
  }
}
</style>
