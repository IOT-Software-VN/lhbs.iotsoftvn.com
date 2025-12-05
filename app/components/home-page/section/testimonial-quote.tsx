import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  parentName: string;
  parentWork: string;
}

interface TestimonialQuoteSectionProps {
  onNavigate: (path: string) => void;
}

export function TestimonialQuoteSection({ onNavigate }: TestimonialQuoteSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "LHBS has transformed our daughter's learning journey. The bilingual environment and dedicated teachers have helped her develop both academically and personally. We couldn't be happier with our choice.",
      parentName: "Mrs. Nguyen Thi Mai",
      parentWork: "Marketing Director"
    },
    {
      quote: "The holistic education approach at LHBS prepares students not just for exams, but for life. Our son has grown so much in confidence and has developed excellent critical thinking skills.",
      parentName: "Mr. Le Van Duc",
      parentWork: "Software Engineer"
    },
    {
      quote: "What sets LHBS apart is the genuine care teachers show for each student. The international curriculum combined with Vietnamese values gives our children the best of both worlds.",
      parentName: "Mrs. Tran Thi Lan",
      parentWork: "Doctor"
    }
  ];

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };


  return (
    <motion.section
      ref={ref}
      className="py-24 bg-[#F5F5F5] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1640px] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          
          {/* Quote Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto"
          >
            
            {/* Quote Content with Navigation */}
            <div className="flex items-center gap-8 md:gap-12">
              
              {/* Left Arrow */}
              <motion.button
                onClick={handlePrevious}
                className="flex-shrink-0 p-3 mt-8 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-[#1a5336]" />
              </motion.button>

              {/* Quote Content Container */}
              <div className="flex-1">
                {/* Quote Icon and Content Row */}
                <div className="flex items-start gap-6 md:gap-8">
                  
                  {/* Quote Icon */}
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="w-16 h-16 bg-[#1a5336] rounded-lg flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Quote Text and Author */}
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1"
                  >
                    <blockquote className="text-xs md:text-xl lg:text-2xl text-[#212121] leading-relaxed font-medium">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex justify-end">
                      <div className="text-right">
                        <p className="text-[#1a5336] font-semibold text-lg">
                          {testimonials[currentTestimonial].parentName}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>

              {/* Right Arrow */}
              <motion.button
                onClick={handleNext}
                className="flex-shrink-0 p-3 mt-8 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-[#1a5336]" />
              </motion.button>

            </div>

          </motion.div>

        

        </div>
      </div>
    </motion.section>
  );
}

export default TestimonialQuoteSection;
