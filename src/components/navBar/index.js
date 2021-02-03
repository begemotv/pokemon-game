import s from './style.module.css';
import cn from 'classnames';

const NavBar = ({isMenuOpen, onMenuClick}) => {
    return (
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                LOGO
                </p>
                <a onClick={onMenuClick} className={cn(s.menuButton, {[s.active]: isMenuOpen})}>
                <span />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;