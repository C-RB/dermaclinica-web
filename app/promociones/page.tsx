'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, Tag } from 'lucide-react'
import Link from 'next/link'

const categorias = [
  { id: 'all', label: 'Todas' },
  { id: 'depilacion', label: 'Depilación Láser' },
  { id: 'cosmetologia', label: 'Cosmetología' },
  { id: 'body', label: 'Corporales' },
]

const promos = [
  {
    id: 1,
    image: '/images/promo-depilacion.jpg',
    titulo: 'Verano · Depilación Láser',
    badge: '20% OFF',
    categoria: 'depilacion',
    wide: false,
  },
  {
    id: 2,
    image: '/images/depilacion-navidad.jpg',
    titulo: 'Promo Navideña · Depilación',
    badge: 'Especial',
    categoria: 'depilacion',
    wide: false,
  },
  {
    id: 3,
    image: '/images/cooltech-julio.jpg',
    titulo: 'Pack CoolTech',
    badge: 'Pack',
    categoria: 'body',
    wide: false,
  },
  {
    id: 4,
    image: '/images/promociones-depilacion.jpg',
    titulo: 'Promociones Vigentes · Depilación Láser',
    badge: 'Vigente',
    categoria: 'depilacion',
    wide: true,
  },
  {
    id: 5,
    image: '/images/ondaplus-agosto.jpg',
    titulo: 'Onda Plus',
    badge: '60% OFF',
    categoria: 'body',
    wide: false,
  },
  {
    id: 6,
    image: '/images/CYBER-OCTUBRE01.jpg',
    titulo: 'Cyber Week · Onda Plus',
    badge: '50% OFF',
    categoria: 'body',
    wide: false,
  },
  {
    id: 7,
    image: '/images/promociones-cosmetologia.jpg',
    titulo: 'Promociones Vigentes · Cosmetología Facial',
    badge: 'Vigente',
    categoria: 'cosmetologia',
    wide: true,
  },
  {
    id: 8,
    image: '/images/promociones-noviembre-FACIAL.jpg',
    titulo: 'Especial Noviembre · Faciales',
    badge: 'Especial',
    categoria: 'cosmetologia',
    wide: true,
  },
]

export default function PromocionesPage() {
  const [activa, setActiva] = useState('all')

  const filtradas = activa === 'all' ? promos : promos.filter(p => p.categoria === activa)

  return (
    <div className="min-h-screen bg-white">

      {/* ── Header ── */}
      <section className="bg-teal-primary py-20 md:py-28 px-6 md:px-16 overflow-hidden relative">
        {/* Decoración tipográfica de fondo */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-end pr-8 md:pr-20 pointer-events-none select-none overflow-hidden"
        >
          <span className="font-heading font-bold text-[18vw] leading-none text-white/5 whitespace-nowrap">
            PROMOS
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-bold text-white/50 uppercase tracking-[0.22em] mb-4"
          >
            Dermaclinica · Temuco
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-heading font-semibold text-4xl md:text-6xl text-white leading-[1.05] tracking-tight mb-6"
          >
            Promociones<br className="hidden md:block" /> vigentes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-white/65 text-[0.95rem] max-w-md leading-relaxed"
          >
            Descuentos y packs especiales en tratamientos seleccionados. Consulta disponibilidad y agenda directo por WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* ── Filtros ── */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-none">
            {categorias.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiva(cat.id)}
                className={`relative shrink-0 px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  activa === cat.id
                    ? 'text-teal-primary'
                    : 'text-[#2a3044]/40 hover:text-[#2a3044]/70'
                }`}
              >
                {cat.label}
                {activa === cat.id && (
                  <motion.span
                    layoutId="filter-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid de promociones ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtradas.map((promo) => (
                <motion.div
                  key={promo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className={promo.wide ? 'sm:col-span-2 lg:col-span-3' : ''}
                >
                  <div className="group relative overflow-hidden bg-gray-100 cursor-pointer">
                    {/* Imagen */}
                    <div className={`relative overflow-hidden ${promo.wide ? 'aspect-[21/9]' : 'aspect-square'}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={promo.image}
                        alt={promo.titulo}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />

                      {/* Overlay hover */}
                      <div className="absolute inset-0 bg-[#2a3044]/0 group-hover:bg-[#2a3044]/60 transition-colors duration-400 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 flex flex-col items-center gap-3">
                          <a
                            href="https://wa.me/56936909397"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#2a3044] font-semibold text-sm shadow-lg hover:bg-gray-50 transition-colors"
                          >
                            <MessageCircle size={15} />
                            Consultar por WhatsApp
                          </a>
                          <Link
                            href="/contacto"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/30 text-white font-semibold text-sm hover:bg-white/25 transition-colors"
                          >
                            <Phone size={15} />
                            Llamar
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Badge + título */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-white border-t border-gray-100">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-teal-primary">
                        <Tag size={10} />
                        {promo.badge}
                      </span>
                      <span className="w-px h-3 bg-gray-200" />
                      <p className="text-sm font-medium text-[#2a3044]/70 truncate">{promo.titulo}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtradas.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-[#2a3044]/30 text-sm"
            >
              No hay promociones en esta categoría en este momento.
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="bg-[#f7f8fc] border-t border-gray-100 py-16 px-6 md:px-16"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-2">
              ¿Tienes dudas?
            </p>
            <p className="font-heading font-semibold text-xl md:text-2xl text-[#2a3044]">
              Consulta disponibilidad y condiciones
            </p>
            <p className="text-sm text-[#2a3044]/45 mt-1">
              Lunes a viernes, 9:00 – 17:30 hrs.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/56936909397"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-primary text-white font-semibold text-sm hover:bg-teal-secondary transition-colors shadow-sm whitespace-nowrap"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gray-200 text-[#2a3044] font-semibold text-sm hover:bg-white hover:border-gray-300 transition-colors whitespace-nowrap"
            >
              <Phone size={15} />
              Agendar consulta
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  )
}
