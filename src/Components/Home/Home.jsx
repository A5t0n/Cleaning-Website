import './Home.css'
import Banner from '../../assets/banner.png'

function Home() {
    return (
        <div id='home' className="body-image">
                <img src={Banner} alt="Cleaning Team" />
        </div>
    );
}

export default Home;