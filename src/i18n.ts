import { createI18n } from 'vue-i18n';

const messages = {
  'en-US': {
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

const i18n = createI18n({
  locale: 'en-US',
  legacy: false,
  messages: messages as { [key: string]: { message: Record<string, string> } },
});

export default i18n;
