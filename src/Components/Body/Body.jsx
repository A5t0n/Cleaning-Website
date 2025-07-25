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
import { useEffect, useState,useRef } from 'react';
import emailjs from '@emailjs/browser';




function Body() {

  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4446zar', 'template_xoopeoi',refForm.current,'y-y4WyCZqXKIHsl-2')
      .then(() => {
          alert('Message sent successfully');
          window.location.reload(false);
      }, 
      (error) => {
          alert('Message failed to send, try again !!');
          console.log('Error details:', error);
      });
  }
  return (
    <>
    <div id='home' className="body-image">
        <img loading="lazy" src={Banner} alt="Cleaning Team" />
      </div>
    <div className='body' id='about'>
      <div className="body-text" >
       {/*About Section*/}
       


       {/*Services Section*/}
        <h2>Our Services</h2>

        <section className="services-section">
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
                <p id='contact'>Bathroom Cleaning</p>
              </div>

            </div>
        </section>
       {/*Contact Section*/}
        <h2 >Contact Us</h2>
        <div className="contact-page-container">
          <div className="contact-page">
        <div className="text-zone">
        <p>
          Have a cleaning project in mind? Spotless Touch Inc is ready to make your home or office sparkle. Whether you need a one‑time deep clean, ongoing maintenance, or a specialized service, our professional team delivers outstanding results every time.
        </p>

        <div className="google-calendar-link">
              <p>Prefer to schedule directly? Click below to book an appointment</p>
              <a                
                href="https://calendar.app.google/fUu7EV3QhDT1RJoSA"
                target="_blank"
                rel="noopener noreferrer"
                className="calendar-button"
              >
              Book an Appointment
              </a>
            </div>



        <p>
        Have questions or need a custom quote? Use the form below to reach out, and our team will get back to you as soon as possible. We look forward to helping you achieve a spotless space!
        </p>
            <div className="contact-form"> 
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required/>
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" required/>
                        </li>
                        <li>
                            <input type="text" name="subject" placeholder="Subject" required/>
                        </li>
                        <li>
                            <textarea name="message" placeholder="Message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="Send"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Body