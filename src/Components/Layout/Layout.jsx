import './Layout.css'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Layout() {
    return (
        <div className='AppLayout'>
            <Navbar/>
            <div className='page'>
                <Outlet/>
                
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;