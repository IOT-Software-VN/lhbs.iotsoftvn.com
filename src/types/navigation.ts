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
}

// Built from SITEMAP_YAML
export const siteNavigation: NavParent[] = [
  {
    id: 'admissions',
    label: 'Admissions',
    path: '/admissions',
    description: 'Apply, tuition, scholarships, FAQs',
    children: [
      { id: 'admissions-apply', label: 'Apply Now', path: '/admissions/apply-now', description: 'Start your LHBS journey with our simple application process' },
      { id: 'admissions-tuition', label: 'Tuition & Fees', path: '/admissions/tuition-fees', description: 'Transparent pricing and flexible payment options' },
      { id: 'admissions-scholarships', label: 'Scholarships', path: '/admissions/scholarships', description: 'Financial support for deserving students' },
      // { id: 'admissions-faqs', label: 'FAQs', path: '/admissions/faqs', description: 'Common questions about enrollment and life at LHBS' },
    ]
  },
  {
    id: 'academics',
    label: 'Academics',
    path: '/academics/overview',
    description: 'Programs and learning pathways',
    children: [
      { id: 'academics-kindergarten', label: 'Galaxy KG+', path: '/academics/kindergarten', description: 'Ages 3-5: Play-based bilingual learning' },
      { id: 'academics-primary', label: 'LHBS Primary School+', path: '/academics/primary', description: 'Grades 1-5: Building strong foundations' },
      { id: 'academics-lower', label: 'LHBS Secondary School+', path: '/academics/lower-secondary', description: 'Grades 6-9: Advanced concepts and critical thinking' },
      { id: 'academics-upper', label: 'LHBS High School+', path: '/academics/upper-secondary', description: 'Grades 10-12: University preparation and global readiness' },
    ]
  },
  {
    id: 'our-school',
    label: 'Our School',
    path: '/our-school',
    description: 'Vision, leadership, accreditation',
    children: [
      { id: 'our-school-about', label: 'About Us', path: '/our-school/about-us', description: '15 years of educational excellence and innovation' },
      { id: 'our-school-leadership', label: 'Leadership & Founding Message', path: '/our-school/leadership', description: 'Meet our dedicated leaders and founder\'s vision' },
      { id: 'our-school-facilities', label: 'Facilities', path: '/our-school/facilities', description: 'State-of-the-art learning environments' },
      { id: 'our-school-accreditation', label: 'Accreditation', path: '/our-school/accreditation', description: 'International standards and certifications' },
    ]
  },
  {
    id: 'student-life',
    label: 'Student Life',
    path: '/student-life',
    description: 'Clubs, sports, wellbeing',
    children: [
      { id: 'student-life-clubs', label: 'Clubs & Activities', path: '/student-life/clubs-activities', description: 'Diverse extracurricular programs for every interest' },
      { id: 'student-life-sports', label: 'Sports', path: '/student-life/sports', description: 'Athletics, teamwork, and physical development' },
      { id: 'student-life-wellbeing', label: 'Wellbeing & Support', path: '/student-life/wellbeing', description: 'Comprehensive student support services' },
    ]
  },
  {
    id: 'news-events',
    label: 'News & Events',
    path: '/news-events',
    description: 'Updates from the community',
    children: [
      { id: 'news-events-news', label: 'News', path: '/news-events/news', description: 'Latest achievements and announcements' },
      { id: 'news-events-events', label: 'Events', path: '/news-events/events', description: 'Upcoming activities and celebrations' },
    ]
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    description: 'Get in touch and visit',
    children: [
      { id: 'contact-us', label: 'Contact Us', path: '/contact/contact-us', description: 'Send us your questions and inquiries' },
      { id: 'contact-tour', label: 'Book a School Tour', path: '/contact/book-tour', description: 'Schedule a personalized campus visit' },
    ]
  },
];