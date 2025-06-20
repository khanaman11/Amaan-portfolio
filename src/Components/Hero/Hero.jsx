import React from 'react'
import profile from "../../assets/my_image.jpg"
import "./Hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from "../../assets/Amanullah updated CV.pdf"

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile} alt="" />
      <h2><span className='hero-header'>I'm Amanullah Khan,</span> Frontend developer based in Delhi.</h2>
      <p>I am a frontend developer from Delhi India. with 2 year of experience with multipal  company like. capital technology ,  PTT , Testpan india.</p>
      <div className='hero-action-btn'>
        <button className='hero-connect'> <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact me</AnchorLink></button>
        <a href={resume} download className="hero-resume">
          My Resume
        </a>
      </div>
    </div>
  )
}

export default Hero