import React, { useState } from 'react'

function InfoSectionPage(props) {
  
  return (
    <div className="infosection paper">
        <div className='infosectioninner'>
            <div className="infotextsection">
                <div className="infotitle">
                    {props.title}  
                </div>
                <p className="infotext">                        
                    {props.text}
                </p>
            </div>
            <div className="infovideo">
            <div className="videoContainer">
                <iframe src={props.videoEmbedUrl} frameborder="0" ></iframe>
            </div>      
            </div>
        </div>
    </div>
  )
}

export default InfoSectionPage