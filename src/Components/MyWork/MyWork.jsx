import React from 'react'
import "./MyWork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from '../../assets/mywork_data'
import arrow_icon from "../../assets/arrow_icon.svg"

const MyWork = () => {
  return (
    <div className='mywork' id='work'>
        <div className="mywork-title">
            <h3>My latest Work</h3>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {
                mywork_data.map((work , index)=>{
                    return <div  key={index} className='work-img-container'>
                        <img src={work.w_img} alt='work-img'/>
                    </div>
                })
            }
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork