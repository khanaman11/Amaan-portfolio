import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
               <h1 className='logo'>Am<span>@@</span>n</h1>
                <p>I am a frontend developer from Delhi, India with 2 year of exprience in company like capital technology ,  PTT , Testpan india. </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">@ 2023 Am@@n khan. All right</div>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Contact with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer