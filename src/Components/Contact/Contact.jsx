import React from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import email_icon from "../../assets/mail_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"

const Contact = () => {

  fetch("https://cors-anywhere.herokuapp.com/https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: "e5e93a33-a3fb-461e-90ab-ca071867bf8a",
      name: "John",
      email: "john@example.com",
      message: "Hello world!"
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));




  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h3>Get in touch</h3>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h3>Let's talk</h3>
          <p>I'm currently avalible to talk a new project, so feel free to send me a message about anything that you want me to work on. you can contact anytime</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email_icon} alt="" /><p>amanullahkhan11595@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>8510082192</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>Delhi , India</p>
            </div>
          </div>
        </div>
        <form action="https://api.web3forms.com/submit" method="POST" className='contact-right'>
          <input type="hidden" name="access_key" value="e5e93a33-a3fb-461e-90ab-ca071867bf8a" />

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="8" required></textarea>

          <button type="submit" className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact