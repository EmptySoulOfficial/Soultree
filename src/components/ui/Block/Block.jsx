import './Block.css';
import React from "react";

function Block({blockTitle, blockText}){
    return(
        <section className="block">
            <h2>{blockTitle}</h2>
            <p className="block-text-container">
                {blockText}
            </p>
            
        </section>
    )
}

function IntroBlock({blockImage, blockTitle, blockText, introBlockImage, introBlockImageAlt}){
    
    introBlockImage = "instagramprofile" ? "API-URL Here": introBlockImage
    
    return(
        <div className="block intro-block">
            <img src={introBlockImage} alt={introBlockImageAlt} className="profile-picture"/>
            <div className="intro-block-container">
                <h2>{blockTitle}</h2>
                <div className="block-text-container">
                    {blockText}
                </div>
            </div>
        </div>
    )
}

export {Block, IntroBlock}