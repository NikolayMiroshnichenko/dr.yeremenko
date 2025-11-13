'use client';
import css from './UikitView.module.scss';
import Colors from './components/Colors/Colors';

const UikitView = () => {
    return (
        <section className={css.wrapper}>
            <div className={css.block}>
                <span className={css.blockTitle}>Colors:</span>
                <div className={css.blockContent}>
                    <Colors />
                </div>
            </div>
        </section>
    )
};

export default UikitView;