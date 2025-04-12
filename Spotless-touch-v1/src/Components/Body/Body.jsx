import React from 'react'
import './Body.css'
import Banner from '../../assets/banner.png'

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
              <div className="service-card">Residential Cleaning</div>
              <div className="service-card">Commercial Cleaning</div>
              <div className="service-card">Apartment Cleaning</div>
              <div className="service-card">Office Cleaning</div>
              <div className="service-card">Event Cleaning</div>
              <div className="service-card">Floor Cleaning</div>
              <div className="service-card">Kitchen Cleaning</div>
              <div className="service-card">Bathroom Cleaning</div>
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