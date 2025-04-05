export type Section = 'portfolio' | 'experience' | 'projects';

export interface UseActiveSection {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}
