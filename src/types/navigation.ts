export interface NavChild {
  id: string;
  label: string;
  path: string;
  description?: string;
}

export interface NavParent {
  id: string;
  label: string;
  path: string;
  description: string;
  children: NavChild[];
  cta?: {
    text: string;
    path: string;
  };
}

// More/Additional Links (right column in mega menu)
export interface MoreLink {
  label: string;
  path: string;
}

export const moreLinks: MoreLink[] = [
  { label: 'About Our School', path: '/our-school/about-us' },
  // { label: 'Parents', path: '/parents' },
  { label: 'Parent Essentials', path: '/parents/essentials' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Academic Results', path: '/academic-results' },
  { label: 'Apply Now', path: '/admissions/apply-now' },
  { label: 'Q & A', path: '/admissions/faqs' },
];

// New sitemap based on concept slide
export const siteNavigation: NavParent[] = [
  {
    id: 'admission',
    label: 'Admission',
    path: '/admissions',
    description: 'Join the LHBS family',
    children: [
      { id: 'admission-tuition', label: 'Tuition & Fees', path: '/admissions/tuition-fees', description: 'Transparent pricing and flexible payment options' },
      { id: 'admission-scholarships', label: 'Scholarships', path: '/admissions/scholarships', description: 'Financial support for deserving students' },
      { id: 'admission-requirements', label: 'Entry Requirements', path: '/admissions/entry-requirements', description: 'Admission criteria and documentation needed' },
      { id: 'admission-opensday', label: 'Open days', path: '/admissions/opendays', description: 'Open days' },

    ],
    cta: {
      text: 'Apply Now',
      path: '/admissions/apply-now'
    }
  },
  {
    id: 'lhbs-campus',
    label: 'LHBS Campus',
    path: '/our-school',
    description: 'Explore our facilities and environment',
    children: [
      { id: 'campus-about', label: 'About Our School', path: '/our-school/about-us', description: '15 years of educational excellence and innovation' },
      { id: 'campus-facilities', label: 'Facilities', path: '/our-school/facilities', description: 'State-of-the-art learning environments' },
      // { id: 'campus-leadership', label: 'Leadership & Vision', path: '/our-school/leadership', description: 'Meet our dedicated leaders and founder\'s vision' },
      // { id: 'campus-accreditation', label: 'Accreditation', path: '/our-school/accreditation', description: 'International standards and certifications' },
    ],
    cta: {
      text: 'Explore Our Campus',
      path: '/our-school/facilities'
    }
  },
  {
    id: 'holistic-education',
    label: 'Holistic Education',
    path: '/academics/overview',
    description: 'Comprehensive bilingual learning programs',
    children: [
      { id: 'holistic-kindergarten', label: 'Galaxy KG', path: '/academics/kindergarten', description: 'Ages 3-5: Play-based bilingual learning' },
      { id: 'holistic-primary', label: 'LHBS Primary School', path: '/academics/primary', description: 'Grades 1-5: Building strong foundations' },
      { id: 'holistic-lower', label: 'LHBS Secondary School', path: '/academics/lower-secondary', description: 'Grades 6-9: Advanced concepts and critical thinking' },
      { id: 'holistic-upper', label: 'LHBS High School', path: '/academics/upper-secondary', description: 'Grades 10-12: University preparation and global readiness' },
      //{ id: 'holistic-overview', label: 'Curriculum Overview', path: '/academics/overview', description: 'Our comprehensive educational approach' },
      { id: 'how-we-teach', label: 'How We Teach', path: '/academics/how-we-teach', description: 'Our comprehensive educational approach' },
    ],
    cta: {
      text: 'Discover Our Programme',
      path: '/academics/overview'
    }
  },
  {
    id: 'paths-to-passion',
    label: 'Paths to Passion',
    path: '/student-life/outstanding-experiences',
    description: 'Beyond the classroom experiences',
    children: [
      { id: 'passion-clubs', label: 'Extracurricular Activities', path: '/student-life/clubs-activities', description: 'Diverse extracurricular programs for every interest' },
      // { id: 'passion-sports', label: 'Sports', path: '/student-life/sports', description: 'Athletics, teamwork, and physical development' },
      // { id: 'passion-wellbeing', label: 'Wellbeing & Support', path: '/student-life/wellbeing', description: 'Comprehensive student support services' },
      // { id: 'passion-arts', label: 'Arts & Culture', path: '/student-life/clubs-activities', description: 'Creative expression and cultural activities' },
    ],
    cta: {
      text: 'Explore Outstanding Experiences',
      path: '/student-life/outstanding-experiences'
    }
  },
];