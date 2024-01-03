import './Block.css';
import React from "react";

function Block({blockTitle, blockText}){
    return(
        <div className="block">
            <h2>{blockTitle}</h2>
            <div className="block-text-container">
                {blockText}
            </div>
            
        </div>
    )
}

function IntroBlock({blockImage, blockTitle, blockText}){
    return(
        <div className="block intro-block">
            <h2>{blockTitle}</h2>
            <div className="block-text-container">
                {blockText}
            </div>
            
        </div>
    )
}

export {Block, IntroBlock}