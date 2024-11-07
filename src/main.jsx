import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import SuiteDunas from "./pages/suite_dunas.jsx";
import SuiteClassic from "./pages/suite_classic.jsx";
import SuiteEstarVip from "./pages/suite_estarvip.jsx";
import Contact from "./pages/contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router> 
      <div className="w-full flex min-h-screen sm:flex-row bg-white duration-300">
        <div className="w-full flex flex-col items-center justify-between">
          <div className="w-full flex flex-col items-center">
            <Navbar />
            <div className="w-full flex flex-col gap-base px-base sm:px-0 items-center">
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/suite-dunas" element={<SuiteDunas />}/>
                <Route path="/suite-classic" element={<SuiteClassic />}/>
                <Route path="/suite-estar-vip" element={<SuiteEstarVip />}/>
                <Route path="/como-chegar" element={<Contact />}/>
              </Routes>
            </div>
          </div>
          <Footer full={true} />
        </div>
      </div>
    </Router>
  </StrictMode>
);
