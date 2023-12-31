import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const availableLanguages = [ 'en', 'chi', 'hi']
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const option = {
  order:['navigator', 'htmlTag', 'path', 'subdomail'],
  checkWhitelist:true
}
i18n
  
  .use(Backend)
  
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  
  .init({
    fallbackLng: 'en',
    debug: true,
    whitelist:availableLanguages,
    detection:option,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;