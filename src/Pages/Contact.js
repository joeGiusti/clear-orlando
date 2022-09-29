import React from 'react'
import contactGif from '../Images/contact_gif.gif'
function Contact() {
  return (
    <div className='contactPage'>
      <div>
        <img className='contactGif' src={contactGif}></img>      
      </div>
      <div className='contactInfo'>
        <div>
          Phone: 
        </div>
        <a href='tel:407-216-7445'>(407) 216 - 7445</a>
        <div>
                    
        </div>
        <div>
          Email: 
        </div>
        <a href='mailto:info@ClearOrlando.com'>info@ClearOrlando.com</a>
      </div>      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4108622548038!2d-81.40368692063933!3d28.467170798382778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77d6fb4484baf%3A0x42fd437445d6925b!2sClear%20Orlando%20Dianetic%20Counseling!5e0!3m2!1sen!2sus!4v1664308418516!5m2!1sen!2sus" width="600" height="450" loading="lazy"></iframe>
    </div>
  )
}

export default Contact