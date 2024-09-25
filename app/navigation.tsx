import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { Pathnames, LocalePrefix } from "next-intl/routing";

const locales = ['ru', 'en', 'de']

const pathnames: Pathnames<typeof locales> = {
    '/': '/',
    '/pathnames': {
      en: '/pathnames',
      ru: '/путь',      
      de: '/weg',
    }
  };

const localePrefix: LocalePrefix<typeof locales> = 'always';

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix
  });