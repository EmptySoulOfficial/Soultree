import './Block.css';
import React from "react";

function Block({blockTitle, blockText}){
    return(
        <div className="Block">
            <h2>{blockTitle}</h2>
            <div className="Block-Text-Container">
                {blockText}
            </div>
            
        </div>
    )
}

export default Block