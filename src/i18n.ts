import { createI18n } from 'vue-i18n';
import type { I18n } from 'vue-i18n';
import Experience from './views/Experience.vue';


interface Messages {
  en: {
    message: Record<string, string>;
  };
  ru: {
    message: Record<string, string>;
  };
}

const messages: Messages = {
  en: {
    message: {
      portfolio: 'Portfolio',
      experience: 'Experience',
      projects: 'Projects'
    },
  },
  ru: {
    message: {
      portfolio: 'Портфолио',
      experience: 'Опыт',
      projects: 'Проекты',
    },
  },
};

const i18n: I18n = createI18n({
  locale: 'en',
  legacy: false,
  messages,
});

export default i18n;
