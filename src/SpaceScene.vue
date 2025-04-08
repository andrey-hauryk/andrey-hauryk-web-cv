<template>
  <div ref="spaceScene" class="space-scene"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSpaceScene } from './composables/useSpaceScene';

const spaceScene = ref<HTMLDivElement | null>(null);

useSpaceScene(spaceScene);
</script>

<style>
.space-scene {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  background-color: black;
}
canvas {
  display: block;
}
</style>
