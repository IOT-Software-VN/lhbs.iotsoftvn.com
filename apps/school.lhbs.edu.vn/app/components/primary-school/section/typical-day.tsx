import { Card, CardContent } from '@sites/index';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@sites/index';
import placeholder from "@assets/images/base/default.jpg"
const dailyActivities = [
  {
    id: 1,
    title: "Warm Morning Start",
    description:
      "Students arrive to friendly greetings and simple routines that help them feel settled, comfortable, and ready to learn.",
    image:
      placeholder,
    alt: "High school students preparing for morning advisory",
    timeLabel: "01",
    timelineColor: "#1A5336",
    backgroundColor: "#1A5336",
    titleColor: "#FFAE00",
    descriptionColor: "#FFFFFF",
  },
  {
    id: 2,
    title: "Collaborative Activities",
    description:
      "Group projects and partner work allow students to share ideas, develop teamwork skills, and build strong friendships.",
    image:
      placeholder,
    alt: "High school students engaged in academic lessons",
    timeLabel: "02",
    timelineColor: "#FABA1E",
    backgroundColor: "#FFFFFF",
    titleColor: "#1A5336",
    descriptionColor: "#1A1A1A99",
  },
  {
    id: 3,
    title: "Hands-On Learning",
    description:
      "Experiments creative tasks real-world problem-solving give students opportunities to explore and apply new concepts.",
    image:
      placeholder,
    alt: "Students having lunch and sharing ideas with peers",
    timeLabel: "03",
    timelineColor: "#1A5336",
    backgroundColor: "#FFFFFF",
    titleColor: "#1A5336",
    descriptionColor: "#1A1A1A99",
  },
  {
    id: 4,
    title: "Small-Group & Individual Practice",
    description:
      "Teachers provide targeted instruction while students work at their own pace, supporting confidence and personalized growth.",
    image:
      placeholder,
    alt: "High school students in leadership and innovation projects",
    timeLabel: "04",
    timelineColor: "#FABA1E",
    backgroundColor: "#FFFFFF",
    titleColor: "#1A5336",
    descriptionColor: "#1A1A1A99",
  }
];

export default function TypicalDaySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="w-full max-w-screen-2xl mx-auto">
        {/* Title Row - Full Width */}
        <div className="text-center mb-16">
<div className='flex flex-col items-center mb-10'>
  <div className='bg-[#FABA1E] w-20 h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
  <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-[#1E5338] uppercase tracking-wide drop-shadow-sm text-center leading-tight'>
    A typical day at LHBS High School
  </h2>
</div>
          <p className="text-[#212121] font-medium text-lg max-w-3xl mx-auto">
            Each day combines rigorous academics, university preparation, and enriching experiences.
          </p>
        </div>

        {/* Carousel Section - Full Width */}
        <div className="relative w-full max-w-6xl mx-auto">
            <Carousel className="relative overflow-visible">
              <CarouselContent className="-ml-6 overflow-visible">
                {dailyActivities.map((activity) => (
                  <CarouselItem key={activity.id} className="pl-6 basis-auto overflow-visible">
                    {/* Card with higher z-index */}
                    <div className="relative z-20 overflow-visible">
                      <Card className="py-0 bg-white shadow-lg border border-gray-200 w-[374px] h-[457px] overflow-hidden">
                        <CardContent className="p-0 h-full">
                          <div className="relative h-[250px] overflow-hidden">
                            <img
                              src={activity.image}
                              alt={activity.alt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div
                            className={`p-6 h-[207px] flex flex-col ${
                              activity.backgroundColor === '#1A5336' ? 'bg-[#1A5336]' : 'bg-white'
                            }`}
                          >
                            <h3 className={`font-['SVN-Gotham'] text-xl mb-3 ${
                                activity.titleColor === '#FFAE00' ? 'text-[#FFAE00]' : 'text-[#1A5336]'
                              }`}>
                              {activity.title}
                            </h3>
                            <p className={`text-sm leading-relaxed grow min-h-20 line-clamp-5 ${
                                activity.descriptionColor === '#FFFFFF' ? 'text-white' : 'text-[#1A1A1A]/60'
                              }`}>
                              {activity.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Synchronized Timeline Elements positioned under each card */}
                    <div className="flex flex-col items-center mt-6 relative z-30 overflow-visible">
                      {/* Vertical connecting line from card center to timeline */}
                      <div className={`w-0.5 h-16 relative z-30 ${
                          activity.timelineColor === "#1A5336" ? 'bg-[#1A5336]/80' : 'bg-[#FABA1E]/80'
                        }`} />

                      {/* Timeline dot positioned at the center */}
                      <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg relative z-30 ${
                          activity.timelineColor === "#1A5336" ? 'bg-[#1A5336]' : 'bg-[#FABA1E]'
                        }`} />

                      {/* Timeline label below dot */}
                      <div className="text-center mt-1 relative z-30 overflow-visible">
                        <p className="text-[#1A5336] text-sm uppercase whitespace-nowrap font-semibold">
                          {activity.timeLabel}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Timeline line that moves with carousel */}
              <div className="absolute bottom-0 left-0 right-0 z-10 overflow-visible">
                <div className="relative h-0.5 bg-[#1a5336]/20 overflow-visible -top-7" />
              </div>

              {/* Navigation Buttons positioned at center sides */}
              {/* <CarouselPrevious className="absolute top-1/2 -left-6 -translate-y-1/2 h-12 w-12 bg-white border-0 text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colorss" />
              <CarouselNext className="absolute top-1/2 -right-6 -translate-y-1/2 h-12 w-12 bg-white border-0 text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors" /> */}
            </Carousel>
        </div>
      </div>
    </section>
  );
}
