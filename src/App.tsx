import { useState, useEffect } from 'react';
import { StickyHeader } from './components/StickyHeader';
import { FullScreenMenu } from './components/FullScreenMenu';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ApplyNowPage } from './pages/ApplyNowPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { TuitionFeesPage } from './pages/TuitionFeesPage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { AcademicsOverviewPage } from './pages/AcademicsOverviewPage';
import { AcademicsKindergartenPage } from './pages/AcademicsKindergartenPage';
import { AcademicsPrimaryPage } from './pages/AcademicsPrimaryPage';
// import { AcademicsSecondaryPage } from './pages/AcademicsSecondaryPage';
import { AcademicsLowerSecondaryPage } from './pages/AcademicsLowerSecondaryPage';
import { AcademicsHighSchoolPage } from './pages/AcademicsHighSchoolPage';
import { HowWeTeachPage } from './pages/HowWeTeachPage';
import { OpenDayPage } from './pages/OpenDayPage';
import { ParentsPage } from './pages/ParentsPage';
import { ParentEssentialsPage } from './pages/ParentEssentialsPage';
import { GenericPage } from './pages/GenericPage';
import { AcademicResultsPage } from './pages/AcademicResultsPage';
import { OurSchoolPage } from './pages/OurSchoolPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { LHBSCampusPage } from './pages/LHBSCampusPage';
import { NewsEventsPage } from './pages/NewsEventsPage';
import { OutstandingExperiencesPage } from './pages/OutstandingExperiencesPage';
import { ExtracurricularActivitiesPage } from './pages/ExtracurricularActivitiesPage';
import { EntryRequirementsPage } from './pages/EntryRequirementsPage';
import { UniversityCareerCounsellingPage } from './pages/UniversityCareerCounsellingPage';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { siteNavigation } from './types/navigation';
import { FloatingActionButtons } from './components/FloatingActionButtons';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
  interface Navigate{
    onNavigate: (path: string) => void;
  }
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    setMenuOpen(false);
  };

  const getBreadcrumbs = () => {
    if (currentPath === '/') return [];

    const breadcrumbs = [{ label: 'Home', onClick: () => handleNavigate('/') }];

    for (const parent of siteNavigation) {
      if (parent.path === currentPath) {
        breadcrumbs.push({ label: parent.label });
        return breadcrumbs;
      }
      for (const child of parent.children) {
        if (child.path === currentPath) {
          breadcrumbs.push({ label: parent.label, onClick: () => handleNavigate(parent.path) });
          breadcrumbs.push({ label: child.label });
          return breadcrumbs;
        }
      }
    }

    return breadcrumbs;
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Header - Fixed at top, height 72px */}
      <StickyHeader
        scrolled={scrolled}
        onMenuClick={() => setMenuOpen(true)}
        onMenuClose={() => setMenuOpen(false)}
        onLogoClick={() => handleNavigate('/')}
        onEnquireClick={() => handleNavigate('/admissions/apply-now')}
        menuOpen={menuOpen}
      />

      {/* Full Screen Menu */}
      <FullScreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
        currentPath={currentPath}
      />

      {/* Page Content - no extra padding needed, breadcrumbs are inside hero */}
      {currentPath === '/' ? (
        <HomePage onNavigate={handleNavigate} />
      ) : currentPath === '/admissions/apply-now' ? (
        <ApplyNowPage onNavigate={handleNavigate} />
      ) : currentPath === '/admissions' ? (
        <AdmissionsPage onNavigate={handleNavigate} />
      ) : currentPath === '/admissions/tuition-fees' ? (
        <TuitionFeesPage onNavigate={handleNavigate} />
      ) : currentPath === '/admissions/scholarships' ? (
        <ScholarshipsPage onNavigate={handleNavigate} />
      ) : currentPath === '/academics/overview' ? (
        <AcademicsOverviewPage onNavigate={handleNavigate} />
      ) : currentPath === '/academics/kindergarten' ? (
        <AcademicsKindergartenPage onNavigate={handleNavigate} />
      ) : currentPath === '/academics/primary' ? (
        <AcademicsPrimaryPage onNavigate={handleNavigate} />
      ) : currentPath === '/academics/lower-secondary' ? (
        <AcademicsLowerSecondaryPage onNavigate={handleNavigate} />
      ) : currentPath === '/academics/upper-secondary' ? (
        <AcademicsHighSchoolPage onNavigate={handleNavigate} />
      ) : currentPath === '/academics/how-we-teach' ? (
        <HowWeTeachPage onNavigate={handleNavigate} />
      ) : currentPath === '/academics/counselling' ? (
        <UniversityCareerCounsellingPage onNavigate={handleNavigate} />
      ) : currentPath === '/admissions/opendays' ? (
        <OpenDayPage onNavigate={handleNavigate} />
      ) : currentPath === '/parents' ? (
        <ParentsPage onNavigate={handleNavigate} />
      ) : currentPath === '/parents/essentials' ? (
        <ParentEssentialsPage onNavigate={handleNavigate} />
      ) : currentPath === '/academic-results' ? (
        <AcademicResultsPage onNavigate={handleNavigate} />
      ) : currentPath === '/our-school' ? (
        <LHBSCampusPage onNavigate={handleNavigate} />
      ) : currentPath === '/our-school/about-us' ? (
        <OurSchoolPage onNavigate={handleNavigate} />
      ) : currentPath === '/our-school/facilities' ? (
        <FacilitiesPage onNavigate={handleNavigate} />
      ) : currentPath === '/news-events' ? (
        <NewsEventsPage onNavigate={handleNavigate} />
      ) : currentPath === '/student-life/outstanding-experiences' ? (
        <OutstandingExperiencesPage onNavigate={handleNavigate} />
      ) : currentPath === '/student-life/clubs-activities' ? (
        <ExtracurricularActivitiesPage onNavigate={handleNavigate} />
      ) : currentPath === '/admissions/entry-requirements' ? (
        <EntryRequirementsPage onNavigate={handleNavigate} />
      ) : (
        <GenericPage 
          path={currentPath} 
          onNavigate={handleNavigate}
          breadcrumbs={getBreadcrumbs()}
        />
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Floating Action Buttons */}
      <FloatingActionButtons onNavigate={handleNavigate} />
    </div>
  );
}