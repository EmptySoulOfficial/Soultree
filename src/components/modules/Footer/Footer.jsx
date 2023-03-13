import './Footer.css'
import pck from '../../../../package.json'
import { getLang } from '../../../assets/js/ELanguage/ELanguage'
import { useState } from 'react'
import classNames from 'classnames'

function Footer() {

    const eLang = getLang()
    let [dversioncount, setdversioncount] = useState(0)
    let dversion = false

    if (dversioncount === 3) {
        dversion = true
    } else if (dversioncount > 3){
        dversion = false
        setdversioncount(dversioncount = 0)
    }else {
        dversion = false
    }

    return(
    <div className="Footer">
        <div className="Footer-Link-Container">
            <a href="mailto:contact@emptysoul.de" className="Contact-Link">{eLang.contactme}</a>
        </div>
        <p className="Footer-Text-Watermark" onClick={() => setdversioncount(dversioncount + 1)} >Created By Empty Soul ®</p>
        <p className={classNames('Footer-Text-Watermark Version', {'Version-Display': dversion, '': !dversion})}>{pck.version}</p>
    </div>
    )
}

export default Footer