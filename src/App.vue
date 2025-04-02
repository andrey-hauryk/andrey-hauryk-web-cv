<template>
  <main class="main">
    <Header></Header>
    <!-- <img v-lazy="'./assets/cosmos-background.jpg'" class="background" alt="Background" /> -->
    <img v-lazy="'./assets/cosmos-background.jpg'" class="background" alt="Background" />
  </main>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<style scoped>
.main {
  position: relative;
  height: 100vh;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>