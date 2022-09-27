import React from 'react'
import contactGif from '../Images/contact_gif.gif'
function Contact() {
  return (
    <div className='contactPage'>
      <div>
        <img className='contactGif' src={contactGif}></img>      
      </div>
      <div className='contactInfo'>
        <div>Phone: (407) 216 - 7445</div>
        <div>Email: info@ClearOrlando.com</div>
      </div>      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.8527448060682!2d-81.40262342337297!3d28.467167274367807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77d6fb4484baf%3A0x42fd437445d6925b!2sClear%20Orlando%20Dianetic%20Counseling!5e0!3m2!1sen!2sus!4v1664281639341!5m2!1sen!2sus" width="600" height="450" loading="lazy"></iframe>
    </div>
  )
}

export default Contact