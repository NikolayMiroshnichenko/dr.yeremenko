'use client';
import { useState } from 'react';
import css from './UikitView.module.scss';
import { tabs } from './initData';
import Tabs from './components/Tabs/Tabs';

const UikitView = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className={css.wrapper}>
            <div className={css.tabsWrapper}>
                <Tabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
            <div className={css.block}>
                <span className={css.blockTitle}>{activeTab.title}:</span>
                <div className={css.blockContent}>
                    {activeTab.component}
                </div>
            </div>
        </section>
    )
};

export default UikitView;