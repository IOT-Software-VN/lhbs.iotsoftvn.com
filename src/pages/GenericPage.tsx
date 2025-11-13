import { PageTemplate } from '../components/PageTemplate';
import { siteNavigation, NavParent, NavChild } from '../types/navigation';

interface GenericPageProps {
  path: string;
  onNavigate: (path: string) => void;
  breadcrumbs?: Array<{ label: string; onClick?: () => void }>;
}

export function GenericPage({ path, onNavigate, breadcrumbs = [] }: GenericPageProps) {
  // Find the current page in navigation
  let currentParent: NavParent | null = null;
  let currentChild: NavChild | null = null;
  let isParentPage = false;

  for (const parent of siteNavigation) {
    if (parent.path === path) {
      currentParent = parent;
      isParentPage = true;
      break;
    }
    for (const child of parent.children) {
      if (child.path === path) {
        currentParent = parent;
        currentChild = child;
        break;
      }
    }
    if (currentChild) break;
  }

  if (!currentParent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffae9]">
        <div className="text-center">
          <h1 className="font-['Crimson_Pro'] text-6xl text-[#1a5336] mb-4">404</h1>
          <p className="font-['Lexend_Deca'] text-xl text-[#666] mb-8">Page not found</p>
          <button
            onClick={() => onNavigate('/')}
            className="px-8 h-12 bg-[#1a5336] text-white font-['Arial'] font-bold hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const pageTitle = currentChild ? currentChild.label : currentParent.label;
  const pageDescription = currentChild ? (currentChild.description || currentParent.description) : currentParent.description;

  // Get related pages (siblings or children)
  const relatedPages = isParentPage
    ? currentParent.children.slice(0, 3).map(child => ({
        title: child.label,
        description: child.description || 'Explore this section to learn more',
        onClick: () => onNavigate(child.path)
      }))
    : currentParent.children
        .filter(c => c.id !== currentChild?.id)
        .slice(0, 3)
        .map(child => ({
          title: child.label,
          description: child.description || 'Explore this section to learn more',
          onClick: () => onNavigate(child.path)
        }));

  return (
    <PageTemplate
      title={pageTitle}
      subtitle={pageDescription}
      introText={`Welcome to ${pageTitle}. ${pageDescription} At LHBS, we are committed to providing an exceptional educational experience that combines Vietnamese cultural values with international excellence.`}
      ctaText="Get Started"
      onCtaClick={() => onNavigate('/admissions/apply-now')}
      breadcrumbs={breadcrumbs}
      relatedPages={relatedPages}
    >
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="font-['Crimson_Pro'] text-[32px] md:text-[40px] text-[#1a5336] mb-6">Our Approach</h2>
          <p className="font-['Lexend_Deca'] text-[#212121] mb-4" style={{ lineHeight: '1.5' }}>
            At LHBS, we believe in nurturing the whole child through a balanced approach that emphasizes academic excellence, character development, and global citizenship.
          </p>
          <p className="font-['Lexend_Deca'] text-[#212121]" style={{ lineHeight: '1.5' }}>
            Our experienced educators create engaging, student-centered learning environments where every child can thrive and reach their full potential.
          </p>
        </div>
        <div className="bg-[#1a5336]/10 p-8">
          <h3 className="font-['Crimson_Pro'] text-[24px] md:text-[28px] text-[#1a5336] mb-4">Key Highlights</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#FABA1E] text-xl">✓</span>
              <span className="font-['Lexend_Deca'] text-[#212121]">Bilingual education in Vietnamese and English</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FABA1E] text-xl">✓</span>
              <span className="font-['Lexend_Deca'] text-[#212121]">International curriculum standards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FABA1E] text-xl">✓</span>
              <span className="font-['Lexend_Deca'] text-[#212121]">Experienced, dedicated teaching staff</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FABA1E] text-xl">✓</span>
              <span className="font-['Lexend_Deca'] text-[#212121]">Modern facilities and resources</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FABA1E] text-xl">✓</span>
              <span className="font-['Lexend_Deca'] text-[#212121]">Strong community partnerships</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1a5336] to-[#14432b] p-12 text-center">
        <h3 className="font-['Crimson_Pro'] text-[32px] md:text-[40px] text-white mb-4">
          Ready to Learn More?
        </h3>
        <p className="font-['Lexend_Deca'] text-white/90 mb-8" style={{ lineHeight: '1.5' }}>
          Schedule a campus tour or speak with our admissions team today.
        </p>
        <button
          onClick={() => onNavigate('/contact/book-tour')}
          className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#e5a812] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a5336]"
        >
          Contact Us
        </button>
      </div>
    </PageTemplate>
  );
}