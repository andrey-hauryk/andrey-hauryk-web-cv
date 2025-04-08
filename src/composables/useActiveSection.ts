import { ref } from 'vue';
import type { Section } from '../types/activeSectionTypes';

export function useActiveSection() {
  const activeSection = ref<Section>('portfolio');

  const setActiveSection = (section: Section): void => {
    activeSection.value = section;
  };

  return {
    activeSection,
    setActiveSection
  };
}
