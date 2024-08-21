import {getRequestConfig} from 'next-intl/server';
import { getUserLocale } from './services/locale';
import { LanguageProps, Locale } from './config';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = await getUserLocale() as LanguageProps;
  
  return {
    locale: locale.key,
    messages: {
      ...(await import(`../locales/${locale.key}/home.json`)).default,
      ...(await import(`../locales/${locale.key}/about.json`)).default,
      ...(await import(`../locales/${locale.key}/training.json`)).default
    }
  };
});
