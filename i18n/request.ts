import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const _cookie = (await cookies()).get('i18n')?.value;
  const locale = _cookie ?? 'en';

  return {
    locale,
    messages: (await import(`./${locale}.json`)).default
  };
});