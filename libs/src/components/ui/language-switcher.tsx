import { useLanguageStore } from '@sites/stores/languages.store'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

const LANGUAGES = [
  { code: 'vi', label: 'VI', flag: '🇻🇳' },
  { code: 'en', label: 'EN', flag: '🇬🇧' }
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = LANGUAGES.find(lang => lang.code === language) || LANGUAGES[0]
  const otherLangs = LANGUAGES.filter(lang => lang.code !== language)

  return (
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
      <div className="relative">
        {/* Current Language Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border-2 border-[#1E5338]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl">{currentLang.flag}</span>
          <span className="font-bold text-[#1E5338] text-sm">{currentLang.label}</span>
          <svg
            className={`w-4 h-4 text-[#1E5338] transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>

        {/* Language Options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full mb-2 right-0 bg-white rounded-2xl shadow-xl border-2 border-[#1E5338] overflow-hidden min-w-[120px]"
            >
              {otherLangs.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#FABA1E]/10 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-bold text-[#1E5338] text-sm">{lang.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
