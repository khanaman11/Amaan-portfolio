import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/my_image.jpg"

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h3>About me</h3>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a Frontend Developer with 2 years of experience, having worked with multiple companies in Delhi. I build responsive, user-friendly websites using HTML, CSS, JavaScript, and React.js.</p>
                        <p>2+ years experience as a Frontend Developer, creating responsive websites with React, HTML, CSS, and JavaScript. Focused on clean code and smooth user experiences.</p>
                    </div>
                    <div className="about-skills-section">
                        <div className='about-skill'>
                            <p>HTML & CSS </p> <hr style={{ width: "75%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>BOOTSTRAP & TAILWIND </p> <hr style={{ width: "60%" }} />
                        </div>
                         <div className='about-skill'>
                            <p>JAVASCRIPT </p> <hr style={{ width: "70%" }} />
                        </div>
                        <div className='about-skill'>
                            <p> REACT JS </p><hr style={{ width: "55%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>NEXT JS </p> <hr style={{ width: "40%" }} />
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h3>2+</h3>
                    <p>YEAR OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h3>10+</h3>
                    <p>PROJECT COMPLETED</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h3>5+</h3>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About