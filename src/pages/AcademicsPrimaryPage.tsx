import { ChevronRight, Users, BookOpen, Clock, Brain, Globe, Target, Lightbulb, Users2, Heart, Beaker, Palette, Trophy, Book, Plane, MessageCircle, DollarSign, Calculator, Send, Award, Languages } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import hero from '../assets/hero-aca.jpg'
import hero1 from '../assets/aca-secstion.jpg';
interface AcademicsPrimaryPageProps {
  onNavigate: (path: string) => void;
}

export function AcademicsPrimaryPage({ onNavigate }: AcademicsPrimaryPageProps) {
  return (
    <div className="w-full">
      {/* PR_Hero - Joy of Learning – A Solid Foundation */}
      <section 
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center bg-[#fffae9]"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.85), rgba(26, 83, 54, 0.85)), url(${hero}`,
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
              <li className="text-[#fffae9] font-['Lexend_Deca']">Primary</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4 font-['Lexend_Deca'] uppercase tracking-wider">Grades 1-5 | Ages 6-11</p>
            <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-6">
              The Joy of Learning – A Solid Foundation
            </h1>
            <p className="text-[#fffae9]/90 mb-8 font-['Lexend_Deca'] text-lg leading-relaxed">
              Our Primary program develops confident, curious learners through inquiry-based bilingual education, building essential literacy, numeracy, and critical thinking skills while fostering creativity and global citizenship.
            </p>

            {/* Stat Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">1:15</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">Max Class Size</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">120+</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">Teacher PD Hours/Year</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">60 min</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">Daily Reading Time</div>
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
                onClick={() => onNavigate('/contact/book-tour')}
                className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-['Arial'] hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
              >
                Book a School Tour
              </button>
              <button 
                onClick={() => onNavigate('/contact/contact-us')}
                className="px-8 h-12 bg-transparent text-[#fffae9] border border-[#fffae9]/50 font-['Arial'] hover:border-[#fffae9] hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
              >
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PR_WhyThisStage */}
      <section className="bg-white py-24 md:py-32" id="why">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Why This Stage Matters
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg">
              Primary school years are when children develop the foundational skills, mindsets, and confidence that shape their entire educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Brain className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Critical Thinking</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Students learn to question, analyze, and solve problems across all subjects through inquiry-based learning.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Globe className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Bilingual Fluency</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Immersive dual-language instruction builds strong literacy in both English and Vietnamese across all content areas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Target className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Academic Excellence</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Rigorous curriculum aligned with international standards prepares students for secondary success and beyond.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Lightbulb className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Creativity & Innovation</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Project-based learning and maker spaces encourage students to design, create, and iterate on original ideas.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Users2 className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Collaboration Skills</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Group projects and peer learning build teamwork, communication, and leadership abilities.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Heart className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Character Development</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Social-emotional learning and values education develop empathy, integrity, and responsible citizenship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PR_CurriculumAreas */}
      <section className="bg-[#fffae9] py-24 md:py-32" id="curriculum">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Curriculum Areas
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Our comprehensive curriculum balances academic rigor with creativity, inquiry, and real-world application across eight core learning areas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Goals & Methods */}
            <div>
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Learning Goals & Methods</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Core Academic Mastery</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    Students develop strong foundations in literacy, numeracy, science, and social studies through differentiated instruction.
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Inquiry-Based Learning</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    Students ask questions, investigate, and discover knowledge through hands-on exploration and research projects.
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Project-Based Learning</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    Cross-curricular projects integrate multiple subjects and develop deep understanding through authentic challenges.
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Differentiated Instruction</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    Teachers adapt content, process, and products to meet each student's readiness, interests, and learning profile.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Weekly Allocation & Policies */}
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
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Literacy (English & Vietnamese)</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">10</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Mathematics</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">6</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Science & STEAM</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">5</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Social Studies</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">3</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Arts (Visual & Performing)</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">3</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Physical Education</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Assessment & Reporting */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Assessment & Reporting</h3>
                <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-4">
                  We use multiple assessment methods to track progress and inform instruction:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Formative assessments and exit tickets daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Standards-based report cards quarterly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Parent-teacher conferences twice yearly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Digital portfolios showcasing student work</span>
                  </li>
                </ul>
              </div>

              {/* Homework Policy */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Homework Policy</h3>
                <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                  Homework is purposeful and age-appropriate: G1-2 (20 min), G3-4 (30 min), G5 (45 min). Focus is on reading, review, and occasional projects—never busy work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PR_TeacherEnvironment */}
      <section className="bg-white py-24 md:py-32" id="environment">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Teachers & Learning Environment
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Our expert educators create engaging, inclusive classrooms where every student feels challenged and supported.
            </p>
          </div>

          <div className="space-y-12">
            {/* Card 1: Teaching Excellence */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image + Description */}
              <div>
                <ImageWithFallback 
                  src={hero}
                  alt="Modern primary classroom with collaborative learning spaces"
                  className="w-full aspect-[4/3] object-cover"
                />
                <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                  Flexible learning spaces designed for collaboration and independent work
                </p>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Teaching Excellence</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Certified educators</strong> with degrees in primary education and subject specializations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Co-teaching model</strong> in all core subjects with bilingual support
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>120+ hours</strong> of professional development annually in best practices
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Low class sizes</strong> (max 15 students) ensure individualized attention
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Specialized Spaces */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image + Description */}
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1705727210721-961cc64a6895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVtZW50YXJ5JTIwc2Nob29sJTIwc2NpZW5jZSUyMGxhYnxlbnwxfHx8fDE3NjMwMDA2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Science laboratory with hands-on equipment for elementary students"
                  className="w-full aspect-[4/3] object-cover"
                />
                <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                  Dedicated science labs for hands-on experimentation
                </p>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Specialized Learning Spaces</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Science laboratory</strong> equipped for experiments and inquiry investigations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Maker space</strong> with 3D printer, robotics kits, and building materials
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Library media center</strong> with 10,000+ bilingual books and digital resources
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Outdoor learning garden</strong> for environmental education and science
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Safety & Communication */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image + Description */}
              <div>
                <ImageWithFallback 
                  src={hero1}
                  alt="Library with children engaged in reading and research"
                  className="w-full aspect-[4/3] object-cover"
                />
                <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                  Welcoming library spaces foster a love of reading
                </p>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Safety & Communication</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Secure campus</strong> with controlled access and on-site medical staff
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Parent portal</strong> with weekly updates, photos, and real-time communication
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Technology integration</strong> with 1:1 devices for grades 3-5
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Emergency protocols</strong> with regular drills and staff training
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PR_Extracurricular */}
      <section className="bg-[#fffae9] py-24 md:py-32" id="activities">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Beyond the Classroom
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl mx-auto">
              Enrichment programs that develop well-rounded students through exploration, creativity, and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Activity 1: STEM */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1603354350266-a8de3496163b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMFNURU0lMjByb2JvdGljc3xlbnwxfHx8fDE3NjMwMDA2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students working with robotics and STEM equipment"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Beaker className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">STEM & Robotics</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Coding and programming fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Robotics competitions and challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Engineering design projects</span>
                </li>
              </ul>
            </div>

            {/* Activity 2: Arts */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1629822908853-b1d2a39ece98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0JTIwY2xhc3MlMjBwYWludGluZ3xlbnwxfHx8fDE3NjMwMDA2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Children creating art in a colorful studio environment"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Palette className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Visual & Performing Arts</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Choir, band, and music ensembles</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Drama productions and public speaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Visual arts studio and exhibitions</span>
                </li>
              </ul>
            </div>

            {/* Activity 3: Sports */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1611812695617-76998c1898af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNwb3J0cyUyMHNvY2NlcnxlbnwxfHx8fDE3NjMwMDA2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Children playing soccer and team sports"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Sports & Athletics</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Soccer, basketball, and volleyball teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Swimming and martial arts programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Inter-school competitions</span>
                </li>
              </ul>
            </div>

            {/* Activity 4: Reading & Languages */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1549737221-bef65e2604a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcmVhZGluZyUyMGJvb2tzfGVufDF8fHx8MTc2MjkzMTg3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Children engaged in reading and literacy activities"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Book className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Reading & Languages</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Book clubs and reading challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Creative writing workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Additional language options (Mandarin, French)</span>
                </li>
              </ul>
            </div>

            {/* Activity 5: Field Trips & Service */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1729799959058-bda08177a84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBmaWVsZCUyMHRyaXAlMjBtdXNldW18ZW58MXx8fHwxNzYzMDAwNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students on educational field trip to museum"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Plane className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Field Trips & Service</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Monthly trips to museums, farms, cultural sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Community service projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Grade 5 residential learning camp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PR_StudentSupport */}
      <section className="bg-white py-24 md:py-32" id="support">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Student Support & Wellbeing
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Comprehensive support services ensure every student can thrive academically, emotionally, and socially.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - EAL & RTI */}
            <div className="bg-[#fffae9] p-8">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Academic Support</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">EAL (English as Additional Language)</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-3">
                    Specialized support for students developing English proficiency:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Pull-out sessions 3-5 times weekly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Scaffolded instruction in content areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Progress monitoring with WIDA assessments</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">RTI (Response to Intervention)</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-3">
                    Multi-tiered support for students needing additional help:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Reading and math intervention specialists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Small group targeted instruction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Referrals to specialists when needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Panel - Enrichment & Counseling */}
            <div className="bg-[#fffae9] p-8">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Enrichment & Wellbeing</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">Gifted & Talented Enrichment</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-3">
                    Advanced learning opportunities for high-achieving students:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Differentiated curriculum and extension projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Acceleration options in math and language arts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Mentorship and competition opportunities</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">Counseling & SEL</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-3">
                    Social-emotional learning and mental health support:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Full-time school counselor for all students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Weekly SEL lessons in every classroom</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Peer mediation and conflict resolution programs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Parent Workshops Note */}
          <div className="mt-8 bg-[#1a5336] p-8 text-center">
            <p className="font-['Lexend_Deca'] text-[#fffae9] mb-4">
              <strong>Parent Partnership:</strong> Monthly workshops on supporting learning at home, understanding child development, and navigating Primary years with confidence.
            </p>
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
            >
              <MessageCircle className="inline w-5 h-5 mr-2 mb-1" />
              Connect with Support Team
            </button>
          </div>
        </div>
      </section>

      {/* PR_TuitionPolicy */}
      <section className="bg-[#fffae9] py-24 md:py-32" id="tuition">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Tuition & What's Included
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Comprehensive education with transparent pricing. Your investment covers everything needed for Primary success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Included */}
            <div className="bg-white p-8 shadow-sm">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Included in Tuition</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">All core subjects and bilingual instruction</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Textbooks, workbooks, and learning materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Art, music, PE, and library access</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Technology devices (G3-5) and STEM equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Field trips (up to 8 per year)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">After-school enrichment sampler sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Parent portal and digital progress reports</span>
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
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Extended care (7am–6pm)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Hot lunch program (daily or weekly)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Premium after-school clubs (sports, STEM, arts)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Additional language lessons (Mandarin, French)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Private tutoring (academic support or enrichment)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">School bus transportation</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Grade 5 residential camp (additional fee)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment & Scholarship */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Payment Plans</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-4">
                Flexible options to support family budgets:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Annual:</strong> 5% discount for full payment upfront</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Semester:</strong> 2 installments (September & February)</span>
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
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Scholarships & Refunds</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-4">
                Financial assistance and policies:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Merit scholarships: 10-50% for academic excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Need-based aid: Apply through financial aid office</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Sibling discount: 10% for 2nd child, 15% for 3rd+</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Withdrawal policy: Prorated refund within first semester</span>
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
              className="px-8 h-12 bg-transparent text-[#1a5336] border-2 border-[#1a5336] font-['Arial'] hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              <Calculator className="inline w-5 h-5 mr-2 mb-1" />
              Tuition Calculator
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

      {/* PR_HelperFooter */}
      <section className="bg-white py-16 md:py-24">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
            Ready to Explore Primary?
          </h2>
          <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg mb-8 max-w-2xl mx-auto">
            Visit our campus, meet our teachers, and see how we prepare Primary students for lifelong success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/contact/book-tour')}
              className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-['Arial'] hover:bg-[#0f3a24] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Schedule a Campus Tour
            </button>
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-transparent text-[#1a5336] border-2 border-[#1a5336] font-['Arial'] hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Chat with Admissions
            </button>
            <button 
              className="px-8 h-12 bg-transparent text-[#1a5336] border border-[#1a5336]/50 font-['Arial'] hover:border-[#1a5336] hover:bg-[#1a5336]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Download Program Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
