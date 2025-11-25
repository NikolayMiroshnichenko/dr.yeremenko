import React from 'react';
import css from './TypographyDemo.module.scss';

const TypographyDemo = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.blockWrap}>
        <h1 className={css.heading1}>Заголовок H1</h1>
        <h2 className={css.heading2}>Заголовок H2</h2>
        <h3 className={css.heading3}>Заголовок H3</h3>
        <h4 className={css.heading4}>Заголовок H4</h4>
        <h5 className={css.heading5}>Заголовок H5</h5>
        <h6 className={css.heading6}>Заголовок H6</h6>
      </div>
      <div className={css.blockWrap}>
        <p className={css.textLg}>Великий текст для параграфа. Використовується міксин text-lg.</p>
        <p className={css.text}>Звичайний текст для параграфа. Використовується міксин text.</p>
        <p className={css.textSmall}>Малий текст. Використовується міксин text-sm.</p>
      </div>
    </div>
  );
};

export default TypographyDemo;
