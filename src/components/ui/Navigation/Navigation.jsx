import './Navigation.css'
import React from 'react'
import classNames from 'classnames'

function Navigation({menuOpen}) {

    return(
        <nav className={classNames("navigation",{'navigation--active': menuOpen, '': !menuOpen})}>
            Some Text
        </nav>
    )
}

export default Navigation