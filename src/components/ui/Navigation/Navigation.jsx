import './Navigation.css';
import React from "react";
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';

function Navigation(){
    return(
        <div className="Navigation flex">
            <Logo />
            <Menu />
        </div>
    )
}

export default Navigation