import { useState, useEffect } from 'react';
import { StickyHeader } from './components/StickyHeader';
import { Footer } from './components/Footer';
import { FullScreenMenu } from './components/FullScreenMenu';
import { HomePage } from './pages/HomePage';
import { GenericPage } from './pages/GenericPage';
import { ApplyNowPage } from './pages/ApplyNowPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { TuitionFeesPage } from './pages/TuitionFeesPage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { AcademicsOverviewPage } from './pages/AcademicsOverviewPage';
import { AcademicsKindergartenPage } from './pages/AcademicsKindergartenPage';
import { AcademicsPrimaryPage } from './pages/AcademicsPrimaryPage';
import { AcademicsSecondaryPage } from './pages/AcademicsSecondaryPage';
import { AcademicsHighSchoolPage } from './pages/AcademicsHighSchoolPage';
import { siteNavigation } from './types/navigation';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        onLogoClick={() => handleNavigate('/')}
        onEnquireClick={() => handleNavigate('/admissions/apply-now')}
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
        <AcademicsSecondaryPage onNavigate={handleNavigate} />
      ) : currentPath === '/academics/upper-secondary' ? (
        <AcademicsHighSchoolPage onNavigate={handleNavigate} />
      ) : (
        <GenericPage 
          path={currentPath} 
          onNavigate={handleNavigate}
          breadcrumbs={getBreadcrumbs()}
        />
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}