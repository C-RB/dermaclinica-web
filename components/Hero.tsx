'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <section className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[85vh] flex items-end pb-16 md:pb-24 px-8 md:px-16 shadow-lg">
        
        {/* Background Image */}
        <Image
          src="/images/hero_real_dermatologist_hispanic.png"
          alt="Dermatóloga revisando paciente"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        
        {/* Overlay gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-5 text-white/90"
          >
            #1 En tratamientos dermatológicos personalizados
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-medium text-4xl md:text-6xl lg:text-[4.2rem] leading-[1.05] mb-6"
          >
            Dermatología Avanzada, <br className="hidden md:block" /> Creada para Ti
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white/80 max-w-lg mb-10 leading-relaxed font-light"
          >
            Transforma tu piel con tratamientos personalizados diseñados por dermatólogos certificados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-between gap-5 px-7 py-3.5 rounded-full bg-white text-charcoal font-semibold text-sm hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg"
            >
              <span>Encuentra tu tratamiento</span>
              <ChevronRight size={16} className="text-charcoal/50" />
            </Link>
            
            <Link
              href="/servicios"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 text-white font-medium text-sm hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Saber más
            </Link>
          </motion.div>
        </div>


      </section>
    </div>
  )
}
