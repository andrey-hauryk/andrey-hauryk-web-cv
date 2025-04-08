<template>
  <main class="main">
    <div class="smoke-wrapper">
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
import SpaceScene from '../SpaceScene.vue';
import type {Section} from '../types/activeSectionTypes';

defineProps<{
  activeSection: Section;
}>();

const emit = defineEmits<{
  (event: 'setActiveSection', section: Section): void;
}>();

const handleSetActiveSection = (section: Section) => {
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