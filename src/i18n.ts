import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      portfolio: 'Portfolio',
      experience: 'Experience',
      projects: 'Projects',
      resume: 'Resume',
      name: 'Andrey Hauryk',
      description: 'Software Engineer experienced in Full-Stack Web',
      
    },
  },
  ru: {
    message: {
      portfolio: 'Портфолио',
      experience: 'Опыт',
      projects: 'Проекты',
      resume: 'Резюме',
      name: 'Андрей Гаврик',
      description: 'Инженер-программист с опытом работы в Full-Stack Web',
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
