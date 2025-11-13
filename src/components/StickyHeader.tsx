import { motion } from 'motion/react';
import logoImage from '../assets/logo-lhbs-02.png';

interface StickyHeaderProps {
  scrolled: boolean;
  onMenuClick: () => void;
  onLogoClick: () => void;
  onEnquireClick: () => void;
}

export function StickyHeader({ scrolled, onMenuClick, onLogoClick, onEnquireClick }: StickyHeaderProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ height: '72px' }}
      initial={{ y: 0 }}
      animate={{ 
        backgroundColor: scrolled ? 'rgba(26, 83, 54, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className="h-full max-w-[1440px] mx-auto px-4 md:px-20 flex items-center justify-between">
        <motion.button
          className="flex items-center gap-2 px-4 md:px-6 h-12 text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a5336]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMenuClick}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path d="M2.4 5.7C2.4 5.20295 2.80295 4.8 3.3 4.8H18.104C18.6011 4.8 19.004 5.20295 19.004 5.7C19.004 6.19705 18.6011 6.6 18.104 6.6H3.3C2.80295 6.6 2.4 6.19705 2.4 5.7ZM2.4 11.7C2.4 11.2029 2.80295 10.8 3.3 10.8H15.1001C15.5971 10.8 16.0001 11.2029 16.0001 11.7C16.0001 12.197 15.5971 12.6 15.1001 12.6H3.3C2.80295 12.6 2.4 12.197 2.4 11.7ZM3.3 16.8C2.80295 16.8 2.4 17.203 2.4 17.7C2.4 18.197 2.80295 18.6 3.3 18.6H20.7C21.197 18.6 21.6 18.197 21.6 17.7C21.6 17.203 21.197 16.8 20.7 16.8H3.3Z" fill="white" />
          </svg>
          <span className="font-['Arial'] font-bold text-lg">MENU</span>
        </motion.button>
        
        <motion.button
          onClick={onLogoClick}
          className="flex-1 flex justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a5336]"
          whileHover={{ scale: 1.02 }}
        >
           <img 
              src={logoImage} 
              alt="LHBS - Lac Hong Bilingual School" 
              className="h-14 w-auto"
            />
        </motion.button>
        
        <motion.button
          onClick={onEnquireClick}
          className="px-4 md:px-6 h-12 border-2 border-white text-white font-['Arial'] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a5336]"
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="hidden md:inline">ENQUIRE NOW</span>
          <span className="md:hidden">ENQUIRE</span>
        </motion.button>
      </div>
    </motion.header>
  );
}
