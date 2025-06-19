import React from 'react'
import "./Services.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import Services_data from "../../assets/services_data"
import arrow_icon from "../../assets/arrow_icon.svg"

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="services-title">
        <h3 className='services_heading'>My Services</h3>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {
          Services_data.map((services, index) => (
            <div key={index} className='services-format'>
              <h3>{services.s_no}</h3>
              <h3 className='service_name'>{services.s_name}</h3>
              <p>{services.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services
