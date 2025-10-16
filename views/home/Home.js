'use client';
import { useTranslations } from 'next-intl';

const Home = () => {
    const t = useTranslations('main');

    return (
        <>
            <div>{t('title')}</div>
        </>
    );
};

export default Home;