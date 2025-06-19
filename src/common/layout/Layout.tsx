import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Banner from "../Banner";

const Layout = () => {
  // Get current location to determine the active page
  const location = useLocation();
  const currentPage = location.pathname.substring(1) || "home";

  const bgClass = (currentPage === "cli" || currentPage === "packages") ? "bg-dark" : "bg-transparent";

  return (
    <div className={`flex flex-col min-h-screen ${bgClass}`}>
      <div className="sticky top-0 z-50">
        {
          currentPage.startsWith('classic') || currentPage.startsWith('packages/')
            ? <></>
            : <Banner text="Features described on this site represent our direction and vision, with implementations rolling out progressively" />
        }

        {!currentPage.startsWith('packages/') && <Header currentPage={currentPage} />}
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      {!currentPage.startsWith('packages/') && <Footer currentPage={currentPage} />}
    </div>
  );
};

export default Layout;
