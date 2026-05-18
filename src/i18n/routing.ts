import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh', 'es', 'vi', 'ko', 'ru'],
  defaultLocale: 'en',
  localePrefix: 'always',
});
