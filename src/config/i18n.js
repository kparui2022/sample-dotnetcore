import { createI18n } from 'vue-i18n'
import en from '../locales/en.json';
import kr from '../locales/kr.json';

const messages = {
  en, 
  kr 
};

const i18n = createI18n({
  locale: 'kr',
  fallbackLocale: 'kr',
  messages: messages,
});


export default i18n;