export interface SchoolLevel {
  id: string
  title: string
  subtitle: string
  descriptions: string[]
  image: string
  slug: string
  learnMoreUrl?: string
}

export const SCHOOL_LEVELS: SchoolLevel[] = [
  {
    id: 'galaxy-kc',
    title: 'KINDERGARTEN',
    subtitle: '18 months - 3 years',
    descriptions: [
      'Modern early childhood program with international methods.',
      'Integrated curriculum combining MOET and global standards.',
      'Focus on physical growth, character, and social skills.'
    ],
    image: '/images/home-page/section-education/program-03.png',
    slug: '/campus/galaxy-kc'
  },

  {
    id: 'elementary',
    title: 'PRIMARY SCHOOL',
    subtitle: 'Grade 1 - Grade 5',
    descriptions: [
      'Comprehensive bilingual curriculum with strong foundations.',
      'Holistic development emphasizing creativity and logic.',
      'Engaging activities building confidence and curiosity.'
    ],
    image: '/images/home-page/section-education/program-02.png',
    slug: '/campus/elementary',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/primary-school'
  },

  {
    id: 'middle',
    title: 'SECONDARY SCHOOL',
    subtitle: 'Grade 6 - Grade 9',
    descriptions: [
      'Academic curriculum focusing on critical thinking skills.',
      'Project-based learning encouraging teamwork and innovation.',
      'Preparation for higher academic challenges and pathways.'
    ],
    image: '/images/home-page/section-education/program.jpg',
    slug: '/campus/middle-school',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/secondary-school'
  },

  {
    id: 'highschool',
    title: 'HIGH SCHOOL',
    subtitle: 'Grade 10 - Grade 12',
    descriptions: [
      'Advanced academic programs aligned with global standards.',
      'Specialized guidance for university and career pathways.',
      'Opportunities for leadership and extracurricular excellence.'
    ],
    image: '/images/home-page/section-education/program-01.png',
    slug: '/campus/high-school',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/high-school'
  }
]
