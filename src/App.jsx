import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntermediateTuitions from './components/IntermediateTuitions';
import DegreeTuitions from './components/DegreeTuitions';
import CorporateTrainings from './components/CorporateTrainings';
import TechCertifications from './components/TechCertifications';
import SpecializedDomains from './components/SpecializedDomains';
import BasicCourses from './components/BasicCourses';
import CourseFilterBar from './components/CourseFilterBar';
import AssessmentSection from './components/AssessmentSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const handleOpenEnquiry = () => {
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      
      {/* 1. Header Navigation */}
      <Navbar onEnquire={handleOpenEnquiry} />

      {/* Main Content Sections matching design screenshot */}
      <main style={{ flex: 1 }}>
        {/* 2. Hero Header & Node Flow Diagram */}
        <HeroSection onEnquire={handleOpenEnquiry} />

        {/* 3. Intermediate Tuitions (TS & AP Board) */}
        <IntermediateTuitions onEnquire={handleOpenEnquiry} />

        {/* 4. Tuitions for B.Com (Gen, Comp & Honors) */}
        <DegreeTuitions onEnquire={handleOpenEnquiry} />

        {/* 5. Corporate Trainings (Non-IT) */}
        <CorporateTrainings onEnquire={handleOpenEnquiry} />

        {/* 6. IT & Technology Certifications */}
        <TechCertifications onEnquire={handleOpenEnquiry} />

        {/* 7. Specialized Domains (Non-IT Operations) */}
        <SpecializedDomains onEnquire={handleOpenEnquiry} />

        {/* 8. Basic Courses & Essential Industry Tools */}
        <BasicCourses onEnquire={handleOpenEnquiry} />

        {/* 9. Course Category Pills Filter Bar */}
        <CourseFilterBar />

        {/* 10. Schedule 1-on-1 Academic Audit / Assessment */}
        <AssessmentSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Quick Enquiry Modal Popup */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={handleCloseEnquiry}
      />

    </div>
  );
}