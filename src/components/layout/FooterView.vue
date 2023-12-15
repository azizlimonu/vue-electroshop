<template>
  <div class="footer">
    <FooterTop />
    <FooterMid />
    <FooterBot />
  </div>
</template>

<script setup>
import FooterTop from '../Footer/FooterTop.vue';
import FooterMid from '../Footer/FooterMid.vue';
import FooterBot from '../Footer/FooterBot.vue';
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--bg-color);
  width: 100%;
  padding-top: 30px;
  color: white;
  margin-top: 30px;

  a {
    color: white;
  }
}
</style>