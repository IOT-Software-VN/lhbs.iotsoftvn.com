import { ChevronRight, Check, Clock, Users, Globe, Heart, BookOpen, Paintbrush, Music, Activity, Utensils, Moon, Sparkles, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AcademicsKindergartenPageProps {
  onNavigate: (path: string) => void;
}

export function AcademicsKindergartenPage({ onNavigate }: AcademicsKindergartenPageProps) {
  return (
    <div className="w-full ">
      {/* 1. HERO SECTION - KINDERGARTEN */}
      <section 
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.8), rgba(26, 83, 54, 0.8)), url(https://lhbs.edu.vn/wp-content/uploads/2022/10/Da-ngoai-Mam-non-Song-ngu-Lac-Hong-1.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative w-full max-w-screen-xl mx-auto px-6 md:px-12 py-24 md:py-32">
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
              <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
              <li>
                <button 
                  onClick={() => onNavigate('/academics/overview')}
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                >
                  Academics
                </button>
              </li>
              <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
              <li className="text-[#fffae9] ">Kindergarten</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4  uppercase tracking-wider text-sm">
              ACADEMIC • KINDERGARTEN
            </p>
            <h1 
              className="font-['SVN-Gotham'] text-white mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              A nurturing start for lifelong learning
            </h1>
            <p className="text-[#fffae9]/90 mb-8  text-lg leading-relaxed max-w-2xl">
              At LHBS Kindergarten, we provide a modern bilingual programme that nurtures young minds holistically—developing virtue, intellect, physical wellbeing, and aesthetic appreciation in a joyful, caring environment where every child can thrive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('/admissions/apply-now')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
              >
                Apply Now
              </button>
              <button 
                onClick={() => onNavigate('/contact/book-tour')}
                className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover: hover:text-[#1a5336] transition-colors"
              >
                Book a Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR KINDERGARTEN CURRICULUM */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Our Kindergarten Curriculum
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                Our comprehensive programme follows the Vietnam Ministry of Education and Training (MOET) early childhood curriculum, enriched with international pedagogical innovations. We focus on holistic development—nurturing body, mind, and character—through play-based, inquiry-driven learning experiences.
              </p>

              {/* Curriculum Areas Checklist */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className=" text-[#1a5336] mb-1">Physical development</h3>
                    <p className=" text-[#1a5336]/70 text-sm">Health, movement skills, outdoor play, and motor coordination</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className=" text-[#1a5336] mb-1">Cognitive development & early numeracy</h3>
                    <p className=" text-[#1a5336]/70 text-sm">Thinking skills, problem-solving, numbers, patterns, and logic</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className=" text-[#1a5336] mb-1">Language development & bilingual communication</h3>
                    <p className=" text-[#1a5336]/70 text-sm">Vietnamese and English fluency through immersive activities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className=" text-[#1a5336] mb-1">Social–emotional development</h3>
                    <p className=" text-[#1a5336]/70 text-sm">Respect, empathy, self-confidence, and collaboration</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className=" text-[#1a5336] mb-1">Aesthetic & creative development</h3>
                    <p className=" text-[#1a5336]/70 text-sm">Art, music, dance, drama, and creative expression</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className=" text-[#1a5336] mb-1">Life skills & independence</h3>
                    <p className=" text-[#1a5336]/70 text-sm">Self-care, decision-making, and practical daily routines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2022/10/Da-ngoai-Mam-non-Song-ngu-Lac-Hong-2.jpg"
                alt="Children engaged in learning activities in a bright kindergarten classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. INNOVATIVE ENGLISH & PHONICS PROGRAMME */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2022/10/Da-ngoai-Mam-non-Song-ngu-Lac-Hong-3.jpg"
                alt="Children learning English through interactive phonics activities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Innovative English and Phonics Programme
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Children learn English naturally through play, real-life topics, and immersive activities. Our experienced foreign and Vietnamese teachers work together to create engaging lessons that make language learning enjoyable and effective.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed">
                The programme is carefully tailored to each child's learning pace, building strong pronunciation, listening, and speaking skills from the earliest years. Through songs, stories, games, and daily conversations, children develop confidence and fluency in English alongside their native Vietnamese.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEDICATED AND EXPERIENCED TEACHERS */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Dedicated and experienced teachers
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Our kindergarten teachers are highly qualified, caring professionals with extensive experience in early childhood education. They understand young learners' developmental needs and create warm, supportive classroom environments where children feel safe to explore and grow.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed">
                We maintain regular communication with parents through meetings, daily messages, photo updates, and detailed progress reports. Teachers share observations, celebrate milestones, and work closely with families to ensure every child receives the support they need to flourish.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/03/429931205_384895710839242_744982184744869447_n.jpg"
                alt="Teacher engaging with kindergarten students in classroom activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PERSONALISED LEARNING FOR EVERY CHILD */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2022/10/Da-ngoai-Mam-non-Song-ngu-Lac-Hong-6.jpg"
                alt="Teacher providing individual attention to a young student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Personalised learning for every child
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                We recognize that every child is unique, with individual strengths, interests, and learning styles. Our teachers carefully observe each child and design activities that match their developmental stage and spark their natural curiosity.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed">
                Through personalized education, we cultivate individual talents, encourage creative thinking, and build essential life skills and independence. Children learn at their own pace in a supportive environment that celebrates their progress and nurtures their confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. A TYPICAL DAY AT LHBS KINDERGARTEN */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              A typical day at LHBS Kindergarten
            </h2>
            <p className=" text-[#212121] text-lg max-w-3xl mx-auto">
              From arrival to home time, children learn through play in a safe and joyful full-day environment designed to nurture curiosity, creativity, and a love of learning.
            </p>
          </div>

          {/* Cards with Timeline */}
          <div className="relative overflow-hidden">
            {/* Timeline Cards - Horizontal scrollable layout */}
            <div className="flex gap-6 mb-16 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              {/* Card 1: Early Morning Arrival */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 flex-shrink-0 w-[280px]">
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src="https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/ks3-3111zon.jpg?h=3986&iar=0&w=5976&rev=bd0f178b43d041a2bc0dc98d120a8be7&extension=webp&hash=02A588539A379C0E44C2B399583C2B51"
                    alt="Children arriving at school in the morning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-3">
                    Early birds
                  </h3>
                  <p className="text-[#212121]/70 text-sm leading-relaxed">
                    Our students arrive at 8:30am and spend time with their tutor or study personal, social, health, and economic (PSHE) education. Regular whole-school celebration assemblies give our students a huge boost, ensuring they start the day on a positive note.
                  </p>
                </div>
              </div>

              {/* Card 2: Morning Learning */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 flex-shrink-0 w-[280px]">
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src="https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/ks3-3211zon.jpg?h=4507&iar=0&w=6758&rev=78ef55189bac4109a4542ffa03604eb2&extension=webp&hash=E63E12FC839D4C8D9A19B14FE057B54A"
                    alt="Students engaged in morning learning activities"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-3">
                    Design your morning
                  </h3>
                  <p className="text-[#212121]/70 text-sm leading-relaxed">
                    Fresh ideas are brainstormed and tricky challenges tackled in our STEAM rooms, equipped with the latest equipment in design technology. A whole computer suite helps our students to complete a 3D design which can be laser-cut in a matter of minutes!
                  </p>
                </div>
              </div>

              {/* Card 3: Lunch & Social Time */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 flex-shrink-0 w-[280px]">
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src="https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/ks3-3311zon.jpg?h=4412&iar=0&w=6616&rev=caf134b818834447ac1a7cdfa6fb4a57&extension=webp&hash=3C13EC74475348D2D05D3788D4AA974E"
                    alt="Children enjoying healthy lunch together"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-3">
                    Healthy food
                  </h3>
                  <p className="text-[#212121]/70 text-sm leading-relaxed">
                    At lunchtime, fresh, nutritious, and delicious Asian and Western meals are prepared onsite for students to enjoy with their friends.
                  </p>
                </div>
              </div>

              {/* Card 4: Afternoon Activities */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 flex-shrink-0 w-[280px]">
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src="https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/ks3-34.jpg?h=3824&iar=0&w=5734&rev=7e7308b6c26342caa118a88297460227&extension=webp&hash=515D85938E836B86879A433274D09E97"
                    alt="Students learning through movement and arts"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-3">
                    Learning through movement
                  </h3>
                  <p className="text-[#212121]/70 text-sm leading-relaxed">
                    It's not all a flute, piano, or guitar class or creative dance session! The performing arts is enhanced by our expert colleagues from Juilliard School, who deliver innovative sessions in our fabulous purpose-built studio.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Navigation with connecting lines */}
            <div className="relative px-[140px]">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-[140px] right-[140px] h-0.5 bg-[#1a5336]/20 transform -translate-y-1/2"></div>
              
              {/* Vertical connecting lines from cards to timeline */}
              <div className="absolute top-[-40px] left-[140px] w-0.5 h-12 bg-[#1a5336]/30"></div>
              <div className="absolute top-[-40px] left-[426px] w-0.5 h-12 bg-[#FABA1E]/60"></div>
              <div className="absolute top-[-40px] left-[712px] w-0.5 h-12 bg-[#1a5336]/30"></div>
              <div className="absolute top-[-40px] left-[998px] w-0.5 h-12 bg-[#FABA1E]/60"></div>
              
              {/* Timeline Dots with exact positioning */}
              <div className="flex justify-between items-center relative">
                <div className="w-4 h-4 bg-[#1a5336] rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="w-4 h-4 bg-[#FABA1E] rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="w-4 h-4 bg-[#1a5336] rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="w-4 h-4 bg-[#FABA1E] rounded-full border-4 border-white shadow-lg relative z-10"></div>
              </div>
              
              {/* Timeline Labels */}
              <div className="flex justify-between mt-4">
                <div className="text-center">
                  <p className="text-[#1a5336] text-sm font-bold">8:30 AM</p>
                  <p className="text-[#212121]/60 text-xs">Arrival</p>
                </div>
                <div className="text-center">
                  <p className="text-[#1a5336] text-sm font-bold">9:00 AM</p>
                  <p className="text-[#212121]/60 text-xs">Learning</p>
                </div>
                <div className="text-center">
                  <p className="text-[#1a5336] text-sm font-bold">12:00 PM</p>
                  <p className="text-[#212121]/60 text-xs">Lunch</p>
                </div>
                <div className="text-center">
                  <p className="text-[#1a5336] text-sm font-bold">2:00 PM</p>
                  <p className="text-[#212121]/60 text-xs">Activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. A SUPPORTIVE PARTNERSHIP WITH OUR PARENTS */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                A supportive partnership with our parents
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                At LHBS, we see parents as essential partners in their child's educational journey. Strong home-school collaboration ensures consistent support and helps children thrive both in and out of the classroom.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed">
                We maintain open communication through our Parent Handbook, regular meetings, a dedicated hotline, online portals for updates, school events, and frequent messages about each child's activities and progress. Parents are always welcome to connect with teachers, ask questions, and participate in school life.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/03/428707223_384782534183893_4931832570144914514_n.jpg"
                alt="Parent and teacher collaborating during a school meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRANSITIONING TO PRIMARY SCHOOL */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/03/429926235_384893624172784_5003837416810017032_n.jpg"
                alt="Kindergarten students prepared and ready for primary school transition"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Transitioning to primary school
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                We carefully prepare kindergarten students for a smooth transition to Grade 1 through structured daily routines, life skills development, and pre-academic readiness activities that build confidence and independence.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed">
                Our Summer Bridge Program—Grade 1 Readiness initiative and close connection with LHBS Primary School ensure children feel excited and well-prepared for the next step in their learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA BLOCK - TWO TILES */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tile 1: Discover our Kindergarten pathway */}
            <div className="bg-[#1a5336] p-12 flex flex-col justify-between">
              <div>
                <h3 className="font-['SVN-Gotham'] text-3xl text-[#fffae9] mb-4">
                  Discover our Kindergarten pathway
                </h3>
                <p className=" text-[#fffae9]/90 text-lg mb-8 leading-relaxed">
                  Learn more about our full Kindergarten programme, tuition fees, admissions process, and how we nurture young learners from ages 3 to 5.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('/academics/kindergarten')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors self-start"
              >
                Explore Kindergarten programme
              </button>
            </div>

            {/* Tile 2: Our facilities */}
            <div className="bg-white border-2 border-[#1a5336] p-12 flex flex-col justify-between">
              <div>
                <h3 className="font-['SVN-Gotham'] text-3xl text-[#1a5336] mb-4">
                  Our facilities – An environment made for learning
                </h3>
                <p className=" text-[#212121]/70 text-lg mb-8 leading-relaxed">
                  Explore our safe, modern, and spacious campus featuring playgrounds, swimming pool, library, canteen, medical care, and bus service.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('/our-school/facilities')}
                className="px-8 h-12 bg-transparent border-2 border-[#1a5336] text-[#1a5336] font-bold hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors self-start"
              >
                Explore our campus
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
