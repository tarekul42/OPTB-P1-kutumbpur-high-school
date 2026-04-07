import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar/Navbar";
import ScrollToTop from "../utilities/ScrollToTop";
import Footer from "../organisms/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
