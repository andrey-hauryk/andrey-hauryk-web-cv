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
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import Experience from './views/Experience.vue';
import { useActiveSection } from './composables/useActiveSection';
import {computed} from 'vue'

const { activeSection, setActiveSection } = useActiveSection();

const handleSetActiveSection = (section: string) : void => {
  setActiveSection(section)
}

const activeComponent = computed(() => {
  switch (activeSection.value) {
    case 'portfolio':
      return Home;
    case 'experience':
      return Experience;
    case 'projects':
      return Projects;
    default:
      return Home;
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