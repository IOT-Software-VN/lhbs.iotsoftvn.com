import { useState } from "react";
import { SCHOOL_LEVELS } from "@/components/home-page/mock-data"; // mock data bạn đã có

export default function EducationLevel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full h-screen flex overflow-hidden relative">
      {SCHOOL_LEVELS.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={item.id}
            className={`
              group relative h-full transition-all duration-700 ease-in-out
              cursor-pointer overflow-hidden flex flex-col justify-end
              ${index === 0 
                ? isActive ? "basis-1/2" : "basis-1/2"   // cột đầu luôn 50%
                : isActive 
                  ? "basis-[40%]" 
                  : "basis-[20%]"
              }
            `}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Dark overlay for all columns */}
            {/* Overlay base – phủ tối toàn màn hình */}
<div className="absolute inset-0 bg-black/30" />

          {/* Overlay gradient – đậm bên trái */}
          <div
            className="
              absolute inset-0 
              pointer-events-none
              transition-all duration-700
            "
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0.35) 0%,
                  rgba(0, 0, 0, 0.50) 30%,
                  rgba(0, 0, 0, 0.25) 60%,
                  rgba(0, 0, 0, 0.10) 100%
                )
              `
            }}
          />


            {/* Vertical Title (when not active) */}
            <div
              className={`
                absolute left-20 bottom-0 h-full flex items-end pb-8
                transition-all duration-500
                ${isActive ? "opacity-0" : "opacity-100"}
              `}
            >
              <h2
                className="
                  text-white font-[900] tracking-wide whitespace-nowrap
                  text-3xl md:text-4xl lg:text-5xl
                  transform -rotate-90 origin-bottom-left
                "
              >
                {item.title}
              </h2>
            </div>

            {/* Expanded Content (only when active) */}
            <div
              className={`
                absolute inset-0 p-10 flex flex-col justify-center 
                text-white transition-all duration-700
                ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}
              `}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h3>
              <p className="text-xl md:text-2xl font-semibold mb-6">
                {item.subtitle}
              </p>

              <ul className="space-y-3 text-lg md:text-xl">
                {item.descriptions.map((line, i) => (
                  <li key={i} className="leading-relaxed">
                    • {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
}
