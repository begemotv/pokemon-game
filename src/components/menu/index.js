import s from './style.module.css';

const Menu = ({isMenuOpen}) => {
    return (
        <div className={isMenuOpen ? 'menuContainer.active' : 'menuContainer.deactive'}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                <li>
                    <a href={s.welcome}>
                    HOME
                    </a>
                </li>
                <li>
                    <a href={s.game}>
                    GAME
                    </a>
                </li>
                <li>
                    <a href={s.about}>
                    ABOUT
                    </a>
                </li>
                <li>
                    <a href={s.contact}>
                    CONTACT
                    </a>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
