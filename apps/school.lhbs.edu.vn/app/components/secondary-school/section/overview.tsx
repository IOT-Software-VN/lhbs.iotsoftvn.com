import { useState } from 'react';
import { Link } from 'react-router';
import lhbs from "@assets/images/base/lhbs.png"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@sites/index';
import { ChevronRight } from 'lucide-react';

const learningCards = [
  {
    id: 1,
    title: "Individual Learning Pace",
    description: "Each student progresses at a pace that suits their abilities, ensuring they feel confident, supported, and never overwhelmed."
  },
  {
    id: 2,
    title: "Tailored Instruction, Activities",
    description: "Lessons are thoughtfully adapted to each child's strengths, needs, and interests, helping them stay engaged and develop a genuine love for learning."
  },
  {
    id: 3,
    title: "Focused Guidance for Growth",
    description: "Teachers provide targeted support and feedback, helping students overcome challenges, build essential skills, and achieve steady, meaningful progress."
  }
];

const stats = [
  { value: "2", label: "pools" },
  { value: "26", label: "facility 2" },
  { value: "34", label: "facility 3" }
];

interface OverviewSectionProps {
  onNavigate: (path: string) => void;
}

export default function OverviewSection({ onNavigate }: OverviewSectionProps) {
  const [activeTab, setActiveTab] = useState<'primary' | 'secondary' | 'high'>('primary');

  return (
    <section
    id='overview'
    className="py-16 md:py-24 pb-0! bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
{/* Section Header - Personalize Learning Method */}
<div className='flex flex-col items-center mb-12'>
  <div className='bg-[#FABA1E] w-20 h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
  <h3 className='text-3xl md:text-4xl lg:text-5xl font-black text-[#1E5338] uppercase tracking-wide drop-shadow-sm text-center'>
    Personalize learning method
  </h3>
</div>

        {/* Carousel Cards - Above Timeline */}
        <div className="mb-12 max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {learningCards.map((card) => (
                <CarouselItem key={card.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <path d="M18.3327 23.3333C18.3327 18.731 22.0636 15 26.666 15C31.2684 15 34.9993 18.731 34.9993 23.3333C34.9993 27.9357 31.2684 31.6667 26.666 31.6667C22.0636 31.6667 18.3327 27.9357 18.3327 23.3333ZM26.666 10C19.3022 10 13.3327 15.9695 13.3327 23.3333C13.3327 30.6971 19.3022 36.6667 26.666 36.6667C34.0297 36.6667 39.9993 30.6971 39.9993 23.3333C39.9993 15.9695 34.0297 10 26.666 10ZM51.666 26.6667C51.666 23.9052 53.9047 21.6667 56.666 21.6667C59.4273 21.6667 61.666 23.9052 61.666 26.6667C61.666 29.4281 59.4273 31.6667 56.666 31.6667C53.9047 31.6667 51.666 29.4281 51.666 26.6667ZM56.666 16.6667C51.143 16.6667 46.666 21.1438 46.666 26.6667C46.666 32.1895 51.143 36.6667 56.666 36.6667C62.189 36.6667 66.666 32.1895 66.666 26.6667C66.666 21.1438 62.189 16.6667 56.666 16.6667ZM14.166 43.3333C10.0239 43.3333 6.66602 46.6913 6.66602 50.8333V51.6703V51.674L6.66605 51.6827L6.66625 51.7037L6.66718 51.759C6.66815 51.802 6.66992 51.857 6.67302 51.9237C6.67922 52.0563 6.69085 52.235 6.71262 52.4527C6.75605 52.887 6.84045 53.4833 7.00485 54.188C7.33252 55.592 7.98782 57.468 9.30545 59.3503C12.0349 63.2497 17.2386 66.6667 26.666 66.6667C31.2292 66.6667 34.803 65.866 37.5853 64.5977C37.0887 62.9503 36.7827 61.22 36.6933 59.433C34.5437 60.7027 31.3749 61.6667 26.666 61.6667C18.5934 61.6667 15.0471 58.8337 13.4016 56.483C12.5317 55.2403 12.0933 53.9913 11.874 53.0517C11.765 52.5843 11.7127 52.204 11.6878 51.955C11.6754 51.831 11.6699 51.7407 11.6676 51.6907L11.666 51.649V50.8333C11.666 49.4527 12.7853 48.3333 14.166 48.3333H39.1067C39.935 46.7443 40.9543 45.271 42.1343 43.9437C41.224 43.551 40.2203 43.3333 39.166 43.3333H14.166ZM76.666 58.3333C76.666 68.4587 68.458 76.6667 58.3327 76.6667C48.2073 76.6667 39.9993 68.4587 39.9993 58.3333C39.9993 48.208 48.2073 40 58.3327 40C68.458 40 76.666 48.208 76.666 58.3333ZM60.184 48.0687C59.6013 46.1993 57.064 46.1993 56.4813 48.0687L54.6247 54.0257H48.6163C46.7307 54.0257 45.9467 56.541 47.472 57.6963L52.333 61.378L50.4763 67.3347C49.8937 69.204 51.946 70.7587 53.4717 69.6033L58.3327 65.922L63.1937 69.6033C64.7193 70.7587 66.7717 69.204 66.189 67.3347L64.3323 61.378L69.1933 57.6963C70.7187 56.541 69.9347 54.0257 68.049 54.0257H62.0407L60.184 48.0687Z" fill="#ED0677"/>
                      </svg>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1A5336] mb-4 text-center">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black font-medium text-center text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Timeline with 5 Dots */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="relative h-20">
              {/* Line */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#D7D7D7] rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#227D46] transition-all duration-500 ease-out rounded-full"
                  style={{
                    width: activeTab === 'primary' ? '25%' :
                           activeTab === 'secondary' ? '50%' :
                           '75%'
                  }}
                />
              </div>

              {/* Dot 1 */}
              <button
                onClick={() => setActiveTab('primary')}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full transition-all duration-300 z-10 bg-[#227D46]"
              />

              {/* Dot 2 - LHBS Image with white background */}
              <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                {/* White circle background to create gap */}
                <div className="absolute inset-0 bg-white rounded-full w-14 h-14 -translate-x-[1px] -translate-y-[1px]"></div>
                {/* LHBS Image */}
                <img
                  src={lhbs}
                  alt="LHBS"
                  className="w-12 h-12 object-contain relative z-10"
                />
              </div>

              {/* Dot 3 */}
              <button
                onClick={() => setActiveTab('secondary')}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full transition-all duration-300 z-10
                  ${activeTab === 'secondary'
                    ? 'bg-[#227D46] scale-125 shadow-lg'
                    : 'bg-[#D7D7D7] hover:bg-gray-400 hover:scale-110'}`}
              />

              {/* Dot 4 */}
              <button
                onClick={() => setActiveTab('high')}
                className={`absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full transition-all duration-300 z-10
                  ${activeTab === 'high'
                    ? 'bg-[#227D46] scale-125 shadow-lg'
                    : 'bg-[#D7D7D7] hover:bg-gray-400 hover:scale-110'}`}
              />

              {/* Dot 5 */}
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full transition-all duration-300 z-10 bg-[#D7D7D7] hover:bg-gray-400 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Row - Full Width */}
      <div className="w-full">
        <div className="grid grid-cols-12">
          {/* Left Column - Green Background */}
          <div className="col-span-12 lg:col-span-6 bg-[#227D46] py-12 px-8 flex items-center justify-center">
            <button
              className="flex items-end gap-3 text-white hover:text-[#FABA1E] transition-colors duration-300 group"
              onClick={() => onNavigate('/milestones')}
            >
              <span className="text-2xl md:text-3xl font-base">Explore the milestones</span>
              <ChevronRight className="w-8 h-8 transition-transform group-hover:translate-x-2" />
            </button>
          </div>

          {/* Right Column - Yellow Background with Stats */}
          <div className="col-span-12 lg:col-span-6 bg-[#E5A812] py-12 px-8">
            <div className="grid grid-cols-3 gap-0 h-full">
              {stats.map((stat, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  {/* Divider */}
                  {index > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-[#227D46]"></div>
                  )}

                  {/* Stat Content */}
                  <div className="text-center">
                    <h3 className="text-5xl md:text-6xl font-bold text-[#1A5336] mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-black font-medium text-sm uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
