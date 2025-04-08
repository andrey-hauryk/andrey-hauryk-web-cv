<template>
  <main class="main">
    <div class="smoke-wrapper">
      <!-- <SmokeCanvas /> -->
       <SpaceScene />
    </div>

    <Header 
      :activeSection="activeSection"
      @setActiveSection="handleSetActiveSection"
    />
    <slot name="content"></slot>
  </main>
</template>


<script setup lang="ts">
import Header from '../components/Header.vue';
import SmokeCanvas from '../SmokeCanvas.vue';
import SpaceScene from '../SpaceScene.vue';


defineProps<{
  activeSection: string;
}>();

const emit = defineEmits<{
  (event: 'setActiveSection', section: string): void;
}>();

const handleSetActiveSection = (section: string) => {
  emit('setActiveSection', section);
}

</script>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
}

</style>