import './Layout.css'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className='AppLayout'>
            <Navbar/>
            <div className='page'>
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;