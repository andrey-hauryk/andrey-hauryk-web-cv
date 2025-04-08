<template>
  <PageLayout 
    :activeSection="activeSection"
    @setActiveSection="handleSetActiveSection"
  >
    <template #content>
      <component :is="activeComponent" />
    </template>
</PageLayout>
</template>

<script setup lang="ts">
import PageLayout from './layouts/PageLayout.vue';
import Portfolio from './views/Portfolio.vue';
import Projects from './views/Projects.vue';
import Experience from './views/Experience.vue';
import { useActiveSection } from './composables/useActiveSection';
import type {Section} from './types/activeSectionTypes';
import {computed} from 'vue'

const { activeSection, setActiveSection } = useActiveSection();

const handleSetActiveSection = (section: Section) : void => {
  setActiveSection(section)
}

const activeComponent = computed(() => {
  switch (activeSection.value) {
    case 'portfolio':
      return Portfolio;
    case 'experience':
      return Experience;
    case 'projects':
      return Projects;
    default:
      return Portfolio;
  }
});
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