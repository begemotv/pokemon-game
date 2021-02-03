import {useState} from 'react';

import Menu from '../menu';
import NavBar from '../navBar';

const MenuHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <Menu isMenuOpen={isMenuOpen}/>
            <NavBar isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} />
        </>
    );
};

export default MenuHeader;