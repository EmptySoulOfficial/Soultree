import React from 'react'

import './Logo.css'
import LogoSVG from '../../../assets/svg/Logo/emptysoul_logo_font_05032020.svg'

function Logo() {
  return (
    <div className="Logo">
       <img src={LogoSVG} alt="Logo"/>
    </div>
  )
}

export default Logo
