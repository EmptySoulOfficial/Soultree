import './HomeSoultree.css'
import React from "react";
import {Block, IntroBlock} from '../../ui/Block/Block';

function HomeSoultree(){
    return(
        <div className="home-soultree">
            <IntroBlock blockTitle={'Hi,'} blockText={'I am an one-man band and content-creator from germany. About Me.'} 
                        introBlockImage={'./images/MeColdArt_100.jpg'}/>
            <Block blockTitle={'Hi,'} blockText={'Ein beispiel text eines Blockes'}/>
        </div>
    )
}

export default HomeSoultree