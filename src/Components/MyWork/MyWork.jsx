import React, { useState } from 'react'
import "./MyWork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from '../../assets/mywork_data'
import arrow_icon from "../../assets/arrow_icon.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MyWork = () => {
    const [showAll, setShowAll] = useState(false); // state for show more/less

    // kitne show karne hain
    const visibleProjects = showAll ? mywork_data : mywork_data.slice(0, 6);
    return (
        <div className='mywork' id='work'>
            <div className="mywork-title">
                <h3>My latest Work</h3>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {
                    visibleProjects.map((work, index) => {
                        return <div key={index} className='work-img-container'>
                            <img src={work.w_img} alt='work-img' />
                            <div className="work-btn-cnt">
                                <a href={work.p_link} className='live-btn' target="_blank" rel="noopener noreferrer">
                                    Live Work
                                </a>
                                <a href={work.G_link} className='github' target="_blank" rel="noopener noreferrer">
                                    GitHub Code
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="mywork-showmore" onClick={() => setShowAll(!showAll)}>
                <p>{showAll ? "Show Less" : "Show More"}</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork