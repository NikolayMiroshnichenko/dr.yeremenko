'use client';
import { useState, useEffect, useRef } from 'react';
import css from './LanguageSwitcher.module.scss';
import { Link, usePathname } from '@/i18n/navigation';
import { getLangSettings } from '@/i18n/langConfig';
import { useLocale } from 'next-intl';
import { getCurrentLang } from './handlers';
import classNames from 'classnames';

const LanguageSwitcher = () => {
    const locale = useLocale();
    const { data: langList, defaultLocale } = getLangSettings();
    const currentLang = getCurrentLang(langList, locale, defaultLocale);
    const pathname = usePathname();

    const switcherRef = useRef(null);
    const [openSwitcher, setOpenSwitcher] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (switcherRef.current && !switcherRef.current.contains(e.target)) {
                setOpenSwitcher(false);
            };
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={switcherRef} className={css.wrapper}>
            <div onClick={() => setOpenSwitcher(prev => !prev)}>
                {currentLang?.title_short || defaultLocale}
            </div>
            {openSwitcher && (
                <div className={css.dropdown}>
                    {langList?.map(item => (
                        <div key={`lang_link_${item?.code}`} className={classNames(css.option, {
                            [css.optionActive]: item?.code == currentLang?.code
                        })}>
                            <span>
                                <Link
                                    href={pathname}
                                    locale={item?.code}
                                >
                                    {item?.title}
                                </Link>
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;