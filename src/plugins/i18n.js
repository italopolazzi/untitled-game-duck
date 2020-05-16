import i18n from "i18next"
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
      'Switch Language': 'Switch language',
      test: {
        new: 'New'
      }
    }
  },
  pt: {
    translation: {
      'Welcome to React': 'Bem-vindo(a) ao React e react-i18next',
      'Switch Language': 'Mudar a linguagem',
      test: {
        new: 'Novo'
      }
    }
  }
}

/**
 * The interesting part here is by i18n.use(initReactI18next)
 * we pass the i18n instance to react-i18next which will make it
 * available for all the components via the context api
 */

i18n.use(initReactI18next).init({
  resources,
  // lng: 'pt', // Language to use(overrides language detection)
  fallbackLng: 'pt', // Language to use if translations in user language are not available.
  keySeparator: '.', // Char to separate keys
  interpolation: {
    escapeValue: false, // Escape passed in values to avoid xss injection (ps: react already safes from xss)
  }
})

export default i18n