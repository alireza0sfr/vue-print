import { createI18n } from 'vue-i18n'
// @ts-ignore
import translations from '../assets/translations.json'
const i18n = createI18n({
  locale: 'fa',
  fallbackLocale: 'en',
  // @ts-ignore
  messages: translations,
})

export default i18n