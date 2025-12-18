import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import globalImg from "@assets/images/home-page/section-ranking/map-ranking.png"
const topUniversities = [
  {
    id: 1,
    name: "HARVARD UNIVERSITY",
    image: "https://image-static.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png"
  },
  {
    id: 2,
    name: "TOKYO UNIVERSITY",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Yasuda_Auditorium_-_Tokyo_University_3.jpg/1200px-Yasuda_Auditorium_-_Tokyo_University_3.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQ9SII1A6b1BLVujY3B6nQDkmSvG1EzCHsQ&s"
  },
  {
    id: 3,
    name: "TORONTO UNIVERSITY",
    image: "https://www.trinity.utoronto.ca/wp-content/uploads/2019/01/trinity-home-wide-01.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFM0T0LCD08dwy-tZn5_SiL-YSCoBJu_1KBg&s"
  },
  {
    id: 4,
    name: "LAC HONG UNIVERSITY",
    image: "https://thongtintuyensinh.net/wp-content/uploads/2019/10/dai-hoc-lac-hong-1.jpg",
    logo: "https://cdn.haitrieu.com/wp-content/uploads/2021/12/Logo-DH-Lac-Hong-LHU-VN.png"
  },
  {
    id: 5,
    name: "MELBOURNE UNIVERSITY",
    image: "https://gatewayeduconnect.com/images/university/banner/University-of-Melbourne.webp",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpghLR86Y9I3RX64cEyFVpDjurYcUADaprA&s"
  }
];

const mapMarkers = [
  {
    id: 1,
    label: "TOP 1",
    sublabel: "Harvard University",
    top: "20%",
    left: "51%",
    color: "bg-[#E85D75]",
    dotColor: "#E85D75"
  },
  {
    id: 2,
    label: "TOP 5",
    sublabel: "Đại học Toronto",
    top: "36%",
    left: "25%",
    color: "bg-[#4A90E2]",
    dotColor: "#4A90E2"
  },
  {
    id: 3,
    label: "TOP 3",
    sublabel: "Đại học Lạc Hồng",
    top: "45%",
    left: "75%",
    color: "bg-[#F5A623]",
    dotColor: "#F5A623"
  },
  {
    id: 4,
    label: "HM 8",
    sublabel: "Đại học Tokyo",
    top: "36%",
    left: "85%",
    color: "bg-[#4A90E2]",
    dotColor: "#4A90E2"
  },
  {
    id: 5,
    label: "TOP 7",
    sublabel: "Đại học Melbourne",
    top: "70%",
    left: "80%",
    color: "bg-[#4A90E2]",
    dotColor: "#4A90E2"
  }
];

export default function GlobalRankingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="w-full bg-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#07622E] text-center mb-6 uppercase"
        >
          LHBS STUDENTS AROUND THE WORLD
        </motion.h1>

        {/* GRID: 8 columns (map) + 4 columns (universities) */}
        <div className="grid grid-cols-12 gap-8 items-center">

          {/* LEFT COLUMN: Map with Markers - 8 columns */}
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Map Image */}
              <img
                src={globalImg}
                alt="World Map"
                className="w-full h-auto"
              />

              {/* Map Markers with Labels */}
              {mapMarkers.map((marker, index) => (
                <motion.div
                  key={marker.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: marker.top, left: marker.left }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {/* Animated Ping Effect - Centered */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full opacity-40 animate-ping"
                    style={{ backgroundColor: marker.dotColor }}
                  ></div>

                  {/* FaMapMarkerAlt Icon - Centered */}
                  <FaMapMarkerAlt
                    className="relative z-10"
                    size={32}
                    color={marker.dotColor}
                  />

                  {/* Label - Single Row with Divider, aligned to start at marker */}
                  <div className={`absolute top-8 left-4 whitespace-nowrap ${marker.color} text-white px-3 py-1.5 rounded-lg rounded-tl-none text-xs font-bold shadow-lg flex items-center gap-2`}>
                    <span>{marker.label}</span>
                    <span className="text-white/60">|</span>
                    <span className="font-normal">{marker.sublabel}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Top Universities - 4 columns */}
          <div className="col-span-12 lg:col-span-3">
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="space-y-12"
  >
    {/* Title */}
    <h3 className="text-2xl font-bold text-[#07622E] mb-6">Top universities</h3>

    {/* University Cards */}
    <div className="flex flex-col gap-2"> {/* tăng gap từ 3 → 6 */}
      {topUniversities.map((university, index) => (
        <motion.div
          key={university.id}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          className="
            relative
            w-full
            overflow-hidden
            shadow-lg
            group
            cursor-pointer
            aspect-[3/1]   /* giữ tỷ lệ đẹp, tự động cao */
          "
        >
          {/* Background Image */}
          <img
            src={university.image}
            alt={university.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {/* Logo - Top Left */}
            <div className="flex justify-start">
              <img
                src={university.logo}
                alt={`${university.name} logo`}
                className="h-8 w-8 object-contain"
              />
            </div>

            {/* University Name - Bottom with padding */}
            <h4 className="text-white font-bold text-sm uppercase tracking-wide pb-3 px-3">
              {university.name}
            </h4>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>


        </div>
      </div>
    </section>
  );
}
