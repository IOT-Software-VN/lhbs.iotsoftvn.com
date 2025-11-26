import { ChevronRight, Check, Clock, Users, Globe, Heart, BookOpen, Paintbrush, Music, Activity, Utensils, Moon, Sparkles, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent } from '../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../components/ui/carousel';

interface AcademicsKindergartenPageProps {
  onNavigate: (path: string) => void;
}

export function AcademicsKindergartenPage({ onNavigate }: AcademicsKindergartenPageProps) {
  // Daily activities data
  const dailyActivities = [
  {
    id: 1,
    title: "First things first",
    description:
      "When our Early Years students arrive at school at 8:30am, they enjoy a quick warm-up activity to get ready for the day ahead. These range from building Dong Nai next skyscraper with our range of play equipment to becoming whoever they want in our role-play area.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(4).jpg?h=4000&iar=0&w=6000&rev=3eb563f8079645d0b5c7ee7ec1d8acda&extension=webp&hash=7CF74FAF838DCCF306526D9F7B2A908A",
    alt: "Children building blocks in play area",
    timeLabel: "Morning arrival",
    timelineColor: "#1A5336",
    backgroundColor: "#E8F5E8", // Light green
  },
  {
    id: 2,
    title: "Music in the morning",
    description:
      "It's time to listen to the melodies of traditional songs and express themselves using a range of instruments! This develops their communication, language, and physical skills through creative play.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(5).jpg?h=4000&iar=0&w=6000&rev=33d45eb048f140ddb46c7e46e4b8f161&extension=webp&hash=3649DA0EDBEB8F7EB05AB7C2EBF92E48",
    alt: "Children wearing pirate hats playing music",
    timeLabel: "Morning music",
    timelineColor: "#FABA1E",
    backgroundColor: "#ffcb00", // Light yellow
  },
  {
    id: 3,
    title: "Healthy eating",
    description:
      "At lunchtime, fresh, nutritious, and delicious Asian and Western meals are prepared onsite for students to enjoy with their friends.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/dsc03911_11zon/33-eyfs11zon/dsc03897_11zon.jpg?h=5065&iar=0&w=7594&rev=7bd0a9ff989d4c3f966eed75045762d6&extension=webp&hash=6513642867256C811423751D51655AF4",
    alt: "Child having lunch happily at school",
    timeLabel: "Lunch time",
    timelineColor: "#1A5336",
    backgroundColor: "#F0FDF4", // Very light green
  },
  {
    id: 4,
    title: "Continuing the learning journey",
    description:
      "An afternoon of inside and outside play, with teacher-led and student-initiated activities, helps develop our children's interests and passions. Before home time, our students settle down for a thought-provoking story.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(3).jpg?h=4158&iar=0&w=6234&rev=65e1c9b4f5ec464590dcaf0fabfe74a7&extension=webp&hash=79B3720A41ED262F520F77A1A7CBAC46",
    alt: "Students learning and playing in classroom",
    timeLabel: "Afternoon learning",
    timelineColor: "#FABA1E",
    backgroundColor: "#ffcb00", // Very light orange/yellow
  },
  {
    id: 5,
    title: "After school",
    description:
      "After another busy day of learning, fun, and discovery, our little learners return home at 3:05 pm on the school bus. Alternatively, they can continue to do what they love at specially designed EYFS after-school clubs.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/early-year-3511zon.jpg?h=6240&iar=0&w=4162&rev=2c0b6a46fb804d5cb089bf6b31c6c80c&extension=webp&hash=4A853B427858573CD456248656D18F10",
    alt: "Children dancing in after-school ballet class",
    timeLabel: "After school",
    timelineColor: "#FABA1E",
    backgroundColor: "#FEF7ED", // Very light peach
  },
];


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
              <li className="text-[#fffae9] ">Galaxy KG</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4  uppercase tracking-wider text-sm">
              ACADEMIC • GALAXY KG
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
      <section className="bg-[#FAF5ED] py-24 md:py-32">
        <div className="w-full !mr-0 max-w-screen-2xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Title & Description - 30% width */}
            <div className="lg:col-span-4 my-auto">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                A typical day at LHBS Kindergarten
              </h2>
              <p className="text-[#212121] font-medium text-lg">
                From arrival to home time, children learn through play in a safe and joyful full-day environment designed to nurture curiosity, creativity, and a love of learning.
              </p>
            </div>

            {/* Right Column: Carousel - 70% width */}
            <div className="lg:col-span-8 relative">
              <Carousel className="relative" style={{ overflow: 'initial' }}>
                <CarouselContent className="-ml-6" style={{ overflow: 'initial' }}>
                  {dailyActivities.map((activity, index) => (
                    <CarouselItem key={activity.id} className="pl-6 basis-auto" style={{ overflow: 'initial' }}>
                      {/* Card with higher z-index */}
                      <div className="relative z-20" style={{ overflow: 'initial' }}>
                        <Card className="bg-white shadow-lg border border-gray-200 w-[374px] h-[457px] overflow-hidden">
                          <CardContent className="p-0 h-full">
                            <div className="relative h-[250px] overflow-hidden">
                              <img
                                src={activity.image}
                                alt={activity.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div 
                              className="p-6 h-[207px] flex flex-col"
                              style={{ backgroundColor: activity.backgroundColor }}
                            >
                              <h3 className="font-['SVN-Gotham'] text-xl text-black mb-3">
                                {activity.title}
                              </h3>
                              <p 
                                className="text-black/70 text-sm leading-relaxed flex-grow min-h-[80px] line-clamp-5 overflow-hidden"
                                style={{
                                  display: '-webkit-box',
                                  WebkitLineClamp: 5,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden'
                                }}
                              >
                                {activity.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Synchronized Timeline Elements positioned under each card */}
                      <div className="flex flex-col items-center mt-6 relative z-30" style={{ overflow: 'visible' }}>
                        {/* Vertical connecting line from card center to timeline */}
                        <div 
                          className="w-0.5 h-16 relative z-30"
                          style={{ 
                            backgroundColor: activity.timelineColor === "#1A5336" ? 'rgba(26, 83, 54, 0.8)' : 'rgba(250, 186, 30, 0.8)',
                            overflow: 'visible'
                          }}
                        ></div>
                        
                        {/* Timeline dot positioned at the center */}
                        <div 
                          className="w-4 h-4 rounded-full border-4 border-white shadow-lg relative z-30"
                          style={{ 
                            backgroundColor: activity.timelineColor,
                            overflow: 'visible'
                          }}
                        ></div>
                        
                        {/* Timeline label below dot */}
                        <div className="text-center mt-1 relative z-30" style={{ overflow: 'visible' }}>
                          <p className="text-[#212121] text-sm uppercase whitespace-nowrap font-medium">{activity.timeLabel}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Timeline line that moves with carousel */}
                <div className="absolute bottom-0 left-0 right-0 z-10" style={{ overflow: 'visible' }}>
                  <div className="relative h-0.5 bg-[#1a5336]/20" style={{ top: '-29px', overflow: 'visible' }}></div>
                </div>
                
                {/* Navigation Buttons positioned at top right */}
                <CarouselPrevious className="translate-x-0 translate-y-0 h-12 w-12 bg-white border-2 border-[#1a5336] text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors" />
                <CarouselNext className="absolute right-2 translate-x-0 translate-y-0 h-12 w-12 bg-white border-2 border-[#1a5336] text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors" />
              </Carousel>
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
