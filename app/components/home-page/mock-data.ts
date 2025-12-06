export interface SchoolLevel {
  id: string;
  title: string;
  subtitle: string;
  descriptions: string[];
  image: string;
  slug: string;
  learnMoreUrl?: string;
}

export const SCHOOL_LEVELS: SchoolLevel[] = [
  {
    id: "galaxy-kc",
    title: "KINDERGARTEN",
    subtitle: "From 18 months to 3 years",
    descriptions: [
      "A modern early childhood program built on advanced international teaching methods.",
      "Integrated curriculum combining Vietnam’s MOET standards with global best practices.",
      "Focus on nurturing physical growth, knowledge, character, and essential social skills.",
      "Enhanced language development through engaging, age-appropriate learning experiences."
    ],
    image: "/images/home-page/section-education/program-03.png",
    slug: "/campus/galaxy-kc"
  },

  {
    id: "elementary",
    title: "PRIMARY SCHOOL",
    subtitle: "From Grade 1 to Grade 5",
    descriptions: [
      "Comprehensive bilingual curriculum with strong academic foundation.",
      "Holistic development emphasizing creativity and problem-solving.",
      "Experienced teachers guiding students through essential learning stages.",
      "Engaging classroom activities that build confidence and curiosity."
    ],
    image: "/images/home-page/section-education/program-02.png",
    slug: "/campus/elementary",
    learnMoreUrl: "https://school-lhbs-iotsoftvn-com.vercel.app/"
  },

  {
    id: "middle",
    title: "SECONDARY SCHOOL",
    subtitle: "From Grade 6 to Grade 9",
    descriptions: [
      "Curriculum focusing on critical thinking and independent learning.",
      "Preparation for higher academic challenges and future pathways.",
      "Projects and activities encouraging teamwork and innovation.",
      "Supportive teachers helping students navigate adolescence effectively."
    ],
    image: "/images/home-page/section-education/program.jpg",
    slug: "/campus/middle-school",
    learnMoreUrl: "https://school-lhbs-iotsoftvn-com.vercel.app/"
  },

  {
    id: "highschool",
    title: "HIGH SCHOOL",
    subtitle: "From Grade 10 to Grade 12",
    descriptions: [
      "Advanced academic programs aligned with global standards.",
      "Guidance counseling for university preparation and career pathways.",
      "Opportunities for leadership, research, and extracurricular excellence.",
      "Personalized support for students to excel academically and socially."
    ],
    image: "/images/home-page/section-education/program-01.png",
    slug: "/campus/high-school",
    learnMoreUrl: "https://school-lhbs-iotsoftvn-com.vercel.app/"
  }
];
