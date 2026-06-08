import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'pt-BR', 'pt', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: true  
});