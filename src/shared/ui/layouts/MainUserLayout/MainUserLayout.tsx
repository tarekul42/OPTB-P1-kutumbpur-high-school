import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import ScrollToTop from "../../ScrollToTop";
import Footer from "../../Shared/Footer/Footer";

const MainUserLayout = () => {
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

export default MainUserLayout;
