import { ChevronRight, Users, Trees, FileText, Heart, Brain, Palette, Search, Zap, Music, Beaker, Droplet, Activity, Apple, MessageCircle, DollarSign, Calculator, Send } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AcademicsKindergartenPageProps {
  onNavigate: (path: string) => void;
}

export function AcademicsKindergartenPage({ onNavigate }: AcademicsKindergartenPageProps) {
  return (
    <div className="w-full">
      {/* KG_Hero - Safe & loving environment */}
      <section 
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center bg-[#fffae9]"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.85), rgba(26, 83, 54, 0.85)), url(https://images.unsplash.com/photo-1761208664165-99a2f57e937d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBjbGFzc3Jvb20lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc2Mjk5OTAzOHww&ixlib=rb-4.1.0&q=80&w=1080)`,
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
              <li className="text-[#fffae9] font-['Lexend_Deca']">Kindergarten</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4 font-['Lexend_Deca'] uppercase tracking-wider">Ages 3-5</p>
            <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-6">
              A Safe & Loving Environment Where Learning Begins
            </h1>
            <p className="text-[#fffae9]/90 mb-8 font-['Lexend_Deca'] text-lg leading-relaxed">
              Our Kindergarten program nurtures young minds through play-based bilingual learning, developing essential social, emotional, and cognitive skills in a warm, supportive environment designed specifically for early learners.
            </p>

            {/* Stat Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">1:8</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">Teacher-Student Ratio</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <Trees className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">40%</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">Outdoor Learning Time</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-['Crimson_Pro'] text-[#fffae9] text-2xl mb-1">Bi-weekly</div>
                    <div className="font-['Lexend_Deca'] text-[#fffae9]/80 text-sm">Progress Reports</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('/contact/book-tour')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
              >
                Book a School Tour
              </button>
              <button 
                onClick={() => onNavigate('/contact/contact-us')}
                className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-['Arial'] hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
              >
                Talk to a Counselor
              </button>
              <button 
                className="px-8 h-12 bg-transparent text-[#fffae9] border border-[#fffae9]/50 font-['Arial'] hover:border-[#fffae9] hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
              >
                Download Curriculum PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* KG_WhyThisStage */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Why This Stage Matters
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg">
              The kindergarten years are critical for building foundations in learning, relationships, and self-confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Heart className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Social-Emotional Growth</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Children learn to express feelings, build friendships, and develop empathy through guided play and group activities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Brain className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Cognitive Foundation</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Early literacy, numeracy, and problem-solving skills are introduced through hands-on exploration and inquiry-based learning.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Palette className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Creative Expression</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Art, music, drama, and storytelling encourage imagination and help children communicate ideas in diverse ways.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Search className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Curiosity & Discovery</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Structured exploration time and nature-based activities foster a love of learning and scientific thinking.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#fffae9] p-8 shadow-sm hover:shadow-md transition-shadow group">
              <Zap className="w-12 h-12 text-[#FABA1E] mb-4" />
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-3">Bilingual Advantage</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                Immersive dual-language environment enhances cognitive flexibility, cultural awareness, and future language learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KG_CurriculumAreas */}
      <section className="bg-[#fffae9] py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Curriculum Areas
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Our integrated curriculum covers seven key learning areas, delivered through play-based and inquiry-driven approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Curriculum Goals & Areas */}
            <div>
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Kindergarten Learning Goals</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-8">
                By the end of Kindergarten, children will demonstrate age-appropriate skills in communication, collaboration, critical thinking, and creativity across all learning areas.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Language & Literacy</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    Phonemic awareness, letter recognition, storytelling, basic reading and writing in both languages.
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Numeracy & Math</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    Counting, number sense, patterns, shapes, measurement, and simple problem-solving.
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Social-Emotional Learning</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    Self-regulation, empathy, cooperation, conflict resolution, and emotional literacy.
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Physical Development</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    Gross and fine motor skills, balance, coordination, and healthy habits.
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Creative Arts</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    Visual arts, music, movement, drama, and creative problem-solving.
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-2">Discovery & Science</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">
                    Exploration of nature, simple experiments, observation, and inquiry skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - At-a-glance Info */}
            <div className="space-y-8">
              {/* Weekly Allocation */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">At a Glance: Weekly Time Allocation</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-[#1a5336]">
                        <th className="text-left py-3 font-['Lexend_Deca'] text-[#1a5336]">Learning Area</th>
                        <th className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">Hours/Week</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Language & Literacy</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">8</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Numeracy</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">5</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Discovery/Science</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">4</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Creative Arts</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">4</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Physical Education</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">3</td>
                      </tr>
                      <tr className="border-b border-[#1a5336]/20">
                        <td className="py-3 font-['Lexend_Deca'] text-[#1a5336]/70">Free Play & Outdoor</td>
                        <td className="text-right py-3 font-['Lexend_Deca'] text-[#1a5336]">6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Assessment & Reporting */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Assessment & Reporting</h3>
                <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-4">
                  We use observation-based, developmental assessments rather than formal testing. Parents receive:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Bi-weekly progress updates via parent portal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Formal parent-teacher conferences twice per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Portfolio of student work showcasing growth</span>
                  </li>
                </ul>
              </div>

              {/* Homework Policy */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Homework Policy</h3>
                <p className="font-['Lexend_Deca'] text-[#1a5336]/70">
                  No formal homework is assigned at the Kindergarten level. We encourage families to engage in reading together, outdoor play, and conversations about the school day to support learning at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KG_TeacherEnvironment */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Teachers & Learning Environment
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Our dedicated team creates a nurturing, safe, and stimulating space where every child feels valued.
            </p>
          </div>

          <div className="space-y-12">
            {/* Card 1: Our Teaching Team */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image + Description */}
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1761208664165-99a2f57e937d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBjbGFzc3Jvb20lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc2Mjk5OTAzOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Bright and welcoming kindergarten classroom with learning centers"
                  className="w-full aspect-[4/3] object-cover"
                />
                <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                  Bright, organized classrooms with dedicated learning zones
                </p>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Our Teaching Team</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Qualified early childhood educators</strong> with degrees in ECE or related fields
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>1:8 teacher-student ratio</strong> ensuring individualized attention for each child
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Bilingual teaching assistants</strong> supporting language immersion
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Ongoing professional development</strong> in play-based pedagogy and child development
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Learning Zones */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image + Description */}
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1630637991997-1cd9c8b41ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGxheWdyb3VuZCUyMGNoaWxkcmVufGVufDF8fHx8MTc2MjkzNTM5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Outdoor playground with age-appropriate equipment and natural elements"
                  className="w-full aspect-[4/3] object-cover"
                />
                <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                  Outdoor play areas with nature exploration zones
                </p>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Learning Zones</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Reading corner</strong> with age-appropriate books in both languages
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>STEAM exploration area</strong> with building blocks, puzzles, and manipulatives
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Creative arts station</strong> for painting, drawing, and crafts
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Dramatic play area</strong> for role-play and social interaction
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Health & Safety */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image + Description */}
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1585247411924-f1c8286ce3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHdhc2hpbmclMjBoYW5kcyUyMGh5Z2llbmV8ZW58MXx8fHwxNzYyOTk5MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Children practicing proper hygiene and health routines"
                  className="w-full aspect-[4/3] object-cover"
                />
                <p className="font-['Lexend_Deca'] text-[#1a5336]/60 text-sm mt-2">
                  Dedicated hygiene stations and health routines
                </p>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Health & Safety</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Daily health checks</strong> and strict hygiene protocols
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Nurse on-site</strong> during school hours
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-['Lexend_Deca'] text-[#1a5336]">
                        <strong>Parent communication app</strong> with real-time updates and photos
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KG_Extracurricular */}
      <section className="bg-[#fffae9] py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Beyond the Classroom
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl mx-auto">
              Enrichment activities that make learning joyful and build confidence through exploration and play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1719634689927-58ec6baf0f0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbXVzaWMlMjBtb3ZlbWVudHxlbnwxfHx8fDE3NjI5OTkwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Children engaged in music and movement activities"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Music className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Music & Movement</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Rhythm and dance sessions twice weekly</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Simple instruments and singing in both languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Develops coordination and self-expression</span>
                </li>
              </ul>
            </div>

            {/* Activity 2 */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1695982001385-c3197431a4cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMFNURUFNJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYyOTk5MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Young children exploring STEAM activities with hands-on materials"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Beaker className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Mini Maker / STEAM</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Age-appropriate building and tinkering projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Simple science experiments and observations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Encourages curiosity and problem-solving</span>
                </li>
              </ul>
            </div>

            {/* Activity 3 */}
            <div className="bg-white p-6 shadow-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1504489969124-eb0e46a5f482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheWluZyUyMHdhdGVyJTIwc2FuZHxlbnwxfHx8fDE3NjI5OTkwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Children playing with water and sand in sensory play area"
                className="w-full aspect-[16/9] object-cover mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Droplet className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Water & Sand Play</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Sensory exploration and fine motor development</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Concepts of volume, texture, and cause-effect</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Calming and therapeutic for young learners</span>
                </li>
              </ul>
            </div>

            {/* Activity 4 */}
            <div className="bg-white p-6 shadow-sm">
              <div className="w-full aspect-[16/9] bg-[#fffae9] flex items-center justify-center mb-4">
                <Activity className="w-16 h-16 text-[#FABA1E]" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Yoga & Mindfulness</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Simple poses and breathing exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Supports emotional regulation and focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Builds body awareness and calm</span>
                </li>
              </ul>
            </div>

            {/* Activity 5 */}
            <div className="bg-white p-6 shadow-sm">
              <div className="w-full aspect-[16/9] bg-[#fffae9] flex items-center justify-center mb-4">
                <Search className="w-16 h-16 text-[#FABA1E]" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Search className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Field Trips</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Monthly visits to parks, farms, or cultural sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Real-world learning beyond the classroom</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Builds social skills and widens horizons</span>
                </li>
              </ul>
            </div>

            {/* Activity 6 */}
            <div className="bg-white p-6 shadow-sm">
              <div className="w-full aspect-[16/9] bg-[#fffae9] flex items-center justify-center mb-4">
                <Heart className="w-16 h-16 text-[#FABA1E]" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-[#FABA1E]" />
                <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336]">Cultural Festivals</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Celebrating Vietnamese and international traditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Performances, crafts, and storytelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Fosters cultural awareness and pride</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KG_StudentSupport */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Student Support & Wellbeing
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              We provide comprehensive support to ensure every child thrives emotionally, physically, and academically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - EAL & Speech */}
            <div className="bg-[#fffae9] p-8">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Language & Development Support</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">EAL (English as Additional Language)</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-3">
                    For children new to English, we offer:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Small-group language instruction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Visual aids and bilingual support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Progress monitoring and parent coaching</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">Speech & Language Screening</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-3">
                    All Kindergarten students receive:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Initial screening in the first month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Referral to specialists if needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">In-class articulation activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Panel - Health & Emotional */}
            <div className="bg-[#fffae9] p-8">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Health & Emotional Support</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">Separation Anxiety & Adjustment</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-3">
                    We understand that starting school can be challenging. Our approach includes:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Gradual entry program for new students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Comfort items from home are welcomed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Daily communication with parents during transition</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Crimson_Pro'] text-[#1a5336] mb-3">Nutrition & Allergy Management</h4>
                  <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-3">
                    Keeping your child safe and healthy:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Nutritious snacks provided daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Allergy-aware environment with strict protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Staff trained in EpiPen and emergency response</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Parent Workshops Note */}
          <div className="mt-8 bg-[#1a5336] p-8 text-center">
            <p className="font-['Lexend_Deca'] text-[#fffae9] mb-4">
              <strong>Parent Workshops:</strong> We host monthly sessions on topics like positive discipline, bilingual parenting, and kindergarten readiness to support families.
            </p>
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
            >
              <MessageCircle className="inline w-5 h-5 mr-2 mb-1" />
              Talk to Our Counselor
            </button>
          </div>
        </div>
      </section>

      {/* KG_TuitionPolicy */}
      <section className="bg-[#fffae9] py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
              Tuition & What's Included
            </h2>
            <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg max-w-3xl">
              Transparent pricing with everything your child needs for a complete Kindergarten experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Included */}
            <div className="bg-white p-8 shadow-sm">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Included in Tuition</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">All core curriculum and bilingual instruction</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Daily healthy snacks and drinking water</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Learning materials, books, and supplies</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Music & Movement, Yoga, and STEAM classes</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Monthly field trips and cultural celebrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Progress reports and parent-teacher conferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Access to parent portal and communication app</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">School uniform (first set)</span>
                </li>
              </ul>
            </div>

            {/* Optional */}
            <div className="bg-white p-8 shadow-sm">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-6">Optional Add-Ons</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Extended care (before/after school)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Hot lunch program</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Swimming lessons (off-site)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Private language tutoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Summer camp enrollment</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#1a5336]/30 flex-shrink-0 mt-0.5" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70">Transportation service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment & Refund */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Payment Options</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-4">
                We offer flexible payment plans to support families:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Annual:</strong> 5% discount for full payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Semester:</strong> 2 installments (Sept & Feb)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Quarterly:</strong> 4 installments throughout the year</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm"><strong>Monthly:</strong> 10 payments (Sept-June)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <h3 className="font-['Crimson_Pro'] text-[24px] font-bold text-[#1a5336] mb-4">Refund Policy</h3>
              <p className="font-['Lexend_Deca'] text-[#1a5336]/70 mb-4">
                We understand that circumstances change:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Withdrawal before Sept 1: 100% refund minus registration fee</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Within first month: 50% refund of unused tuition</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">After first month: No refund, but can transfer to sibling</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className="font-['Lexend_Deca'] text-[#1a5336]/70 text-sm">Medical/relocation: Considered case-by-case</span>
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

      {/* KG_HelperFooter */}
      <section className="bg-white py-16 md:py-24">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-['Crimson_Pro'] text-[48px] font-bold text-[#1a5336] mb-4">
            Ready to Learn More?
          </h2>
          <p className="font-['Lexend_Deca'] text-[#1a5336]/70 text-lg mb-8 max-w-2xl mx-auto">
            We'd love to show you our Kindergarten classrooms in person and answer any questions about your child's journey with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/contact/book-tour')}
              className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-['Arial'] hover:bg-[#0f3a24] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Schedule a Tour
            </button>
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-transparent text-[#1a5336] border-2 border-[#1a5336] font-['Arial'] hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Chat with Us
            </button>
            <button 
              className="px-8 h-12 bg-transparent text-[#1a5336] border border-[#1a5336]/50 font-['Arial'] hover:border-[#1a5336] hover:bg-[#1a5336]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] focus:ring-offset-2"
            >
              Download PDF Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
