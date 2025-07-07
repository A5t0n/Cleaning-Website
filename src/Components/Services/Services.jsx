import './Services.css';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';

function Services() {
    return (
        <>
            <section className="services-section">
                <h2>Our Services</h2>
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
        </>
    );
}

export default Services;