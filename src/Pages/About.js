import React from 'react'
import ourstory from "../Images/ourstory.png"

function About() {
  return (
    <div className='aboutPage'>
        <img src={ourstory}></img>
        <div className="aboutText">
          <div className="aboutp">
            Client service and satisfaction has always been our #1 priority. 
            We will never take our customers for granted and appreciate every single opportunity to serve their needs.         
            We work tirelessly to ensure we earn our customer’s current and future business. 
            Our clients success is our success.
          </div>
          <div className="aboutp">
            The clear crystal symbolizes the clarity that can be gained by removing the emotion tied into trama and exposing irrational thought patterns.
            In working together we can reach toward that common goal and move towards what some know as a state of clear.
          </div>
          <div className="aboutp">
            Invest in yourself and you will achieve your goals.
            We endevour to empower anyone who has the desire to invest in themselves and reach toward their potential.     
          </div>

        </div>
        <div className='text1'>
          Are you ready to get started?        
        </div>
        <div className='text2'>
          Call us at # (407) 216 - 7445  or reach us by email at info@ClearOrlando.com
        </div>
    </div>
  )
}

export default About