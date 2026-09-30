import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

import HomePage from './pages/HomePage';
import AcademyPage from './pages/AcademyPage';
import CorporateTrainingPage from './pages/CorporateTrainingPage';
import CareerCounsellingPage from './pages/CareerCounsellingPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const handleOpenEnquiry = () => {
    setEnquiryModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
        
        {/* Responsive Sticky Header */}
        <Navbar onEnquire={handleOpenEnquiry} />

        {/* Dynamic Route Content */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onEnquire={handleOpenEnquiry} />} />
            <Route path="/academy" element={<AcademyPage onEnquire={handleOpenEnquiry} />} />
            <Route path="/corporate-training" element={<CorporateTrainingPage onEnquire={handleOpenEnquiry} />} />
            <Route path="/career-counselling" element={<CareerCounsellingPage onEnquire={handleOpenEnquiry} />} />
            <Route path="/services" element={<ServicesPage onEnquire={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage onEnquire={handleOpenEnquiry} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Reusable Quick Enquiry Modal Popup */}
        <EnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
        />

        {/* Multi-column Footer */}
        <Footer />
      </div>
    </Router>
  );
}