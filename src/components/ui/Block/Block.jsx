import './Block.css';
import React from "react";
import Icon from '../Icon/Icon';

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

function IntroBlock({blockTitle, blockText, introBlockImage, introBlockImageAlt}){
        
    return(
        <div className="block intro-block">
            <Icon name="fractal_2" iconClass="pp-fractal-2"/>
            <div className="profile-picture-container flex">
                <img src={introBlockImage} alt={introBlockImageAlt} className="profile-picture"/>
            </div>
            <Icon name="fractal_1" iconClass="pp-fractal-3"/>
            <Icon name="fractal_2" iconClass="pp-fractal-4"/>
            <div className="intro-block-fractal-cubic"></div>
            <Icon name="fractal_1" iconClass="pp-fractal-1"/>
            <div className="intro-block-container dFlex">
                <section className="intro-block-section">
                    <h2>{blockTitle}</h2>
                    <p className="block-text-container">
                        {blockText}
                    </p>
                </section>
            </div>
        </div>
    )
}

export {Block, IntroBlock}