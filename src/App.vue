<template>
  <main class="main">
    <Home></Home>
     <!-- <FluidCanvas></FluidCanvas> -->
      <SmokeCanvas></SmokeCanvas>
    <!-- <img src="./assets/cosmos-background.jpg" class="background" alt="Background" /> -->
  </main>
</template>

<script setup lang="ts">
import Home from './pages/Home.vue';
import FluidCanvas from './FluidCanvas.vue';
import SmokeCanvas from './SmokeCanvas.vue';
</script>

<style scoped>
.text {
  color: white;
}

.main {
  position: relative;
  height: 100vh;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>