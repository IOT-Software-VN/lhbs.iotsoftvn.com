import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteNavigation, NavParent } from '../types/navigation';
import { X, Search, ChevronRight } from 'lucide-react';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  currentPath: string;
}

export function FullScreenMenu({ isOpen, onClose, onNavigate, currentPath }: FullScreenMenuProps) {
  const [selectedParent, setSelectedParent] = useState<NavParent | null>(siteNavigation[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    onClose();
  };

  const filteredParents = searchQuery
    ? siteNavigation.filter(parent =>
        parent.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        parent.children.some(child => child.label.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : siteNavigation;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] bg-[#1a5336] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Desktop Layout */}
          {!isMobile ? (
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="border-b border-white/20 px-20 py-6 flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1 max-w-md">
                  <Search className="w-5 h-5 text-white/60" />
                  <input
                    type="text"
                    placeholder="Search pages…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 font-['Lexend_Deca']"
                    autoFocus
                  />
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-[#FABA1E] transition-colors p-2"
                  aria-label="Close menu"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* 3-Column Layout */}
              <div className="flex-1 grid grid-cols-12 overflow-hidden">
                {/* Left Column - Parents */}
                <div className="col-span-3 border-r border-white/20 overflow-y-auto p-8">
                  <h3 className="font-['Arial'] font-bold text-white/60 text-sm mb-6 uppercase tracking-wider">
                    Main Navigation
                  </h3>
                  <nav className="space-y-2">
                    {filteredParents.map((parent) => (
                      <button
                        key={parent.id}
                        onClick={() => setSelectedParent(parent)}
                        className={`w-full text-left px-6 py-4 transition-all group ${
                          selectedParent?.id === parent.id
                            ? 'bg-white/10 text-white'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className="font-['Crimson_Pro'] text-2xl mb-1">{parent.label}</div>
                        <div className="font-['Lexend_Deca'] text-sm text-white/50 group-hover:text-white/70">
                          {parent.description}
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Middle Column - Children */}
                <div className="col-span-4 border-r border-white/20 overflow-y-auto p-8">
                  {selectedParent && (
                    <>
                      <h3 className="font-['Arial'] font-bold text-white/60 text-sm mb-6 uppercase tracking-wider">
                        {selectedParent.label}
                      </h3>
                      <nav className="space-y-1">
                        <button
                          onClick={() => handleNavClick(selectedParent.path)}
                          className="w-full text-left px-6 py-4 text-white/70 hover:text-white hover:bg-white/5 transition-all border-b border-white/10"
                        >
                          <div className="font-['Crimson_Pro'] text-xl flex items-center justify-between">
                            Overview
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        </button>
                        {selectedParent.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => handleNavClick(child.path)}
                            className={`w-full text-left px-6 py-4 transition-all group ${
                              currentPath === child.path
                                ? 'bg-[#FABA1E]/20 text-[#FABA1E]'
                                : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <div className="font-['Crimson_Pro'] text-xl mb-1 flex items-center justify-between">
                              {child.label}
                              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="font-['Lexend_Deca'] text-sm text-white/50">
                              {child.description}
                            </div>
                          </button>
                        ))}
                      </nav>
                    </>
                  )}
                </div>

                {/* Right Column - Preview */}
                <div className="col-span-5 overflow-y-auto p-8">
                  {selectedParent && (
                    <div className="max-w-lg">
                      <div className="bg-white/10 aspect-video mb-6 flex items-center justify-center text-white/40">
                        <span className="font-['Lexend_Deca'] text-sm">Page Preview</span>
                      </div>
                      <h2 className="font-['Crimson_Pro'] text-4xl text-white mb-4">
                        {selectedParent.label}
                      </h2>
                      <p className="font-['Lexend_Deca'] text-white/70 text-lg mb-8 leading-relaxed">
                        {selectedParent.description}
                      </p>
                      <button
                        onClick={() => handleNavClick(selectedParent.path)}
                        className="px-8 py-4 bg-[#FABA1E] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#e5a812] transition-colors"
                      >
                        View Page
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Mobile Layout */
            <div className="h-full flex flex-col">
              {/* Mobile Header */}
              <div className="border-b border-white/20 px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <Search className="w-4 h-4 text-white/60" />
                  <input
                    type="text"
                    placeholder="Search…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 font-['Lexend_Deca'] text-sm"
                  />
                </div>
                <button onClick={onClose} className="text-white p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Accordion */}
              <div className="flex-1 overflow-y-auto p-4">
                {filteredParents.map((parent) => (
                  <div key={parent.id} className="mb-2">
                    <button
                      onClick={() => setExpandedMobile(expandedMobile === parent.id ? null : parent.id)}
                      className="w-full text-left px-4 py-4 bg-white/10 text-white"
                    >
                      <div className="font-['Crimson_Pro'] text-xl flex items-center justify-between">
                        {parent.label}
                        <motion.div
                          animate={{ rotate: expandedMobile === parent.id ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </button>
                    <AnimatePresence>
                      {expandedMobile === parent.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-white/5"
                        >
                          <button
                            onClick={() => handleNavClick(parent.path)}
                            className="w-full text-left px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 border-b border-white/10"
                          >
                            <div className="font-['Lexend_Deca'] text-sm">See all {parent.label}</div>
                          </button>
                          {parent.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => handleNavClick(child.path)}
                              className="w-full text-left px-6 py-3 text-white/70 hover:text-white hover:bg-white/5"
                            >
                              <div className="font-['Lexend_Deca']">{child.label}</div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
