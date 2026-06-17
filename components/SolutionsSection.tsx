'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const solutions = [
  {
    id: 'acne',
    title: 'Acné',
    description: 'Transforma tu piel con tratamientos personalizados diseñados por dermatólogos certificados para combatir el acné desde la raíz.',
    image: '/images/solution_acne.png'
  },
  {
    id: 'rosacea',
    title: 'Rosácea',
    description: 'Controla el enrojecimiento y la sensibilidad con protocolos médicos avanzados que restauran la calma natural de tu piel.',
    image: '/images/solution_rosacea.png'
  },
  {
    id: 'dermatitis',
    title: 'Dermatitis Atópica',
    description: 'Tratamientos integrales para aliviar, hidratar y fortalecer la barrera cutánea frente a la dermatitis.',
    image: '/images/solution_dermatitis.png'
  },
  {
    id: 'antiaging',
    title: 'Anti-envejecimiento',
    description: 'Recupera la luminosidad y firmeza con procedimientos como Peeling Químico y Nieve Carbónica.',
    image: '/images/solution_aging.png'
  }
]

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(solutions[0])

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Text & List */}
          <div className="flex-1 w-full">
            <p className="text-[11px] font-bold text-[#8ba2cd] uppercase tracking-[0.2em] mb-4">
              Nuestras Soluciones
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#2a3044] mb-6">
              Selecciona tu tratamiento
            </h2>
            <p className="text-[#2a3044]/60 text-base mb-10 max-w-md">
              Transforma tu piel con recomendaciones médicas y tratamientos diseñados a tu medida por expertos.
            </p>

            <div className="flex flex-col gap-2">
              {solutions.map((item) => {
                const isActive = activeTab.id === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item)}
                    className={`flex items-center justify-between text-left px-6 py-4 rounded-2xl transition-all duration-300 border-b border-transparent ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#eff2f9] to-transparent border-none' 
                        : 'hover:bg-gray-50 border-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${isActive ? 'bg-[#8ba2cd]' : 'bg-gray-300'}`}></span>
                      <span className={`font-semibold text-lg transition-colors duration-300 ${isActive ? 'text-[#2a3044]' : 'text-gray-400'}`}>
                        {item.title}
                      </span>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-8 h-8 rounded-full bg-[#8ba2cd]/20 flex items-center justify-center text-[#8ba2cd]"
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    )}
                    {!isActive && (
                      <ArrowRight size={16} className="text-gray-300" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Image & Info Card */}
          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-4 rounded-[2rem] shadow-xl border border-gray-50"
              >
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeTab.image}
                    alt={activeTab.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative Before/After slider line */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/50 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center gap-1 border border-white/50">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <p className="text-sm text-[#2a3044]/70 leading-relaxed mb-6">
                    {activeTab.description}
                  </p>
                  <div className="flex items-center justify-center gap-3 py-3 px-6 rounded-full border border-gray-200 w-full">
                    <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8ba2cd] to-[#a2a69c]"></span>
                    <span className="font-semibold text-[#2a3044] text-sm">{activeTab.title}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
