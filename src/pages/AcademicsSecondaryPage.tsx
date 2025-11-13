import { useState } from 'react';
import { ChevronRight, GraduationCap, Award, Users2, Brain, Target, Globe2, Rocket, Microscope, Heart, Beaker, Mic, Palette, Trophy, Briefcase, MessageCircle, DollarSign, BookOpen, Send } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AcademicsSecondaryPageProps {
  onNavigate: (path: string) => void;
}

export function AcademicsSecondaryPage({ onNavigate }: AcademicsSecondaryPageProps) {
  const [activeTab, setActiveTab] = useState<'lower' | 'upper'>('lower');

  return (
    <div className="w-full">
      {/* SS_Hero - The journey to conquer the peak of academics begins here */}
      <section 
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center bg-[#fffae9]"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.85), rgba(26, 83, 54, 0.85)), url(https://images.unsplash.com/photo-1758270704226-db897b180243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjMwMDE0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
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
              <li className="text-[#fffae9] font-['Lexend_Deca']">Lower Secondary</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4 font-['Lexend_Deca'] uppercase tracking-wider">Grades 6-12 | Ages 11-18</p>
            <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-6">
              The Journey to Conquer the Peak of Academics Begins Here
            </h1>
            <p className="text-[#fffae9]/90 mb-8 font-['Lexend_Deca'] text-lg leading-relaxed">
              Our Secondary program challenges students to reach their full potential through rigorous academics, personalized guidance, and comprehensive university preparation, cultivating the scholars, leaders, and global citizens of tomorrow.
            </p>

            {/* Stat Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <Users2 className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">1:12</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">Average Class Size</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">95%</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">University Acceptance</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">40+</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">Clubs & Activities</div>
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

      {/* SS_WhyThisStage */}
      <section className="bg-white py-24 md:py-32" id="why">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Why This Stage Matters
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg">
              Secondary school years are transformative—shaping identity, defining future paths, and building the knowledge and skills for university and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Brain className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Academic Rigor</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Advanced curriculum prepares students for top universities with AP/IB options and specialized tracks in STEM, humanities, and business.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Target className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">University Preparation</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Dedicated counseling team guides students through applications, SAT/ACT prep, essay writing, and portfolio development for global universities.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Globe2 className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Global Perspective</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                International curriculum and exchange programs develop cultural competence and prepare students for success in a globalized world.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Rocket className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Leadership Development</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Student government, service projects, and mentorship opportunities cultivate leadership skills and social responsibility.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Microscope className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Research & Innovation</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Independent research projects, science fairs, and innovation challenges develop critical inquiry and problem-solving abilities.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Heart className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Wellbeing & Identity</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Comprehensive counseling and social-emotional support help students navigate adolescence and build healthy self-identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SS_CurriculumAreas with Tabs */}
      <section className="bg-[#fffae9] py-24 md:py-32" id="curriculum">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Curriculum Areas
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Our rigorous curriculum is structured in two phases, each designed to build knowledge, skills, and readiness for the next stage.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 border-b border-[#1a5336]/20">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('lower')}
                className={`pb-4 px-2 font-['Lexend_Deca'] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] ${
                  activeTab === 'lower'
                    ? 'text-[#1a5336] border-b-2 border-[#FABA1E]'
                    : 'text-[#1a5336]/50 hover:text-[#1a5336]'
                }`}
                role="tab"
                aria-selected={activeTab === 'lower'}
              >
                Lower Secondary (Grades 6-9)
              </button>
              <button
                onClick={() => setActiveTab('upper')}
                className={`pb-4 px-2 font-['Lexend_Deca'] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] ${
                  activeTab === 'upper'
                    ? 'text-[#1a5336] border-b-2 border-[#FABA1E]'
                    : 'text-[#1a5336]/50 hover:text-[#1a5336]'
                }`}
                role="tab"
                aria-selected={activeTab === 'upper'}
              >
                Upper Secondary (Grades 10-12)
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'lower' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Overview */}
              <div>
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Lower Secondary Overview</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                    <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Core Subjects</h4>
                    <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                      English Language Arts, Vietnamese Language Arts, Mathematics, Science (Biology, Chemistry, Physics), Social Studies, Physical Education
                    </p>
                  </div>

                  <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                    <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Electives</h4>
                    <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                      Visual Arts, Music, Drama, Computer Science, Design & Technology, Additional Languages (Mandarin, French)
                    </p>
                  </div>

                  <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                    <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Learning Approach</h4>
                    <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                      Inquiry-based learning, project-based assessments, collaborative problem-solving, and STEAM integration build critical thinking and creativity.
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
                          <th className="text-left py-3 font-['Lexend_Deca'] text-[#1a5336]">Subject</th>
                          <th className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">Hours/Week</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#1a5336]/20">
                          <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Language Arts (Eng + Vie)</td>
                          <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">8</td>
                        </tr>
                        <tr className="border-b border-[#1a5336]/20">
                          <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Mathematics</td>
                          <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">5</td>
                        </tr>
                        <tr className="border-b border-[#1a5336]/20">
                          <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Science</td>
                          <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">6</td>
                        </tr>
                        <tr className="border-b border-[#1a5336]/20">
                          <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Social Studies</td>
                          <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">4</td>
                        </tr>
                        <tr className="border-b border-[#1a5336]/20">
                          <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Electives</td>
                          <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">5</td>
                        </tr>
                        <tr className="border-b border-[#1a5336]/20">
                          <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">PE & Wellbeing</td>
                          <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">3</td>
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
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Continuous formative assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Semester exams and projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Quarterly progress reports</span>
                    </li>
                  </ul>
                </div>

                {/* Homework */}
                <div className="bg-white p-8 shadow-sm">
                  <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Homework Policy</h3>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                    Expected homework: G6-7 (60 min), G8-9 (90 min). Focus on practice, reading, and project work to deepen understanding.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'upper' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Overview */}
              <div>
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Upper Secondary Overview</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                    <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Core Requirements</h4>
                    <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                      Advanced English, Advanced Mathematics, Science (2 subjects), Social Studies, Vietnamese Language & Culture, PE/Health
                    </p>
                  </div>

                  <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                    <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Specialized Tracks</h4>
                    <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                      STEM Track, Business & Economics, Humanities & Social Sciences, Arts & Design. Students choose 3-4 advanced electives aligned with university goals.
                    </p>
                  </div>

                  <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                    <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">AP/IB Options</h4>
                    <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                      AP courses in Calculus, Physics, Chemistry, Biology, English Literature, Economics. IB Diploma Programme available for qualifying students.
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
                          <th className="text-left py-3 font-['Lexend_Deca'] text-[#1a5336]">Subject</th>
                          <th className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">Hours/Week</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#1a5336]/20">
                          <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Core Subjects</td>
                          <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">15</td>
                        </tr>
                        <tr className="border-b border-[#1a5336]/20">
                          <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Specialized Track</td>
                          <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">10</td>
                        </tr>
                        <tr className="border-b border-[#1a5336]/20">
                          <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Electives</td>
                          <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">3</td>
                        </tr>
                        <tr className="border-b border-[#1a5336]/20">
                          <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Independent Study</td>
                          <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">2</td>
                        </tr>
                        <tr className="border-b border-[#1a5336]/20">
                          <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">University Prep</td>
                          <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">1</td>
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
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Cumulative GPA (4.0 scale)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70">AP/IB exam scores for credit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Official transcripts for university applications</span>
                    </li>
                  </ul>
                </div>

                {/* Homework */}
                <div className="bg-white p-8 shadow-sm">
                  <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Homework Policy</h3>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                    Expected homework: G10-11 (2 hours), G12 (2.5 hours). Includes reading, problem sets, essays, and independent research projects.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SS_TeacherEnvironment - 4 Image Gallery */}
      <section className="bg-white py-24 md:py-32" id="environment">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Teachers & Learning Environment
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              World-class facilities and expert educators create the ideal environment for academic excellence and personal growth.
            </p>
          </div>

          {/* 4 Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1705727210721-961cc64a6895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMGhpZ2glMjBzY2hvb2x8ZW58MXx8fHwxNzYzMDAxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Advanced science laboratory with modern equipment"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                State-of-the-art science labs for Physics, Chemistry, and Biology
              </p>
            </div>

            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1755053757912-a63da9d6e0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtlcnNwYWNlJTIwd29ya3Nob3AlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjMwMDE0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Makerspace with engineering and design tools"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                Innovation makerspace with 3D printers, laser cutters, and robotics
              </p>
            </div>

            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1752649936829-3d55a34689a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkaW8lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYzMDAxNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Art studio with creative workspace"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                Professional art studios for visual arts and design
              </p>
            </div>

            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758270704226-db897b180243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjMwMDE0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern collaborative classroom"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                Technology-enabled classrooms for collaborative learning
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
                    <strong>Subject specialists</strong> with advanced degrees and teaching certifications
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]">
                    <strong>Safe lab practices</strong> with certified technicians and strict protocols
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]">
                    <strong>Academic integrity</strong> emphasized through honor code and ethics education
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]">
                    <strong>Parent communication</strong> through online portals and regular conferences
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SS_Extracurricular */}
      <section className="bg-[#fffae9] py-24 md:py-32" id="activities">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Beyond the Classroom
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl mx-auto">
              Over 40 clubs, teams, and activities develop passion, leadership, and skills that set students apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Activity 1: STEM & Competition */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHJvYm90aWNzJTIwY29tcGV0aXRpb258ZW58MXx8fHwxNzYzMDAxNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students participating in robotics competition"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Beaker className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">STEM & Competition</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Robotics teams (FRC, VEX)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Science Olympiad and Math competitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Coding club and hackathons</span>
                </li>
              </ul>
            </div>

            {/* Activity 2: Debate & Leadership */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1711385532992-9d620284a943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWJhdGUlMjB0ZWFtJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzMDAxNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Debate team practicing argumentation"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Mic className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Debate & Leadership</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Model UN and debate tournaments</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Student government and leadership council</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Public speaking and TEDx Youth</span>
                </li>
              </ul>
            </div>

            {/* Activity 3: Arts & Performance */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1597591516654-72b726d644da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjMwMDE0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Theater performance on stage"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Palette className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Arts & Performance</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Theater productions and musicals</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Orchestra, band, and choir ensembles</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Visual arts exhibitions and film club</span>
                </li>
              </ul>
            </div>

            {/* Activity 4: Sports */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1747336406564-717968046260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3BvcnRzJTIwdGVhbXxlbnwxfHx8fDE3NjMwMDE0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="High school sports team"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Varsity Sports</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Basketball, soccer, volleyball, badminton</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Swimming, track & field, tennis</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Regional and national competitions</span>
                </li>
              </ul>
            </div>

            {/* Activity 5: Career Exploration */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1565688420536-11a4ddfa246f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY291bnNlbGluZyUyMGd1aWRhbmNlfGVufDF8fHx8MTc2MzAwMTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Career counseling and university guidance"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Career Exploration</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Internship programs with local companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Career days and alumni mentorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Entrepreneurship club and business plan competition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SS_StudentSupport */}
      <section className="bg-white py-24 md:py-32" id="support">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Student Support & Wellbeing
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Comprehensive support systems ensure every student thrives academically, emotionally, and socially throughout secondary school.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Academic Support */}
            <div className="bg-[#fffae9] p-8">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Academic Support</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">EAL (English as Additional Language)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Specialized support for multilingual learners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Academic language development in content areas</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">RTI & Tutoring</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Free peer and teacher tutoring sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Study skills workshops and time management</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">Enrichment & Honors</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Advanced placement and honors tracks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Independent research and mentorship programs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Panel - Wellbeing & University */}
            <div className="bg-[#fffae9] p-8">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Wellbeing & University Prep</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">Counseling & SEL</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Full-time counselors for mental health support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Stress management and mindfulness programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Peer support groups and crisis intervention</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">University Preparation</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Individual university counseling from Grade 10</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">SAT/ACT prep courses and practice tests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Essay workshops and application support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">University fairs and campus visit coordination</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Parent Partnership Note */}
          <div className="mt-8 bg-[#1a5336] p-8 text-center">
            <p className="font-['Lexend_Deca'] text-[#fffae9] mb-4">
              <strong>Parent Partnership:</strong> Regular workshops on supporting secondary students, university planning, and navigating adolescent development.
            </p>
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
            >
              <MessageCircle className="inline w-5 h-5 mr-2 mb-1" />
              Connect with Counselors
            </button>
          </div>
        </div>
      </section>

      {/* SS_TuitionPolicy */}
      <section className="bg-[#fffae9] py-24 md:py-32" id="tuition">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Tuition & What's Included
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Investing in your child's future with comprehensive Secondary education and university preparation support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Included */}
            <div className="bg-white p-8 shadow-sm">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Included in Tuition</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">All core and specialized track courses</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Textbooks, lab materials, and technology devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">University counseling and application support</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Access to all school facilities and equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Participation in clubs and most activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Academic support and tutoring services</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">School uniform (2 sets for new students)</span>
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
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">SAT/ACT test prep intensive courses</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Premium sports teams and travel costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Study abroad and exchange programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Private music lessons and art portfolio prep</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Extended care and transportation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment & Scholarship */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Payment Plans</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-4">
                Flexible payment options for families:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Annual:</strong> 5% discount for full upfront payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Semester:</strong> 2 installments per year</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Quarterly:</strong> 4 payments throughout the year</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Monthly:</strong> 10 payments (Sept–June)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Scholarships & Financial Aid</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-4">
                Supporting talented students:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Academic merit scholarships: 20-100%</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Talent scholarships in STEM, arts, athletics</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Need-based financial aid available</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Sibling discount: 10% (2nd), 15% (3rd+)</span>
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

      {/* SS_HelperFooter */}
      <section className="bg-white py-16 md:py-24">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
            Ready for Secondary Success?
          </h2>
          <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg mb-8 max-w-2xl mx-auto">
            Discover how our Secondary program prepares students for top universities and successful futures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-['Arial'] hover:bg-[#0f3a24] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Talk to an Advisor
            </button>
            <button 
              className="px-8 h-12 bg-transparent text-[#1a5336] border-2 border-[#1a5336] font-['Arial'] hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Download Program Guide
            </button>
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-transparent text-[#1a5336] border border-[#1a5336]/50 font-['Arial'] hover:border-[#1a5336] hover:bg-[#1a5336]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
