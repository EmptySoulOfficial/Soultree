import './HomeSoultree.css'
import React from "react";
import {Block, IntroBlock} from '../../ui/Block/Block';

function HomeSoultree(){
    return(
        <div className="home-soultree">
            <IntroBlock blockImage={''} blockTitle={'Hi,'} blockText={'Ein beispiel Test Text in einem Block'}/>
            <Block blockTitle={'Hi,'} blockText={'Ein beispiel Test Text in einem Block'}/>
        </div>
    )
}

export default HomeSoultree