import './Header.css';
import React from "react";
import Menu from '../Menu/Menu';
import Icon from '../Icon/Icon';

function Header({setMenuOpen, menuOpen}){
    return(
        <header className="header flex">
            <Icon name="emptysoul_logo_font_05032020"/>
            <Icon name="empty_soul_logo2020"/>
            <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
        </header>
    )
}

export default Header