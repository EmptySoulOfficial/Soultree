import './Menu.css';
import React from "react";
import classNames from 'classnames';

function Menu({setMenuOpen, menuOpen}){
    return(
        <div className={classNames("menu flex", {'menu--active' : menuOpen, '' : !menuOpen })} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="menu-line menu-line-1"></span>
            <span className="menu-line menu-line-2"></span>
            <span className="menu-line menu-line-3"></span>
        </div>
    )
}

export default Menu