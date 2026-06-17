'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    id: 'acne',
    title: 'Acné',
    tag: 'Dermatología médica',
    description:
      'Comedones, quistes, cicatrices o manchas posacné. Diseñamos un protocolo que ataca el origen, no solo los síntomas, con seguimiento clínico incluido.',
    href: '/recomendaciones/acne',
    image: '/images/solution_acne.png',
  },
  {
    id: 'rosacea',
    title: 'Rosácea',
    tag: 'Dermatología médica',
    description:
      'Controla el enrojecimiento crónico y la sensibilidad con tratamientos médicos y láser. Resultados visibles sin depender del maquillaje.',
    href: '/recomendaciones/rosacea',
    image: '/images/solution_rosacea.png',
  },
  {
    id: 'dermatitis',
    title: 'Dermatitis Atópica',
    tag: 'Dermatología médica',
    description:
      'Aliviamos el picor, la descamación y las crisis con un plan terapéutico que fortalece tu barrera cutánea a largo plazo.',
    href: '/recomendaciones/dermatitis',
    image: '/images/solution_dermatitis.png',
  },
  {
    id: 'antiaging',
    title: 'Anti-envejecimiento',
    tag: 'Estética clínica',
    description:
      'Peeling químico, nieve carbónica y rellenos con ácido hialurónico. Recupera firmeza y luminosidad con procedimientos seguros y con respaldo médico.',
    href: '/servicios',
    image: '/images/solution_aging.png',
  },
]

export default function SolutionsSection() {
  const [active, setActive] = useState(solutions[0])

  return (
    <section className="py-24 bg-[#f7f8fc]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
            Condiciones que tratamos
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044]">
            Encuentra tu solución
          </h2>
        </div>

        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100/80 flex flex-col lg:flex-row overflow-hidden">

          {/* Left: Tab list */}
          <div className="flex-1 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
            <p className="text-sm text-[#2a3044]/50 mb-8 leading-relaxed">
              Selecciona una condición para ver cómo la abordamos desde la medicina dermatológica.
            </p>

            <div className="flex flex-col gap-1">
              {solutions.map((item) => {
                const isActive = active.id === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActive(item)}
                    className={`flex items-center justify-between text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-[#f0f4ff]'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <motion.span
                        animate={{ scale: isActive ? 1 : 0.7, opacity: isActive ? 1 : 0.3 }}
                        className="w-2 h-2 rounded-full bg-teal-primary shrink-0"
                      />
                      <span
                        className={`font-semibold text-base transition-colors duration-300 ${
                          isActive ? 'text-[#2a3044]' : 'text-[#2a3044]/40'
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <motion.div
                      animate={{ x: isActive ? 0 : -4, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-7 h-7 rounded-full bg-teal-primary/10 flex items-center justify-center text-teal-primary shrink-0"
                    >
                      <ArrowRight size={13} />
                    </motion.div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: Image + content card */}
          <div className="flex-1 p-6 md:p-8 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Tag overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#2a3044] shadow-sm">
                      {active.tag}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-[#2a3044] mb-3">{active.title}</h3>
                    <p className="text-sm text-[#2a3044]/65 leading-relaxed">{active.description}</p>
                  </div>

                  <Link
                    href={active.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-primary hover:text-teal-secondary transition-colors"
                  >
                    Ver recomendaciones <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
