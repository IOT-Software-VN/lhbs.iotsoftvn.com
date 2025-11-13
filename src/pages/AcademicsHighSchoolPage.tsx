import { ChevronRight, GraduationCap, Award, Globe2, Target, Brain, Rocket, Users, Microscope, Heart, Beaker, Mic, Palette, Trophy, Briefcase, MessageCircle, DollarSign, BookOpen, Send, Languages } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AcademicsHighSchoolPageProps {
  onNavigate: (path: string) => void;
}

export function AcademicsHighSchoolPage({ onNavigate }: AcademicsHighSchoolPageProps) {
  return (
    <div className="w-full">
      {/* HS_Hero - Conquering prestigious universities */}
      <section 
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center bg-[#fffae9]"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.85), rgba(26, 83, 54, 0.85)), url(https://images.unsplash.com/photo-1721702754494-fdd7189f946c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzYzMDAyMzk2fDA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Decorative motif */}
        <div 
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(250, 186, 30, 0.1) 50px, rgba(250, 186, 30, 0.1) 51px)`
          }}
        />
        
        <div className="relative w-full max-w-screen-xl mx-auto px-6 md:px-12 py-24 md:py-32">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('/')}
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                  aria-label="Navigate to home page"
                >
                  Home
                </button>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/academics/overview')}
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                >
                  Academics
                </button>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />
              </li>
              <li className="text-[#fffae9] font-['Lexend_Deca']">Upper Secondary</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4 font-['Lexend_Deca'] uppercase tracking-wider">Grades 10-12 | Ages 15-18</p>
            <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-6">
              Conquering Prestigious Universities – A Stepping Stone from Lac Hong
            </h1>
            <p className="text-[#fffae9]/90 mb-8 font-['Lexend_Deca'] text-lg leading-relaxed">
              Our High School program delivers rigorous AP/IB education, personalized university counseling, and comprehensive preparation for admission to the world's top universities—empowering students to achieve their highest aspirations.
            </p>

            {/* Stat Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">98%</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">University Acceptance Rate</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <Languages className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">7.5+</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">Average IELTS Score</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">$2.5M+</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">Scholarships Awarded</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
              >
                Download Curriculum PDF
              </button>
              <button 
                className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-['Arial'] hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
              >
                View Course Catalog
              </button>
              <button 
                onClick={() => onNavigate('/contact/contact-us')}
                className="px-8 h-12 bg-transparent text-[#fffae9] border border-[#fffae9]/50 font-['Arial'] hover:border-[#fffae9] hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
              >
                Talk to a Counselor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HS_WhyThisStage */}
      <section className="bg-white py-24 md:py-32" id="why">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Why This Stage Matters
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg">
              High School is the culmination of your educational journey—defining who you become, where you go, and what you achieve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Target className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">University Admission</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Comprehensive support to gain admission to top universities globally, including Ivy League, Oxbridge, and leading Asian institutions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Brain className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Academic Excellence</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Rigorous AP and IB curriculum challenges students to master advanced content and develop university-level research skills.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Globe2 className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Global Citizenship</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                International curriculum, exchange programs, and service learning develop cross-cultural competence and ethical leadership.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Rocket className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Career Readiness</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Internships, mentorships, and career exploration programs prepare students for professional success in their chosen fields.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Users className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Leadership & Impact</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Student-led initiatives, entrepreneurship, and community projects build confidence and create meaningful change.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Heart className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Personal Growth</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Comprehensive wellbeing support and life skills development ensure students thrive emotionally and socially.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HS_CurriculumAreas */}
      <section className="bg-[#fffae9] py-24 md:py-32" id="curriculum">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Curriculum Areas
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Our High School curriculum offers the perfect balance of rigorous core requirements and flexible specialization tracks to match each student's university and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Overview */}
            <div>
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">High School Overview</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Core Subjects</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    Advanced English Literature & Composition, Vietnamese Language & Culture, Mathematics (Calculus/Statistics), Sciences (Biology, Chemistry, Physics), Social Studies (History, Economics, Government), Physical Education & Health
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Specialized Tracks</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    <strong>STEM Track:</strong> AP Calculus BC, AP Physics C, AP Chemistry, Computer Science, Engineering Design<br/>
                    <strong>Business & Economics:</strong> AP Microeconomics, AP Statistics, Business Management, Entrepreneurship<br/>
                    <strong>Humanities:</strong> AP Literature, AP World History, Philosophy, Psychology<br/>
                    <strong>Arts & Design:</strong> Visual Arts, Music Theory, Digital Media, Portfolio Development
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Key Milestones</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    <strong>Grade 10:</strong> Track selection, SAT/ACT prep begins, summer enrichment<br/>
                    <strong>Grade 11:</strong> AP/IB exams, standardized testing, university research, leadership roles<br/>
                    <strong>Grade 12:</strong> University applications, capstone projects, graduation portfolio
                  </p>
                </div>
              </div>
            </div>

            {/* Right: At-a-glance */}
            <div className="space-y-8">
              {/* Weekly Allocation */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Weekly Time Allocation</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-[#1a5336]">
                        <th className="text-left py-3 font-['Lexend_Deca'] text-[#1a5336]">Subject Area</th>
                        <th className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">Hours/Week</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">English & Vietnamese</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">6</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Mathematics</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">5</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Sciences</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">6</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Social Studies</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">4</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Specialized Track</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">8</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">University Prep & Research</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Assessment */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Assessment & Reporting</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Cumulative GPA on 4.0 scale with weighted honors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span className="font-['Lexend_Deca'] text-[#1a5336]/70">AP/IB exam scores reported to universities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Official transcripts and recommendation letters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Digital portfolio showcasing achievements</span>
                  </li>
                </ul>
              </div>

              {/* Homework */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Homework & Study Expectations</h3>
                <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-3">
                  Expected workload: G10-11 (2.5 hours), G12 (2-3 hours). Includes reading, problem sets, essays, research, and test preparation.
                </p>
                <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                  Students develop time management, independent study skills, and academic discipline essential for university success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HS_TeacherEnvironment - 4 Image Gallery */}
      <section className="bg-white py-24 md:py-32" id="environment">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Teachers & Learning Environment
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Expert faculty and state-of-the-art facilities create an environment where academic excellence and innovation thrive.
            </p>
          </div>

          {/* 4 Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1669216368818-8dcc28259724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMGNoZW1pc3RyeSUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYzMDAyMzk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Advanced chemistry laboratory with university-grade equipment"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                University-level science labs for advanced research and experiments
              </p>
            </div>

            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwbGFiJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMwMDIzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Innovation lab with cutting-edge technology"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                Innovation lab for engineering, robotics, and technology projects
              </p>
            </div>

            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjI5NTE0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative design studio workspace"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                Professional design studios for arts, media, and portfolio development
              </p>
            </div>

            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MzAwMjM5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern collaborative classroom with technology"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                Technology-enhanced seminar rooms for discussion and collaboration
              </p>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="bg-[#fffae9] p-8">
            <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Excellence in Teaching</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]">
                    <strong>Expert faculty</strong> with advanced degrees from top universities and specialized expertise
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]">
                    <strong>Laboratory safety</strong> protocols meeting international standards for advanced research
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]">
                    <strong>Academic integrity</strong> culture with honor code and ethical research practices
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]">
                    <strong>Family communication</strong> through regular updates, conferences, and university planning sessions
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HS_Extracurricular */}
      <section className="bg-[#fffae9] py-24 md:py-32" id="activities">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Beyond the Classroom
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl mx-auto">
              Elite clubs, competitions, and leadership opportunities that distinguish students in university applications and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Activity 1: STEM & Competition */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1756367264241-a3b860c53b87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwY29tcGV0aXRpb24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NjMwMDIzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students competing in science olympiad"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Beaker className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">STEM & Competition</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">International Science Olympiad teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Research symposiums and science fairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Advanced robotics and AI projects</span>
                </li>
              </ul>
            </div>

            {/* Activity 2: Leadership & Debate */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhZGVyc2hpcCUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzYzMDAyMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student leadership conference"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Mic className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Leadership & Debate</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Model UN and international debate circuits</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Student government and school leadership</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">TEDx Youth talks and public speaking</span>
                </li>
              </ul>
            </div>

            {/* Activity 3: Arts & Media */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1667816878987-bfbece40b561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBlcmZvcm1hbmNlJTIwY29uY2VydHxlbnwxfHx8fDE3NjI5NjA0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Music performance concert"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Palette className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Arts & Media</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Theater productions and film festivals</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Music ensembles and solo performances</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Art portfolio development for university</span>
                </li>
              </ul>
            </div>

            {/* Activity 4: Varsity Sports */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpY3MlMjBjb21wZXRpdGlvbiUyMHJ1bm5pbmd8ZW58MXx8fHwxNzYzMDAyMzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Athletics competition track and field"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Varsity Sports</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Regional and national championships</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Elite training and coaching programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Sports scholarships and recruitment</span>
                </li>
              </ul>
            </div>

            {/* Activity 5: Career Prep */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1659080927204-de39f5fdfb02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBmYWlyJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzMDAyMzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Career fair with industry professionals"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Career Preparation</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Internships at leading companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Entrepreneurship incubator and startups</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Alumni mentorship network</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HS_StudentSupport */}
      <section className="bg-white py-24 md:py-32" id="support">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Student Support & Wellbeing
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Comprehensive support ensures every student navigates the pressures of High School while maintaining wellbeing and reaching their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Academic Support */}
            <div className="bg-[#fffae9] p-8">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Academic Support</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-['Crimson_Pro'] font-bold text-[#1a5336] mb-3">EAL Support</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Advanced academic English for university readiness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">IELTS/TOEFL preparation courses</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Crimson_Pro'] font-bold text-[#1a5336] mb-3">RTI & Academic Coaching</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">One-on-one academic coaching and tutoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Study skills, note-taking, and test strategies</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Crimson_Pro'] font-bold text-[#1a5336] mb-3">Enrichment & Research</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Independent research with faculty mentorship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">University-level courses and dual enrollment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Panel - Wellbeing & University */}
            <div className="bg-[#fffae9] p-8">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Wellbeing & University Counseling</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-['Crimson_Pro'] font-bold text-[#1a5336] mb-3">Mental Health & Wellbeing</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Licensed counselors for stress and anxiety management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Mindfulness programs and wellness workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Peer support networks and crisis intervention</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Crimson_Pro'] font-bold text-[#1a5336] mb-3">University Counseling (Elite Track)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Dedicated counselors for Ivy League/Oxbridge applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Essay coaching, interview prep, and portfolio reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Scholarship applications and financial aid guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">University tours and admissions officer visits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Parent Partnership Note */}
          <div className="mt-8 bg-[#1a5336] p-8 text-center">
            <p className="font-['Lexend_Deca'] text-[#fffae9] mb-4">
              <strong>Parent Partnership:</strong> Regular workshops on university planning, application timelines, financial aid, and supporting students through the college admissions process.
            </p>
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
            >
              <MessageCircle className="inline w-5 h-5 mr-2 mb-1" />
              Connect with University Counselors
            </button>
          </div>
        </div>
      </section>

      {/* HS_TuitionPolicy */}
      <section className="bg-[#fffae9] py-24 md:py-32" id="tuition">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Tuition & Investment
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Comprehensive High School education with elite university preparation—an investment in your child's future success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Included */}
            <div className="bg-white p-8 shadow-sm">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Included in Tuition</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">All AP/IB courses and specialized tracks</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Textbooks, materials, and technology devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Full university counseling and application support</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">SAT/ACT prep courses (2 full courses)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Research lab access and mentorship</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Most clubs, activities, and varsity sports</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">School uniform and graduation regalia</span>
                </li>
              </ul>
            </div>

            {/* Optional */}
            <div className="bg-white p-8 shadow-sm">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Optional Add-Ons</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">AP/IB exam registration fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Premium university counseling package (Ivy+)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">International competitions travel costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Study abroad programs and exchanges</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Private music lessons and portfolio coaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">University application fees (varies by school)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment & Scholarship */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Payment Plans</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-4">
                Flexible payment options for High School:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Annual:</strong> 5% discount for full upfront payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Semester:</strong> 2 installments per academic year</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Quarterly:</strong> 4 payments throughout the year</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Monthly:</strong> 10 monthly payments (Sept–June)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Scholarships & Financial Aid</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-4">
                Recognizing and supporting exceptional students:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Presidential Scholarships: 50-100% (top achievers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Merit scholarships: 20-50% based on GPA/test scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Talent awards in STEM, arts, athletics</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Need-based financial aid (confidential)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/admissions/tuition-fees')}
              className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-['Arial'] hover:bg-[#0f3a24] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              <DollarSign className="inline w-5 h-5 mr-2 mb-1" />
              View Full Fee Schedule
            </button>
            <button 
              onClick={() => onNavigate('/admissions/scholarships')}
              className="px-8 h-12 bg-transparent text-[#1a5336] border-2 border-[#1a5336] font-['Arial'] hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              <BookOpen className="inline w-5 h-5 mr-2 mb-1" />
              Scholarship Information
            </button>
            <button 
              onClick={() => onNavigate('/admissions/apply-now')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
            >
              <Send className="inline w-5 h-5 mr-2 mb-1" />
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* HS_HelperFooter */}
      <section className="bg-white py-16 md:py-24">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
            Ready to Reach for the Stars?
          </h2>
          <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg mb-8 max-w-2xl mx-auto">
            Discover how our High School program prepares students for admission to the world's most prestigious universities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-['Arial'] hover:bg-[#0f3a24] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Talk to an Admissions Advisor
            </button>
            <button 
              className="px-8 h-12 bg-transparent text-[#1a5336] border-2 border-[#1a5336] font-['Arial'] hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Download University Guide
            </button>
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-transparent text-[#1a5336] border border-[#1a5336]/50 font-['Arial'] hover:border-[#1a5336] hover:bg-[#1a5336]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Contact University Counselor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
