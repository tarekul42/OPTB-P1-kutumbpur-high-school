import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import About from "./Pages/Home/AboutUs/AboutUs";
import Contact from "./Pages/Home/Contact/Contact";
import Updates from "./Pages/Home/Updates/Updates";
import FAQ from "./Pages/FAQ/FAQ";
import Home from "./Pages/Home/Home/Home";
import Academics from "./Pages/EduAdventure/Academics/Academics";
import Resources from "./Pages/CuriosityCorner/Resources/Resources";
import StudentPortal from "./Pages/Portals/Student/Student";
import ParentPortal from "./Pages/Portals/Parent/Parent";
import FacultyPortal from "./Pages/Portals/Faculty/Faculty";
import ScrollToTop from "./Components/ScrollToTop";

import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="pt-20 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/parent-portal" element={<ParentPortal />} />
            <Route path="/faculty-portal" element={<FacultyPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
