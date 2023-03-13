import React from 'react'
import './Logo.css'
import LogoSVG from '../../../assets/images/Logo/EmptySoul_Logo.svg'

function Logo({size}) {
  return (
    <div className="Logo" style={{width:size}}>
        <img src={LogoSVG} alt="Empty Soul Logo"/>
    </div>
  )
}

export default Logo