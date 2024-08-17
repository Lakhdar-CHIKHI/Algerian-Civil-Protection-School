import { LANGUAGE_MENU } from "./app/constants/languages";

export const locales = ['en', 'ar', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const languages = ['English', 'Francais', 'Arabic'] as const;
export type Language = (typeof languages)[number];

export interface LanguageProps {
    key: Locale,
    lang: Language
}

export const defaultLocale: LanguageProps = {key: LANGUAGE_MENU.en.key as Locale, lang: LANGUAGE_MENU.en.lang as Language};