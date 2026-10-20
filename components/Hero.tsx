'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const slides = [
  { src: '/images/bg-facial.jpg', alt: 'Cuidado de la piel' },
  { src: '/images/bg-toxina.jpg', alt: 'Procedimientos clínicos' },
  { src: '/images/Fachada_w1200_1200_675.jpg', alt: 'Dermaclinica Temuco' },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="relative w-full min-h-[92vh] flex items-end pb-16 md:pb-28 px-6 md:px-16 overflow-hidden">

      {/* Parallax + carousel */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.18]">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover object-center"
              priority={current === 0}
              quality={90}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
        <div className="max-w-2xl">

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-[11px] font-medium text-white/80 tracking-wider">
              Temuco · Edificio Paseo de las Artes, 7° Piso
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-heading font-semibold text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.07] mb-6 tracking-tight"
          >
            Tu piel en manos<br className="hidden md:block" /> de especialistas
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="text-base md:text-[1.05rem] text-white/65 max-w-[420px] mb-10 leading-relaxed font-light"
          >
            Más de 15 años atendiendo en Temuco. Dermatología médica y estética clínica
            con especialistas que realmente conocen tu piel.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/agendar"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-charcoal font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg"
            >
              Agenda tu consulta
              <ChevronRight size={14} className="text-charcoal/40" />
            </Link>

            <Link
              href="/servicios"
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/25 text-white font-medium text-sm hover:bg-white/10 transition-colors"
            >
              Ver tratamientos
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="relative h-[3px] rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
            style={{ width: i === current ? 28 : 8 }}
          >
            <span className="absolute inset-0 bg-white/30 rounded-full" />
            {i === current && (
              <motion.span
                layoutId="dot-fill"
                className="absolute inset-0 bg-white rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Animated scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 right-8 md:right-16 z-10"
      >
        <div className="w-px h-16 bg-white/15 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
            className="absolute w-full h-1/2 bg-gradient-to-b from-transparent via-white/55 to-transparent"
          />
        </div>
      </motion.div>

    </section>
  )
}
