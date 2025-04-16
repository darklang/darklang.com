/**
 * Layout Component
 * This component provides a consistent layout structure for all pages.
 * It includes the Header and Footer components and renders children in between.
 */

import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    // Get current location to determine the active page
    const location = useLocation();
    const currentPage = location.pathname.substring(1) || 'home';

    return (
        <div className="flex flex-col min-h-screen bg-transparent">
            <Header currentPage={currentPage} />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer currentPage={currentPage} />
        </div>
    );
};

export default Layout;