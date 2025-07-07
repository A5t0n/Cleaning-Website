import './Contact.css';
import { useEffect, useState,useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
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
            <h2 className='contact-heading'>Contact Us</h2>     
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

                        <p> Have questions or need a custom quote? Use the form below to reach out, and our team will get back to you as soon as possible. We look forward to helping you achieve a spotless space!</p>

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
        </>
    );
}

export default Contact;