import { useTranslations } from 'next-intl';

export const langConfig = {
    locales: ['uk', 'en'],
    defaultLocale: 'uk',
    // localeCookie: false
}

export const getLangSettings = () => {
    const t = useTranslations('global');

    return {
        ...langConfig,
        data: [
            {
                code: 'uk',
                title: t('ukrainian_language'),
                title_short: t('ukrainian_language_short')
            },
            {
                code: 'en',
                title: t('english_language'),
                title_short: t('english_language_short')
            },
        ]
    }
}