import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      portfolio: 'Portfolio',
      experience: 'Experience',
      projects: 'Projects',
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


const i18n = createI18n<{
  message: Record<string, string>;
}>({
  locale: 'en',
  legacy: false,
  messages,
});

export default i18n;
