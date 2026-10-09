import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntermediateTuitions from './components/IntermediateTuitions';
import DegreeTuitions from './components/DegreeTuitions';
import MastersTuitions from './components/MastersTuitions';
import CorporateTrainings from './components/CorporateTrainings';
import TechCertifications from './components/TechCertifications';
import SpecializedDomains from './components/SpecializedDomains';
import BasicCourses from './components/BasicCourses';
import CourseFilterBar from './components/CourseFilterBar';
import AssessmentSection from './components/AssessmentSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import SecurityPolicyPage from './pages/SecurityPolicyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showScrollControls, setShowScrollControls] = useState(false);

  // Disable browser auto-scroll restoration on refresh/navigation & scroll to top immediately
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }

    const forceScrollTop = () => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    forceScrollTop();
    const t1 = setTimeout(forceScrollTop, 50);
    const t2 = setTimeout(forceScrollTop, 150);
    const t3 = setTimeout(forceScrollTop, 350);
    const t4 = setTimeout(forceScrollTop, 600);

    const handleScroll = () => {
      setShowScrollControls(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Force scroll to top when page changes
  useEffect(() => {
    const forceScrollTop = () => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    forceScrollTop();
    const t1 = setTimeout(forceScrollTop, 50);
    const t2 = setTimeout(forceScrollTop, 200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [currentPage]);

  const scrollToTop = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const scrollToBottom = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    window.scrollTo({
      top: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleOpenEnquiry = (courseData = null) => {
    setSelectedCourse(courseData && courseData.title ? courseData : null);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  const handleOpenLegalPage = (pageKey) => {
    setCurrentPage(pageKey);
  };

  const handleReturnHome = () => {
    setCurrentPage('home');
  };

  const handleLogoClick = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    scrollToTop();
  };

  const handleNavSectionClick = (sectionId) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          scrollToTop();
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      
      {/* 1. Header Navigation */}
      <Navbar
        onEnquire={handleOpenEnquiry}
        onLogoClick={handleLogoClick}
        onNavSectionClick={handleNavSectionClick}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <>
            {/* 2. Hero Header & Node Flow Diagram */}
            <HeroSection onEnquire={handleOpenEnquiry} />

            {/* 3. Intermediate Tuitions (M.P.C, BiPC, MEC, CEC, AEC) */}
            <IntermediateTuitions onEnquire={handleOpenEnquiry} />

            {/* 4. Graduation Tuitions (B.Com & BBA) */}
            <DegreeTuitions onEnquire={handleOpenEnquiry} />

            {/* 5. Masters Tuitions (M.Com & MBA) */}
            <MastersTuitions onEnquire={handleOpenEnquiry} />

            {/* 6. Corporate Trainings (Non-IT) */}
            <CorporateTrainings onEnquire={handleOpenEnquiry} />

            {/* 7. IT & Technology Certifications */}
            <TechCertifications onEnquire={handleOpenEnquiry} />

            {/* 8. Specialized Domains (Non-IT Operations) */}
            <SpecializedDomains onEnquire={handleOpenEnquiry} />

            {/* 9. Basic Courses & Essential Industry Tools */}
            <BasicCourses onEnquire={handleOpenEnquiry} />

            {/* 10. Course Category Pills Filter Bar */}
            <CourseFilterBar />

            {/* 11. Schedule 1-on-1 Academic Audit / Assessment */}
            <AssessmentSection />
          </>
        )}

        {/* Dedicated Standalone Legal Pages */}
        {currentPage === 'privacy' && (
          <PrivacyPolicyPage onBack={handleReturnHome} />
        )}

        {currentPage === 'terms' && (
          <TermsConditionsPage onBack={handleReturnHome} />
        )}

        {currentPage === 'security' && (
          <SecurityPolicyPage onBack={handleReturnHome} />
        )}
      </main>

      {/* Footer with Legal Handlers */}
      <Footer onOpenLegal={handleOpenLegalPage} />

      {/* Quick Enquiry Modal Popup */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={handleCloseEnquiry}
        selectedCourse={selectedCourse}
      />

      {/* Dual Floating Scroll Controller (Top & Bottom Navigation) */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          title="Smooth Scroll to Top"
          aria-label="Smooth Scroll to Top"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            backgroundColor: '#0f172a',
            color: '#ffffff',
            border: '1px solid #334155',
            boxShadow: '0 8px 20px rgba(15, 23, 42, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0f172a';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <ArrowUp size={20} />
        </button>

        {/* Scroll To Bottom Button */}
        <button
          onClick={scrollToBottom}
          title="Smooth Scroll to Bottom (Footer)"
          aria-label="Smooth Scroll to Bottom"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            backgroundColor: '#0f172a',
            color: '#ffffff',
            border: '1px solid #334155',
            boxShadow: '0 8px 20px rgba(15, 23, 42, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
            e.currentTarget.style.transform = 'translateY(2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0f172a';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <ArrowDown size={20} />
        </button>
      </div>

    </div>
  );
}