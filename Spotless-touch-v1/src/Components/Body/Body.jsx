import React from 'react'
import './Body.css'
import Banner from '../../assets/banner.png'
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';



function Body() {
  return (
    <>
    <div className="body-image">
        <img src={Banner} alt="Cleaning Team" />
      </div>
    <div className='body'>
      <div className="body-text">
       {/*About Section*/}
       <h2>About Us</h2>
       <div className="About-page-container">
          <section id="about" className="about-section">
            <div className="about-content">
              
              <p>
                At Spotless Touch Inc, we are committed to delivering top-quality cleaning services tailored to fit your needs. Whether you're looking for a one-time deep clean or ongoing cleaning contracts, we’ve got you covered with flexible, reliable, and professional service.
              </p>
              <p>
                Our business thrives on three core revenue streams: one-time cleaning services, recurring contracts, and specialized cleaning tailored to unique environments. Backed by key strategies like flexible service packages, an on-demand staffing model, and a focus on customer retention, we aim to provide a seamless and satisfying experience every time.
              </p>
              <p>
                From residential and commercial cleaning to event, office, and even kitchen and bathroom-specific services, our offerings are designed to suit every lifestyle and environment. Looking ahead, we plan to expand into more specialized cleaning areas to better serve our community.
              </p>
            </div>
          </section>
        </div>


       {/*Services Section*/}
        <h2>Our Services</h2>

        <section id="services" className="services-section">
            <div className="services-grid">

              <div className="service-card">
                <MapsHomeWorkOutlinedIcon/>
                <p>Residential Cleaning</p>
              </div>

              <div className="service-card">
                <BusinessCenterOutlinedIcon/>
                <p>Commercial Cleaning</p>
              </div>

              <div className="service-card">
                <ApartmentOutlinedIcon/>
                <p>Apartment Cleaning</p>
              </div>
              
              <div className="service-card">
                <WorkOutlineOutlinedIcon/>
                <p>Office Cleaning</p>
              </div>

              <div className="service-card">
                <EventOutlinedIcon/>
                <p>Event Cleaning</p>
              </div>

              <div className="service-card">
                <CleaningServicesOutlinedIcon/>
                <p>Floor Cleaning</p>
              </div>

              <div className="service-card">
                <KitchenOutlinedIcon/>
                <p>Kitchen Cleaning</p>
              </div>

              <div className="service-card">
                <BathtubOutlinedIcon/>
                <p>Bathroom Cleaning</p>
              </div>

            </div>
        </section>
       {/*Contact Section*/}
        <h2>Contact Us</h2>
      </div>
    </div>
    </>
  )
}

export default Body