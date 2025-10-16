import { defineRouting } from 'next-intl/routing';
import { langConfig } from './langConfig';

export const routing = defineRouting({
    locales: langConfig.locales,
    defaultLocale: langConfig.defaultLocale,
    // localeCookie: false
});