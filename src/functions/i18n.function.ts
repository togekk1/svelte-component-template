import type { i18n_type } from '../interfaces/i18n.interface';

export async function select_language(language: string): Promise<i18n_type> {
  let id = ['en-US', 'zh-TW', 'zh-CN'].indexOf(language);
  if (id < 0) id = 0;
  return (await import(`../../build/${language}.untouched.js`)).i18n;
}
