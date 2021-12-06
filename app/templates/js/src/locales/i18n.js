import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import store from 'store';
import { directionActions } from 'app/molecules/Direction/ducks/slice';
import en from './en/translation.json';

const translationsJson = {
  en: {
    translation: en,
  },
};
export const languageLabels = {
  en: 'English',
};
export const SelectLabels = {
  en: 'Select English',
};
export const locales = ['en'];

export const changeLanguage = (i18nx, language) => {
  store.dispatch(directionActions.setLanguage(language));
  i18nx.changeLanguage(language);
};

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: translationsJson,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',

    interpolation: {
      format(value, format) {
        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'bold') return String(value).bold();
        return value;
      },
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      // ...
      defaultTransParent: 'div', // a valid react element - required before react 16
      transEmptyNodeValue: '', // what to return for empty Trans
      transSupportBasicHtmlNodes: true, // allow <br/> and simple html elements in translations
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'], // don't convert to <1></1> if simple react elements
    },
  });
