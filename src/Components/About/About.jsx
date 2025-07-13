import './About.css';
import { useEffect } from 'react';
import ReviewList from '../ReviewList/ReviewList';

function About () {

    useEffect(() => {
        document.title = "About";
      }, []);

    return (
        <>
            <div className="About-page-container">

                <h2 className='about-heading'>About Us</h2>
                
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

            <div className="review-section">
                <ReviewList />
            </div>
        </>
    );
}

export default About;