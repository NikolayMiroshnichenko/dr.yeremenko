import css from './Header.module.scss';
import classNames from 'classnames';
import LanguageSwitcher from '@/components/languageSwitcher/LanguageSwitcher';
import SvgGlobal from '@/project/svg/SvgGlobal';

const Header = () => {

    return (
        <header className={css.wrapper}>
            <div className={css.container}>
                <div className={classNames(css.row, css.rowBetween)}>
                    <div>LOGO</div>
                    <div className={css.row}>
                        <LanguageSwitcher />
                        <span className={css.lineVertical} />
                        <div className={classNames(css.row, css.menuBurger)}>
                            <span>MENU</span>
                            <SvgGlobal
                                name={'menu-burger'}
                                dataStyles={{ className: css.menuBurgerSvg }}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
};


export default Header;