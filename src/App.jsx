import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Pages/Shared/Navbar/Navbar";
import About from "./Pages/Home/AboutUs/AboutUs";
import Contact from "./Pages/Home/Contact/Contact";
import Updates from "./Pages/Home/Updates/Updates";
import FAQ from "./Pages/Home/FAQ/FAQ";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
