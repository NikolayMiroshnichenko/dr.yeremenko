'use client';
import css from './Colors.module.scss';
import { colorsData } from './initData';

const Color = () => {
    return (
        <div className={css.wrapper}>
            {Object.keys(colorsData).map((item, idx) => (
                <div key={`colorsData_item_${idx}`} className={css.blockWrap}>
                    <span className={css.blockTitle}>{item}</span>
                    <div className={css.grid}>
                        {colorsData[item].map((el, i) => (
                            <div
                                className={css.gridItem}
                                key={`colorsData_item_${idx}_${i}`}
                            >
                                <div className={css.gridItemBg} style={{ background: `var(--${el.title})` }} />
                                <div className={css.gridItemBottom}>
                                    <span className={css.gridItemText}>{el.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Color;