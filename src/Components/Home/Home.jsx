import './Home.css'
import Banner from '../../assets/banner.png'

function Home() {
  return (
    <>
      <div id='home' className="body-image">
        <img src={Banner} alt="Cleaning Team" />
      </div>

      <div className="hero-wrapper">
        <div className='home-content-container'>
          <section className="mobile-hero-extension">
            <div className="cta-content">
              <h2>Experience a Spotless Difference</h2>
              <p>We go beyond cleaning — we bring life back to your space.</p>
              <a href="/services" className="cta-link">View Our Services</a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
