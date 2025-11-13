import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Phone, Mail, MessageCircle, Calendar, CheckCircle, FileText, Users, Trophy, Clock, ArrowRight, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import admissionsHeroImage from '../assets/hero-01.jpg';

export function AdmissionsPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="relative bg-[#fffae9]">
      {/* Section 1: Header Hero */}
      <HeaderAdmissions onNavigate={onNavigate} />
      
      {/* Section 2: Why Choose */}
      <WhyChooseSection />
      
      {/* Section 3: Process Timeline */}
      <ProcessSection onNavigate={onNavigate} />
      
      {/* Section 4: Tuition & Fees */}
      <TuitionFeesSection onNavigate={onNavigate} />
      
      {/* Section 5: Scholarships & Support */}
      <ScholarshipsSection onNavigate={onNavigate} />
      
      {/* Section 6: Entry Requirements */}
      <EntryRequirementsSection onNavigate={onNavigate} />
      
      {/* Section 7: Key Dates */}
      <KeyDatesSection />
      
      {/* Section 8: Apply Online */}
      <ApplyOnlineSection onNavigate={onNavigate} />
      
      {/* Section 9: Helper Footer */}
      <HelperFooterAdmissions />
    </div>
  );
}

// ==================== SECTION 1: HEADER ADMISSIONS ====================
function HeaderAdmissions({ onNavigate }: { onNavigate: (path: string) => void }) {
  const hdrTitle = "Join the LHBS Community";
  const hdrSubhead = "Where Vietnamese Heritage Meets Global Excellence";
  const hdrLead = "We welcome families who share our commitment to bilingual education, academic excellence, and character development. Our admissions process is designed to ensure the best fit for both students and our learning community.";
  const applyLink = "/admissions/apply-now";
  const tourLink = "/contact/book-tour";
  const guidePdf = "/downloads/admissions-guide-2025.pdf";
  const counselorLink = "/contact/admissions-counselor";

  return (
    <section className="relative min-h-[65vh] md:min-h-[50vh] flex items-center bg-[#fffae9] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={admissionsHeroImage} 
          alt="LHBS campus welcoming new students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a5336]/95 via-[#1a5336]/85 to-[#1a5336]/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 md:px-20 py-24">
        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <button 
                onClick={() => onNavigate('/')}
                className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              >
                Home
              </button>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />
            </li>
            <li className="text-[#fffae9] font-['Lexend_Deca']">Admissions</li>
          </ol>
        </nav>
        
        {/* Main Content - Left Aligned */}
        <div className="max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Subhead */}
            <p className="font-['Lexend_Deca'] text-sm md:text-base text-[#FABA1E] mb-4 tracking-wide uppercase">
              {hdrSubhead}
            </p>
            
            {/* Title */}
            <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-6">
              {hdrTitle}
            </h1>
            
            {/* Lead */}
            <p className="font-['Lexend_Deca'] text-base md:text-lg text-[#fffae9]/90 mb-8 leading-relaxed">
              {hdrLead}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => onNavigate(applyLink)}
                className="px-12 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9]"
              >
                APPLY NOW
              </button>
              
              <button
                onClick={() => onNavigate(tourLink)}
                className="px-12 h-12 border-2 border-[#fffae9] text-[#fffae9] font-['Arial'] font-bold hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              >
                BOOK A TOUR
              </button>
            </div>
            
            {/* Utility Links */}
            <div className="flex flex-wrap gap-6">
              <a
                href={guidePdf}
                download
                className="flex items-center gap-2 text-[#fffae9]/90 hover:text-[#fffae9] transition-colors font-['Lexend_Deca'] text-sm focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              >
                <Download className="w-4 h-4" />
                <span>Admissions Guide (PDF)</span>
              </a>
              
              <button
                onClick={() => onNavigate(counselorLink)}
                className="flex items-center gap-2 text-[#fffae9]/90 hover:text-[#fffae9] transition-colors font-['Lexend_Deca'] text-sm focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              >
                <Users className="w-4 h-4" />
                <span>Talk to a Counselor</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== SECTION 2: WHY CHOOSE ====================
function WhyChooseSection() {
  const features = [
    {
      icon: '🎓',
      title: 'Academic Excellence',
      description: '15 years of proven bilingual education with outstanding university acceptance rates',
      stat: '96%',
      statLabel: 'University Acceptance'
    },
    {
      icon: '🌏',
      title: 'Truly Bilingual',
      description: 'Seamless Vietnamese-English curriculum taught by native-speaking educators',
      stat: null,
      statLabel: null
    },
    {
      icon: '👥',
      title: 'Diverse Community',
      description: 'Students from 25+ countries creating a rich multicultural learning environment',
      stat: '6,000+',
      statLabel: 'Alumni Network'
    },
    {
      icon: '🏆',
      title: 'Award-Winning Programs',
      description: 'Recognized internationally for innovation in bilingual education',
      stat: null,
      statLabel: null
    },
    {
      icon: '🔬',
      title: 'Modern Facilities',
      description: 'State-of-the-art labs, libraries, sports facilities, and technology resources',
      stat: '980+',
      statLabel: 'Current Students'
    },
    {
      icon: '🤝',
      title: 'Personalized Support',
      description: 'Small class sizes with dedicated counselors and learning specialists',
      stat: null,
      statLabel: null
    }
  ];

  return (
    <section id="why-choose" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-[#fffae9]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-['Crimson_Pro'] text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-6">
          Why Choose LHBS?
        </h2>
        <p className="font-['Lexend_Deca'] text-base md:text-lg text-[#212121] max-w-[70ch] mx-auto">
          Join a community dedicated to nurturing bilingual, globally-minded leaders with deep roots in Vietnamese culture.
        </p>
      </div>
      
      {/* Feature Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="border-2 border-[#1a5336] p-8 hover:bg-[#1a5336] hover:text-[#fffae9] transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{feature.icon}</div>
            
            {/* Title */}
            <h3 className="font-['Crimson_Pro'] text-2xl text-[#1a5336] group-hover:text-[#fffae9] mb-3">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="font-['Lexend_Deca'] text-sm text-[#212121] group-hover:text-[#fffae9]/90 mb-4">
              {feature.description}
            </p>
            
            {/* Stat Badge */}
            {feature.stat && (
              <div className="mt-6 pt-4 border-t border-[#1a5336]/20 group-hover:border-[#fffae9]/20">
                <div className="font-['Arial'] text-3xl text-[#FABA1E] mb-1">
                  {feature.stat}
                </div>
                <div className="font-['Lexend_Deca'] text-xs text-[#212121] group-hover:text-[#fffae9]/70 uppercase tracking-wide">
                  {feature.statLabel}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Metrics Row */}
      <div className="grid md:grid-cols-3 gap-8">
        <MetricCard 
          value="96%" 
          label="University Acceptance Rate"
          description="Our graduates gain admission to top universities worldwide"
        />
        <MetricCard 
          value="6,000+" 
          label="Global Alumni Network"
          description="Successful graduates making impact across industries"
        />
        <MetricCard 
          value="980+" 
          label="Current Students"
          description="Thriving learners from diverse backgrounds"
        />
      </div>
    </section>
  );
}

function MetricCard({ value, label, description }: { value: string; label: string; description: string }) {
  return (
    <div className="text-center p-6 bg-[#1a5336] text-[#fffae9]">
      <div className="font-['Arial'] text-5xl md:text-6xl text-[#FABA1E] mb-3">
        {value}
      </div>
      <div className="font-['Crimson_Pro'] text-xl mb-2">
        {label}
      </div>
      <div className="font-['Lexend_Deca'] text-sm text-[#fffae9]/80">
        {description}
      </div>
    </div>
  );
}

// ==================== SECTION 3: PROCESS TIMELINE ====================
function ProcessSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const steps = [
    {
      title: 'Explore & Connect',
      description: 'Visit our campus, meet teachers, and experience LHBS firsthand',
      ctaText: 'Book Tour',
      ctaLink: '/contact/book-tour',
      sla: null
    },
    {
      title: 'Submit Application',
      description: 'Complete online form with student information and documents',
      ctaText: 'Start Application',
      ctaLink: '/admissions/apply-now',
      sla: '1 day'
    },
    {
      title: 'Upload Documents',
      description: 'Birth certificate, academic records, health forms, and photos',
      ctaText: 'View Requirements',
      ctaLink: '#entry',
      sla: '2-3 days'
    },
    {
      title: 'Assessment & Interview',
      description: 'Age-appropriate evaluation and family interview with admissions team',
      ctaText: 'Schedule Assessment',
      ctaLink: '/admissions/schedule-assessment',
      sla: '5-7 days'
    },
    {
      title: 'Decision & Offer',
      description: 'Receive admission decision and enrollment package',
      ctaText: 'Check Status',
      ctaLink: '/admissions/application-status',
      sla: '3-7 days'
    },
    {
      title: 'Enroll & Onboard',
      description: 'Complete enrollment, pay fees, and prepare for orientation',
      ctaText: 'Enrollment Guide',
      ctaLink: '/admissions/enrollment-guide',
      sla: '7-14 days'
    }
  ];

  return (
    <section id="process" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-['Crimson_Pro'] text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-6">
          Admissions Process
        </h2>
        <p className="font-['Lexend_Deca'] text-base md:text-lg text-[#212121] max-w-[75ch] mx-auto">
          Our straightforward 6-step process ensures a smooth journey from inquiry to enrollment.
        </p>
      </div>
      
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden lg:block mb-12">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-[#1a5336]/20" />
          
          {/* Steps */}
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Dot */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 bg-[#1a5336] flex items-center justify-center">
                  <span className="font-['Arial'] text-2xl text-[#fffae9] font-bold">
                    {index + 1}
                  </span>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="font-['Crimson_Pro'] text-lg text-[#1a5336] mb-2 font-semibold">
                    {step.title}
                  </h3>
                  <p className="font-['Lexend_Deca'] text-xs text-[#212121] mb-3 line-clamp-3">
                    {step.description}
                  </p>
                  
                  {step.sla && (
                    <div className="font-['Lexend_Deca'] text-xs text-[#FABA1E] mb-3">
                      ⏱ {step.sla}
                    </div>
                  )}
                  
                  <button
                    onClick={() => onNavigate(step.ctaLink)}
                    className="font-['Lexend_Deca'] text-xs text-[#1a5336] underline hover:text-[#FABA1E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                  >
                    {step.ctaText} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile: Stacked Steps */}
      <div className="lg:hidden space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            {/* Step Number */}
            <div className="flex-shrink-0 w-12 h-12 bg-[#1a5336] flex items-center justify-center">
              <span className="font-['Arial'] text-xl text-[#fffae9] font-bold">
                {index + 1}
              </span>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="font-['Crimson_Pro'] text-xl text-[#1a5336] mb-2">
                {step.title}
              </h3>
              <p className="font-['Lexend_Deca'] text-sm text-[#212121] mb-3">
                {step.description}
              </p>
              
              {step.sla && (
                <div className="font-['Lexend_Deca'] text-xs text-[#FABA1E] mb-3">
                  ⏱ Processing time: {step.sla}
                </div>
              )}
              
              <button
                onClick={() => onNavigate(step.ctaLink)}
                className="font-['Lexend_Deca'] text-sm text-[#1a5336] underline hover:text-[#FABA1E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              >
                {step.ctaText} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==================== SECTION 4: TUITION & FEES ====================
function TuitionFeesSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [selectedDivision, setSelectedDivision] = useState('primary');

  const oneTimeFees = [
    { item: 'Application Fee', amount: '5,000,000 VND' },
    { item: 'Registration Fee (New Students)', amount: '20,000,000 VND' },
    { item: 'Building Fund (One-time)', amount: '50,000,000 VND' }
  ];

  const tuitionByDivision = {
    kg: {
      name: 'Galaxy KG',
      annual: '180,000,000 VND',
      perTerm: '60,000,000 VND',
      instalment: '18,000,000 VND/month'
    },
    primary: {
      name: 'Primary School',
      annual: '220,000,000 VND',
      perTerm: '73,333,333 VND',
      instalment: '22,000,000 VND/month'
    },
    middle: {
      name: 'Middle School',
      annual: '240,000,000 VND',
      perTerm: '80,000,000 VND',
      instalment: '24,000,000 VND/month'
    },
    high: {
      name: 'High School',
      annual: '260,000,000 VND',
      perTerm: '86,666,667 VND',
      instalment: '26,000,000 VND/month'
    }
  };

  const optionalServices = [
    { item: 'School Bus (Round Trip)', amount: '8,000,000 VND/year' },
    { item: 'Lunch Program', amount: '15,000,000 VND/year' },
    { item: 'After-School Program', amount: '12,000,000 VND/year' },
    { item: 'Summer Camp', amount: 'Varies by program' }
  ];

  const discounts = [
    '10% discount for siblings (2nd child onwards)',
    '5% discount for early payment (full year)',
    'Need-based financial aid available',
    'Scholarship opportunities for academic excellence'
  ];

  return (
    <section id="tuition-fees" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-[#fffae9]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-['Crimson_Pro'] text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-6">
          Tuition & Fees
        </h2>
        <p className="font-['Lexend_Deca'] text-base md:text-lg text-[#212121] max-w-[75ch] mx-auto mb-8">
          Transparent pricing for world-class bilingual education. All fees are in Vietnamese Dong (VND).
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/downloads/tuition-fees-2025.pdf"
            download
            className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-['Arial'] font-bold flex items-center gap-2 hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
          >
            <Download className="w-4 h-4" />
            Download Full Fee Schedule (PDF)
          </a>
          
          <button
            onClick={() => onNavigate('/admissions/tuition-fees')}
            className="px-8 h-12 border-2 border-[#1a5336] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
          >
            Estimate Your Total
          </button>
        </div>
      </div>
      
      {/* Fee Summary Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* One-Time Fees */}
        <div className="border-2 border-[#1a5336] p-8">
          <h3 className="font-['Crimson_Pro'] text-2xl text-[#1a5336] mb-6">
            One-Time Fees
          </h3>
          <div className="space-y-4">
            {oneTimeFees.map((fee, index) => (
              <div key={index} className="flex justify-between items-start pb-3 border-b border-[#1a5336]/20 last:border-0">
                <span className="font-['Lexend_Deca'] text-sm text-[#212121]">{fee.item}</span>
                <span className="font-['Arial'] text-sm text-[#1a5336] font-bold">{fee.amount}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Optional Services */}
        <div className="border-2 border-[#1a5336] p-8">
          <h3 className="font-['Crimson_Pro'] text-2xl text-[#1a5336] mb-6">
            Optional Services
          </h3>
          <div className="space-y-4">
            {optionalServices.map((service, index) => (
              <div key={index} className="flex justify-between items-start pb-3 border-b border-[#1a5336]/20 last:border-0">
                <span className="font-['Lexend_Deca'] text-sm text-[#212121]">{service.item}</span>
                <span className="font-['Arial'] text-sm text-[#1a5336] font-bold">{service.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Annual Tuition by Division */}
      <div className="bg-white p-8 mb-8">
        <h3 className="font-['Crimson_Pro'] text-3xl text-[#1a5336] mb-6 text-center">
          Annual Tuition by Division
        </h3>
        
        {/* Division Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(tuitionByDivision).map(([key, division]) => (
            <button
              key={key}
              onClick={() => setSelectedDivision(key)}
              className={`px-6 h-10 font-['Lexend_Deca'] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] ${
                selectedDivision === key
                  ? 'bg-[#1a5336] text-[#fffae9]'
                  : 'bg-[#fffae9] text-[#1a5336] border-2 border-[#1a5336] hover:bg-[#1a5336]/10'
              }`}
            >
              {division.name}
            </button>
          ))}
        </div>
        
        {/* Tuition Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1a5336] text-[#fffae9]">
                <th className="font-['Crimson_Pro'] text-lg text-left p-4">Payment Plan</th>
                <th className="font-['Crimson_Pro'] text-lg text-right p-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1a5336]/20">
                <td className="font-['Lexend_Deca'] text-sm p-4">Annual (Full Year)</td>
                <td className="font-['Arial'] font-bold text-[#1a5336] text-right p-4">
                  {tuitionByDivision[selectedDivision as keyof typeof tuitionByDivision].annual}
                </td>
              </tr>
              <tr className="border-b border-[#1a5336]/20">
                <td className="font-['Lexend_Deca'] text-sm p-4">Per Term (3 terms/year)</td>
                <td className="font-['Arial'] font-bold text-[#1a5336] text-right p-4">
                  {tuitionByDivision[selectedDivision as keyof typeof tuitionByDivision].perTerm}
                </td>
              </tr>
              <tr>
                <td className="font-['Lexend_Deca'] text-sm p-4">Monthly Instalment (10 months)</td>
                <td className="font-['Arial'] font-bold text-[#1a5336] text-right p-4">
                  {tuitionByDivision[selectedDivision as keyof typeof tuitionByDivision].instalment}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Discounts & Notes */}
      <div className="bg-[#FABA1E]/10 border-l-4 border-[#FABA1E] p-6">
        <h4 className="font-['Crimson_Pro'] text-xl text-[#1a5336] mb-4">
          Discounts & Financial Support
        </h4>
        <ul className="space-y-2">
          {discounts.map((discount, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
              <span className="font-['Lexend_Deca'] text-sm text-[#212121]">{discount}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ==================== SECTION 5: SCHOLARSHIPS & SUPPORT ====================
function ScholarshipsSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const scholarships = [
    {
      title: 'Merit Scholarship',
      description: 'Recognizing outstanding academic achievement and leadership potential',
      criteria: [
        'Exceptional academic records (GPA ≥ 3.8/4.0)',
        'Demonstrated leadership in school or community',
        'Strong character references',
        'Outstanding entrance assessment scores'
      ],
      documents: ['Academic transcripts', 'Recommendation letters (2)', 'Personal statement', 'Awards/certificates'],
      deadline: 'March 31, 2025',
      amount: 'Up to 50% tuition coverage'
    },
    {
      title: 'Bilingual Achievement Award',
      description: 'For students demonstrating excellence in both Vietnamese and English',
      criteria: [
        'Proven bilingual proficiency (both languages)',
        'Strong performance in language assessments',
        'Cultural bridge-building activities',
        'Commitment to bilingual education values'
      ],
      documents: ['Language test scores', 'Portfolio of bilingual work', 'Video introduction (bilingual)', 'Teacher recommendations'],
      deadline: 'April 15, 2025',
      amount: 'Up to 30% tuition coverage'
    },
    {
      title: 'Need-Based Financial Aid',
      description: 'Supporting families who need financial assistance to access quality education',
      criteria: [
        'Demonstrated financial need',
        'Student shows academic promise',
        'Family commitment to school values',
        'Complete financial documentation'
      ],
      documents: ['Financial aid application', 'Income verification', 'Tax documents', 'Supporting statement'],
      deadline: 'Rolling basis',
      amount: 'Varies by need (up to 70%)'
    },
    {
      title: 'Siblings & Loyalty Discount',
      description: 'Rewarding families with multiple children at LHBS or long-term enrollment',
      criteria: [
        'Two or more siblings enrolled simultaneously',
        'OR continuous enrollment for 3+ years',
        'Good standing (academic & conduct)',
        'Timely fee payments'
      ],
      documents: ['Enrollment verification', 'Family registration form'],
      deadline: 'Automatic (at enrollment)',
      amount: '10% per additional child'
    }
  ];

  return (
    <section id="scholarships" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left: Overview */}
        <div>
          <h2 className="font-['Crimson_Pro'] text-4xl md:text-5xl text-[#1a5336] mb-6">
            Scholarships & Financial Support
          </h2>
          
          <p className="font-['Lexend_Deca'] text-base md:text-lg text-[#212121] mb-6 leading-relaxed">
            We believe that exceptional bilingual education should be accessible to talented students from all backgrounds. LHBS offers a comprehensive range of scholarships and financial aid options to support deserving families.
          </p>
          
          <p className="font-['Lexend_Deca'] text-base text-[#212121] mb-8 leading-relaxed">
            Our scholarship programs recognize academic excellence, bilingual achievement, leadership, and character. We also provide need-based financial aid to ensure that financial circumstances never prevent a qualified student from joining our community.
          </p>
          
          <div className="bg-[#FABA1E]/10 border-l-4 border-[#FABA1E] p-6 mb-8">
            <p className="font-['Lexend_Deca'] text-sm text-[#212121]">
              <strong className="text-[#1a5336]">💡 Pro Tip:</strong> Many scholarships can be combined! A student may be eligible for both merit-based awards and sibling discounts. Contact our admissions team to explore all options.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <a
              href="/downloads/scholarship-policy-2025.pdf"
              download
              className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-['Arial'] font-bold flex items-center justify-center gap-2 hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
            >
              <Download className="w-4 h-4" />
              Scholarship Policy (PDF)
            </a>
            
            <button
              onClick={() => onNavigate('/admissions/financial-aid-application')}
              className="px-8 h-12 border-2 border-[#1a5336] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
            >
              Apply for Financial Aid
            </button>
          </div>
        </div>
        
        {/* Right: Accordion */}
        <div>
          <div className="space-y-4">
            {scholarships.map((scholarship, index) => (
              <ScholarshipAccordion
                key={index}
                scholarship={scholarship}
                index={index}
                isOpen={openAccordion === index}
                onToggle={() => setOpenAccordion(openAccordion === index ? null : index)}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ScholarshipAccordionProps {
  scholarship: any;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (path: string) => void;
}

function ScholarshipAccordion({ scholarship, index, isOpen, onToggle, onNavigate }: ScholarshipAccordionProps) {
  return (
    <div className="border-2 border-[#1a5336]">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <h3 className="font-['Crimson_Pro'] text-xl md:text-2xl text-[#1a5336] mb-1">
            {scholarship.title}
          </h3>
          <p className="font-['Lexend_Deca'] text-sm text-[#212121]">
            {scholarship.amount}
          </p>
        </div>
        
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-[#1a5336] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-[#1a5336] flex-shrink-0" />
        )}
      </button>
      
      {/* Content */}
      {isOpen && (
        <div className="p-6 pt-0 border-t border-[#1a5336]/20">
          <p className="font-['Lexend_Deca'] text-sm text-[#212121] mb-6">
            {scholarship.description}
          </p>
          
          {/* Criteria */}
          <div className="mb-6">
            <h4 className="font-['Crimson_Pro'] text-lg text-[#1a5336] mb-3">Eligibility Criteria:</h4>
            <ul className="space-y-2">
              {scholarship.criteria.map((criterion: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-sm text-[#212121]">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Documents */}
          <div className="mb-6">
            <h4 className="font-['Crimson_Pro'] text-lg text-[#1a5336] mb-3">Required Documents:</h4>
            <ul className="space-y-2">
              {scholarship.documents.map((doc: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-[#1a5336] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-sm text-[#212121]">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Deadline & CTA */}
          <div className="bg-[#fffae9] p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-[#1a5336]" />
              <span className="font-['Lexend_Deca'] text-sm text-[#212121]">
                <strong>Application Deadline:</strong> {scholarship.deadline}
              </span>
            </div>
          </div>
          
          <button
            onClick={() => onNavigate('/admissions/scholarship-application')}
            className="w-full px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336]"
          >
            Apply for This Scholarship
          </button>
        </div>
      )}
    </div>
  );
}

// ==================== SECTION 6: ENTRY REQUIREMENTS ====================
function EntryRequirementsSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ageChart = [
    { grade: 'Galaxy KG', age: '3-5 years', cutoffDate: 'Before August 31' },
    { grade: 'Grade 1', age: '6 years', cutoffDate: 'Before August 31' },
    { grade: 'Grade 6', age: '11 years', cutoffDate: 'Before August 31' },
    { grade: 'Grade 10', age: '15 years', cutoffDate: 'Before August 31' }
  ];

  const requirements = [
    {
      title: 'Academic Records',
      icon: FileText,
      items: [
        'Most recent report cards (2 years)',
        'Teacher recommendations (current)',
        'Standardized test scores (if applicable)',
        'Portfolio of work (for transfer students)'
      ]
    },
    {
      title: 'English Proficiency',
      icon: CheckCircle,
      items: [
        'Age-appropriate English assessment',
        'Conversational fluency evaluation',
        'Reading & writing samples',
        'ESL support available for qualified students'
      ]
    },
    {
      title: 'Assessments',
      icon: Trophy,
      items: [
        'Academic placement test (Math, Language)',
        'English language proficiency test',
        'Student & family interview',
        'Behavioral/social assessment (for younger students)'
      ]
    },
    {
      title: 'Health Requirements',
      icon: CheckCircle,
      items: [
        'Complete health examination form',
        'Immunization records (up-to-date)',
        'Vision & hearing screening',
        'Special needs disclosure (if applicable)'
      ]
    },
    {
      title: 'Residency & Legal',
      icon: FileText,
      items: [
        'Valid passport or birth certificate',
        'Residence permit (for expat families)',
        'Custody/guardianship documents',
        'Previous school transfer documents'
      ]
    },
    {
      title: 'Transfer Students',
      icon: ArrowRight,
      items: [
        'Official transcripts from previous school',
        'Letter of good standing',
        'Course descriptions (for credit evaluation)',
        'May require additional assessments'
      ]
    }
  ];

  return (
    <section id="entry" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-[#fffae9]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-['Crimson_Pro'] text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-6">
          Entry Requirements
        </h2>
        <p className="font-['Lexend_Deca'] text-base md:text-lg text-[#212121] max-w-[70ch] mx-auto">
          Clear guidelines to help you prepare a complete application for your child.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 mb-12">
        {/* Left: Age & Grade Placement */}
        <div>
          <h3 className="font-['Crimson_Pro'] text-3xl text-[#1a5336] mb-6">
            Age & Grade Placement
          </h3>
          
          <p className="font-['Lexend_Deca'] text-sm text-[#212121] mb-6">
            Students must meet the minimum age requirement for their grade level by the cutoff date. 
            Grade placement is determined by age, previous schooling, and assessment results.
          </p>
          
          <div className="border-2 border-[#1a5336]">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1a5336] text-[#fffae9]">
                  <th className="font-['Crimson_Pro'] text-lg text-left p-4">Grade Level</th>
                  <th className="font-['Crimson_Pro'] text-lg text-left p-4">Age</th>
                  <th className="font-['Crimson_Pro'] text-lg text-left p-4">Cutoff Date</th>
                </tr>
              </thead>
              <tbody>
                {ageChart.map((row, index) => (
                  <tr key={index} className="border-b border-[#1a5336]/20 last:border-0">
                    <td className="font-['Lexend_Deca'] text-sm p-4">{row.grade}</td>
                    <td className="font-['Lexend_Deca'] text-sm p-4">{row.age}</td>
                    <td className="font-['Lexend_Deca'] text-sm p-4">{row.cutoffDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8">
            <a
              href="/downloads/admissions-policy-2025.pdf"
              download
              className="inline-flex items-center gap-2 px-8 h-12 bg-[#1a5336] text-[#fffae9] font-['Arial'] font-bold hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
            >
              <Download className="w-4 h-4" />
              Download Admissions Policy (PDF)
            </a>
          </div>
        </div>
        
        {/* Right: Requirements Grid */}
        <div className="space-y-6">
          {requirements.map((req, index) => (
            <div key={index} className="border-2 border-[#1a5336] p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1a5336] flex items-center justify-center">
                  <req.icon className="w-5 h-5 text-[#fffae9]" />
                </div>
                <h4 className="font-['Crimson_Pro'] text-xl text-[#1a5336]">
                  {req.title}
                </h4>
              </div>
              
              <ul className="space-y-2">
                {req.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#FABA1E] mt-1">•</span>
                    <span className="font-['Lexend_Deca'] text-sm text-[#212121]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== SECTION 7: KEY DATES ====================
function KeyDatesSection() {
  const dates = [
    {
      category: 'Application Rounds',
      events: [
        { title: 'Round 1 Applications Open', date: 'October 1, 2024', status: 'past' },
        { title: 'Round 1 Deadline', date: 'December 15, 2024', status: 'past' },
        { title: 'Round 2 Applications Open', date: 'January 10, 2025', status: 'active' },
        { title: 'Round 2 Deadline', date: 'March 31, 2025', status: 'upcoming' },
        { title: 'Final Round Deadline', date: 'June 15, 2025', status: 'upcoming' }
      ]
    },
    {
      category: 'Placement Tests',
      events: [
        { title: 'Round 1 Assessments', date: 'January 15-20, 2025', status: 'past' },
        { title: 'Round 2 Assessments', date: 'April 10-15, 2025', status: 'upcoming' },
        { title: 'Final Round Assessments', date: 'June 20-25, 2025', status: 'upcoming' }
      ]
    },
    {
      category: 'Scholarship Deadlines',
      events: [
        { title: 'Merit Scholarship Applications', date: 'March 31, 2025', status: 'upcoming' },
        { title: 'Bilingual Achievement Award', date: 'April 15, 2025', status: 'upcoming' },
        { title: 'Need-Based Aid (Rolling)', date: 'Ongoing', status: 'active' }
      ]
    },
    {
      category: 'Orientation & Start',
      events: [
        { title: 'New Family Orientation', date: 'August 10, 2025', status: 'upcoming' },
        { title: 'First Day of School', date: 'August 25, 2025', status: 'upcoming' }
      ]
    }
  ];

  return (
    <section id="dates" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <div>
          <h2 className="font-['Crimson_Pro'] text-4xl md:text-5xl text-[#1a5336] mb-4">
            Key Dates & Deadlines
          </h2>
          <p className="font-['Lexend_Deca'] text-base text-[#212121] max-w-[60ch]">
            Plan ahead with our admissions calendar. Mark important dates to ensure a smooth application process.
          </p>
        </div>
        
        <div className="mt-6 md:mt-0">
          <a
            href="/downloads/admissions-calendar-2025.ics"
            download
            className="inline-flex items-center gap-2 px-6 h-10 border-2 border-[#1a5336] text-[#1a5336] font-['Lexend_Deca'] hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
          >
            <Calendar className="w-4 h-4" />
            Add to Calendar
          </a>
        </div>
      </div>
      
      {/* Date Cards by Category */}
      <div className="space-y-12">
        {dates.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="font-['Crimson_Pro'] text-2xl text-[#1a5336] mb-6">
              {category.category}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className={`border-2 p-6 ${
                    event.status === 'active'
                      ? 'border-[#FABA1E] bg-[#FABA1E]/5'
                      : event.status === 'past'
                      ? 'border-[#1a5336]/30 bg-[#1a5336]/5'
                      : 'border-[#1a5336]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`px-3 py-1 text-xs font-['Lexend_Deca'] uppercase ${
                      event.status === 'active'
                        ? 'bg-[#FABA1E] text-[#1a5336]'
                        : event.status === 'past'
                        ? 'bg-[#1a5336]/20 text-[#1a5336]/60'
                        : 'bg-[#1a5336]/10 text-[#1a5336]'
                    }`}>
                      {event.status === 'active' ? 'Open Now' : event.status === 'past' ? 'Closed' : 'Upcoming'}
                    </div>
                  </div>
                  
                  <h4 className="font-['Crimson_Pro'] text-lg text-[#1a5336] mb-2">
                    {event.title}
                  </h4>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1a5336]" />
                    <span className="font-['Lexend_Deca'] text-sm text-[#212121]">
                      {event.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Get Reminders CTA */}
      <div className="mt-12 text-center">
        <button
          onClick={() => window.open('mailto:admissions@lhbs.edu.vn?subject=Admissions Date Reminders', '_blank')}
          className="px-12 h-12 bg-[#1a5336] text-[#fffae9] font-['Arial'] font-bold hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
        >
          Get Email Reminders
        </button>
      </div>
    </section>
  );
}

// ==================== SECTION 8: APPLY ONLINE ====================
function ApplyOnlineSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const checklist = [
    "Student's birth certificate or passport",
    'Recent academic transcripts (2 years)',
    'Immunization & health records',
    '2 passport-size photos',
    'Previous school reports & recommendations',
    'Parent/Guardian ID documents'
  ];

  return (
    <section id="apply" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-[#fffae9]">
      <div className="max-w-[800px] mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-['Crimson_Pro'] text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-6">
            Ready to Apply?
          </h2>
          
          <p className="font-['Lexend_Deca'] text-base md:text-lg text-[#212121] mb-6">
            Our online application makes it easy to start your LHBS journey. Complete the form at your own pace—you can save and continue later.
          </p>
          
          <div className="bg-[#1a5336]/5 border-l-4 border-[#1a5336] p-6 text-left">
            <p className="font-['Lexend_Deca'] text-sm text-[#212121]">
              <strong className="text-[#1a5336]">🔒 Your data is secure:</strong> We use industry-standard encryption to protect your personal information. We will never share your data with third parties without your consent. See our <button className="underline hover:text-[#FABA1E]">Privacy Policy</button> for details.
            </p>
          </div>
        </div>
        
        {/* What You'll Need */}
        <div className="mb-12 text-left">
          <h3 className="font-['Crimson_Pro'] text-2xl text-[#1a5336] mb-6 text-center">
            What You'll Need
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {checklist.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                <span className="font-['Lexend_Deca'] text-sm text-[#212121]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Estimated Time */}
        <div className="mb-12 flex items-center justify-center gap-3 text-[#212121]">
          <Clock className="w-5 h-5 text-[#1a5336]" />
          <span className="font-['Lexend_Deca'] text-sm">
            <strong>Estimated time:</strong> 20-30 minutes
          </span>
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => onNavigate('/admissions/apply-now')}
            className="px-12 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336]"
          >
            START APPLICATION
          </button>
          
          <button
            onClick={() => onNavigate('/contact/admissions-counselor')}
            className="px-12 h-12 border-2 border-[#1a5336] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
          >
            TALK TO A COUNSELOR
          </button>
        </div>
        
        {/* Save & Continue Note */}
        <p className="font-['Lexend_Deca'] text-sm text-[#212121]/70">
          💾 Don't worry—you can save your progress and continue later. We'll send you a link to resume.
        </p>
      </div>
    </section>
  );
}

// ==================== SECTION 9: HELPER FOOTER ====================
function HelperFooterAdmissions() {
  const hfHotline = '+84 (28) 3771 4568';
  const hfEmail = 'admissions@lhbs.edu.vn';
  const hfWhatsApp = '+84 90 123 4567';

  return (
    <section className="bg-[#1a5336] py-6 px-4 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left: Text */}
          <div>
            <p className="font-['Crimson_Pro'] text-xl text-[#fffae9] mb-1">
              Need Help With Your Application?
            </p>
            <p className="font-['Lexend_Deca'] text-sm text-[#fffae9]/80">
              Our admissions team is here to assist you every step of the way.
            </p>
          </div>
          
          {/* Right: Contact Options */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${hfHotline.replace(/\s/g, '')}`}
              className="flex items-center gap-2 px-6 h-10 bg-[#fffae9] text-[#1a5336] font-['Lexend_Deca'] text-sm hover:bg-[#FABA1E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
            >
              <Phone className="w-4 h-4" />
              <span>{hfHotline}</span>
            </a>
            
            <a
              href={`mailto:${hfEmail}`}
              className="flex items-center gap-2 px-6 h-10 bg-[#fffae9] text-[#1a5336] font-['Lexend_Deca'] text-sm hover:bg-[#FABA1E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            
            <a
              href={`https://wa.me/${hfWhatsApp.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 h-10 bg-[#fffae9] text-[#1a5336] font-['Lexend_Deca'] text-sm hover:bg-[#FABA1E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}