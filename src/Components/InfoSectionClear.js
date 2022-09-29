import React from 'react'

function InfoSectionClear(props) {
  return (
    <div className="infosection infosection2">
        <div className='infosectioninner'>
            <div className="infovideo">
                <div className="videoContainer">
                    <iframe src={props.videoEmbedUrl} frameborder="0" ></iframe>
                </div>      
            </div>
            <div className="infotextsection">
                <div className="infotitle">
                    {props.title}  
                </div>
                <p className="infotext">                        
                    {props.text}
                </p>
            </div>
        </div>
    </div>
  )
}

export default InfoSectionClear