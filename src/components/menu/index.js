import s from './style.module.css';
import cn from 'classnames';

import Route from '../route';
import {APP_ROUTES} from '../../const';

const Menu = ({isMenuOpen, onRouteClick}) => {
    return (
        <div className={cn(s.menuContainer, {
            [s.active]: isMenuOpen === true,
            [s.deactive]: isMenuOpen === false
        })}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    {APP_ROUTES.map(({title, routeName}, i) => 
                        <Route 
                            key={i} 
                            title={title} 
                            routeName={routeName} 
                            onRouteClick={onRouteClick}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
