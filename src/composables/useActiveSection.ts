import { ref } from 'vue';
// import { UseActiveSection, Section } from '../types/activeSectionTypes';

type Section = 'portfolio' | 'experience' | 'projects';

export function useActiveSection() {
  const activeSection = ref<Section>('projects');

  const setActiveSection = (section: Section) => {
    activeSection.value = section;
  };

  return {
    activeSection,
    setActiveSection
  };
}
