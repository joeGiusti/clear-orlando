import React from 'react'
import InfoSectionPage from '../Components/InfoSectionPage'
import InfoSectionClear from '../Components/InfoSectionClear'

function Home(props) {
  return (
    <div className='homePage'>
        <div className='backgroundImage'></div>        
        <InfoSectionPage
            title = "Get inspired"
            text = "Get inspired to live life to the fullest and become the person you know you should be. We are here to help today."
            videoEmbedUrl = "https://www.youtube.com/embed/InDTLp63G7c"
        ></InfoSectionPage>
        <InfoSectionClear
            title = "Advanced Technology Applied to Your Life"
                text = "Work with certified professionals who will apply their knowledge and experience towards your life goals."
            videoEmbedUrl = "https://www.youtube.com/embed/Dt9SyNpirdo"
        ></InfoSectionClear>
        <InfoSectionPage
            title = "Let us share a smile"
            text = "Its always good to remember to spread the smiles and stay well. Even a small act of kindness can make a huge impact in someones life and ripple out into the world."
            videoEmbedUrl = "https://www.youtube.com/embed/dXXWNgRfV-0"
        >
        </InfoSectionPage>        
        <div className="infosection infosection2">
            
            <div className='infosectioninner'> 
                <div className="infotitle">Get Started</div>
                <div className="infotext">
                    A journey of 1000 miles begins with a single step and its time to get moving.
                    Reach out today to learn how you can become the version of yourslef you know you should be.
                    Free consultations and deomonstration sessions are available.                     
                    The phone line is open for voice messages and text 24 hours a day 7 days a week.
                </div>    
                <button className="infosection2button" onClick={()=>props.setPage("contact")}>Contact Us Today</button>        
            </div>
        </div>
    </div>
  )
}

export default Home