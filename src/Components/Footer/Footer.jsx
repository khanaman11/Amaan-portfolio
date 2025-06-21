import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1 className='logo'>Am<span>@@</span>n</h1>
                    <p>I am a frontend developer from Delhi, India with 2 year of exprience in company like capital technology ,  PTT , Testpan india. </p>
                </div>
                <div className="footer-top-right">
                    <form action="https://api.web3forms.com/submit" method="POST" className="subscribe-form     footer-email-input">
                        <input
                            type="hidden"
                            name="access_key"
                            value="e5e93a33-a3fb-461e-90ab-ca071867bf8a"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                        <button type="submit" className='footer-subscribe'>Subscribe</button>
                    </form>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">@ 2023 Am@@n khan. All right</div>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact with me</AnchorLink>
                </div>
            </div>
        </div>
    )
}

export default Footer