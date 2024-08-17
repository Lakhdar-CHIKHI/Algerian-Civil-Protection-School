'use server';

import { cookies } from 'next/headers';
import { LanguageProps, defaultLocale } from '@/config';

const COOKIE_NAME = 'LANGUAGE';

export async function getUserLocale() {
  const cookie = cookies().get(COOKIE_NAME)?.value;
  if (cookie) {
    try {
      return JSON.parse(cookie);
    } catch (e) {
      console.error('Error parsing cookie:', e);
    }
  }
  return defaultLocale;
}


export async function setUserLocale(language: LanguageProps) {
  cookies().set(COOKIE_NAME, JSON.stringify(language));
}
