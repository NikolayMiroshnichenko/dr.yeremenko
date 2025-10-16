export const getCurrentLang = (langList, locale, defaultLocale) => {
    if (!langList.length) return;
    return langList.find(item => item.code === (locale || defaultLocale));
};