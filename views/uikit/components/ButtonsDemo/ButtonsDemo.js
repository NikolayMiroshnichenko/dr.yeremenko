import Button from '@/components/buttons/Button';
import css from './ButtonsDemo.module.scss';

const BUTTON_SIZES = ['large', 'medium', 'small'];

const ButtonsDemo = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.blockWrap}>
        <p className={css.blockTitle}>Main</p>
        <div className={css.grid}>
          {BUTTON_SIZES.map(size => (
            <div key={size}>
              <Button size={size}>Main {size}</Button>
            </div>
          ))}
          <div>
            <Button disabled>Main Disabled</Button>
          </div>
          <div>
            <Button href="https://google.com" title="Перейти до Google">Main link</Button>
          </div>
        </div>
      </div>
      <div className={css.blockWrap}>
        <p className={css.blockTitle}>Secondary</p>
        <div className={css.grid}>
          {BUTTON_SIZES.map(size => (
            <div key={size}>
              <Button type="secondary" size={size}>Main {size}</Button>
            </div>
          ))}
          <div>
            <Button type="secondary" disabled>Main Disabled</Button>
          </div>
          <div>
            <Button type="secondary" href="https://google.com" title="Перейти до Google">Main link</Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ButtonsDemo;
