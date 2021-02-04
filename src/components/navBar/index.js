import s from './style.module.css';
import cn from 'classnames';

const NavBar = ({bgActive = false, isMenuOpen, onMenuClick}) => {
    return (
        <nav id={s.navbar} className={cn({
            [s.bgActive]: bgActive
        })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                LOGO
                </p>
                <div
                    className={cn(s.menuButton, {
                        [s.active]: isMenuOpen
                    })}
                    onClick={onMenuClick}
                >
                <span />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;