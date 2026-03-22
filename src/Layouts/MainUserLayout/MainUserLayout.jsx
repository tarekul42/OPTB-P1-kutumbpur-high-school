import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import ScrollToTop from "../../Components/ScrollToTop";
import Footer from "../../Components/Shared/Footer/Footer";

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
