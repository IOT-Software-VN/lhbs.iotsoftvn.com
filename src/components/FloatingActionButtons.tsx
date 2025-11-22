import { useState } from 'react';
import { HelpCircle, FileText, MapPin } from 'lucide-react';

interface FloatingActionButtonsProps {
  onNavigate: (path: string) => void;
}

export function FloatingActionButtons({ onNavigate }: FloatingActionButtonsProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const buttons = [
    {
      id: 'help',
      icon: HelpCircle,
      label: 'Help & Support',
      action: () => onNavigate('/our-school/about-us'),
      bgColor: '#FABA1E',
      textColor: '#1a5336'
    },
    {
      id: 'apply',
      icon: FileText,
      label: 'Apply Now',
      action: () => window.open('https://tuyensinh.lhbs.vn', '_blank'),
      bgColor: '#FABA1E',
      textColor: '#1a5336'
    },
    {
      id: 'visit',
      icon: MapPin,
      label: 'Virtual Tour',
      action: () => window.open('https://360.lhu.edu.vn/', '_blank'),
      bgColor: '#FABA1E',
      textColor: '#1a5336'
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      {buttons.map((button) => {
        const IconComponent = button.icon;
        const isHovered = hoveredButton === button.id;

        return (
          <div
            key={button.id}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredButton(button.id)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/* Label - shows on hover */}
            <div
              className={`absolute right-16 px-4 py-2 bg-white shadow-lg rounded-lg border border-gray-200 whitespace-nowrap transition-all duration-300 ${
                isHovered 
                  ? 'opacity-100 translate-x-0 visible' 
                  : 'opacity-0 translate-x-2 invisible'
              }`}
            >
              <span className="text-[#1a5336] font-medium text-sm">
                {button.label}
              </span>
              {/* Arrow pointing to button */}
              <div 
                className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-r-0 border-t-4 border-b-4"
                style={{
                  borderLeftColor: 'white',
                  borderTopColor: 'transparent',
                  borderBottomColor: 'transparent'
                }}
              ></div>
            </div>

            {/* Button */}
            <button
              onClick={button.action}
              className={`w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
              style={{ 
                backgroundColor: button.bgColor,
                color: button.textColor
              }}
            >
              <IconComponent className="w-6 h-6" />
            </button>
          </div>
        );
      })}
    </div>
  );
}