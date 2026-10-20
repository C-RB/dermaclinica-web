'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Calendar, MessageCircle, ChevronRight, BadgeCheck } from 'lucide-react'
import { especialistas, iniciales } from '@/lib/especialistas'

const vp = { once: true, margin: '-60px' as const }
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

export default function AgendarPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const [filtro, setFiltro] = useState<'todos' | 'disponibles'>('todos')

  const especialistasFiltrados = especialistas.filter(
    (esp) => filtro === 'todos' || Boolean(esp.horarios?.length)
  )

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative w-full min-h-[60vh] flex items-end pb-16 md:pb-20 px-6 md:px-16 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.18]">
          <Image
            src="/images/hero_real_dermatologist_hispanic_8k.png"
            alt="Consulta con especialista Dermaclinica"
            fill
            className="object-cover object-center"
            preload
            quality={90}
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-bold text-teal-light uppercase tracking-[0.22em] mb-4"
          >
            Reserva tu hora
          </motion.p>
          <motion.h1
            {...fadeUp(0.08)}
            className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5 max-w-2xl"
          >
            Agenda tu cita con el especialista indicado
          </motion.h1>
          <motion.p
            {...fadeUp(0.16)}
            className="text-white/70 text-base md:text-[1.05rem] leading-relaxed max-w-lg font-light"
          >
            Elige quién te atenderá y revisa su próxima hora disponible. Completa tus datos
            y nuestro equipo confirma contigo el horario.
          </motion.p>
        </div>
      </section>

      {/* ── Grid de especialistas ── */}
      <section className="relative bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-20">
          {/* Filtro rápido de disponibilidad */}
          <motion.div
            {...fadeUp(0)}
            className="flex justify-end mb-10"
          >
            <div className="inline-flex items-center gap-1 bg-white rounded-full shadow-md border border-gray-100 p-1">
              {(
                [
                  { value: 'todos', label: 'Todos' },
                  { value: 'disponibles', label: 'Disponibles ahora' },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFiltro(opt.value)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    filtro === opt.value
                      ? 'bg-teal-primary text-white shadow-sm'
                      : 'text-[#2a3044]/55 hover:text-teal-primary'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>

          {especialistasFiltrados.length === 0 ? (
            <p className="text-sm text-[#2a3044]/50 italic">
              No hay especialistas disponibles con este filtro por ahora.
            </p>
          ) : (
            <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white overflow-hidden">
              {especialistasFiltrados.map((esp, idx) => {
                const disponible = Boolean(esp.horarios?.length)
                const proximo = esp.horarios?.[0]
                const totalHoras = esp.horarios?.reduce((acc, h) => acc + h.horas.length, 0) ?? 0

                return (
                  <motion.div
                    key={esp.slug}
                    {...fadeUp(Math.min(idx * 0.04, 0.24))}
                    className={`flex flex-col sm:flex-row sm:items-center gap-6 p-8 transition-colors duration-300 ${
                      disponible ? 'hover:bg-teal-primary/[0.03]' : 'opacity-90'
                    }`}
                  >
                    {/* Avatar + identidad */}
                    <div className="flex items-center gap-5 sm:w-80 shrink-0">
                      <div
                        className={`relative w-20 h-20 rounded-full shrink-0 ring-4 ${
                          disponible ? 'ring-teal-primary/10' : 'ring-gray-100'
                        }`}
                      >
                        {esp.foto ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={esp.foto}
                            alt={esp.nombre}
                            className={`w-full h-full rounded-full object-cover object-top ${
                              disponible ? '' : 'grayscale opacity-60'
                            }`}
                          />
                        ) : (
                          <div
                            className={`w-full h-full rounded-full flex items-center justify-center font-heading font-bold text-xl ${
                              disponible ? 'bg-teal-primary/10 text-teal-primary' : 'bg-gray-100 text-gray-300'
                            }`}
                          >
                            {iniciales(esp.nombre)}
                          </div>
                        )}
                        {disponible && (
                          <span className="absolute bottom-0.5 right-0.5 w-5 h-5 rounded-full bg-teal-primary ring-2 ring-white" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3
                          className={`font-heading font-bold text-lg leading-snug ${
                            disponible ? 'text-[#2a3044]' : 'text-[#2a3044]/45'
                          }`}
                        >
                          {esp.nombre}
                        </h3>
                        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-primary/70 mt-1.5">
                          <BadgeCheck size={13} className="shrink-0" />
                          {esp.nota ?? esp.titulo}
                        </p>
                      </div>
                    </div>

                    {/* Dirección + disponibilidad */}
                    <div className="flex-1 min-w-0">
                      {disponible && proximo ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-[#2a3044]/60">
                            <MapPin size={15} className="text-teal-primary shrink-0" />
                            {esp.direccion}
                          </div>
                          <div className="inline-flex items-center gap-2.5 text-sm font-semibold text-teal-primary bg-teal-primary/8 pl-3.5 pr-2 py-2 rounded-full w-fit">
                            <Calendar size={14} className="shrink-0" />
                            {proximo.dia}, {proximo.fecha}
                            {totalHoras > 1 && (
                              <span className="text-[11px] font-bold bg-teal-primary/12 text-teal-primary/80 px-2 py-0.5 rounded-full">
                                +{totalHoras - 1}
                              </span>
                            )}
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-[#2a3044]/40 italic">
                          Lo sentimos, no hay horas disponibles
                        </p>
                      )}
                    </div>

                    {/* Acción */}
                    <div className="sm:w-64 shrink-0">
                      {disponible ? (
                        <Link
                          href={`/agendar/${esp.slug}`}
                          className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold bg-teal-primary/10 text-teal-primary hover:bg-teal-primary hover:text-white transition-colors"
                        >
                          Ver horarios disponibles
                          <ChevronRight size={16} />
                        </Link>
                      ) : (
                        <a
                          href={`https://wa.me/56936909397?text=${encodeURIComponent(
                            `Hola, quisiera saber disponibilidad con ${esp.nombre}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full border border-gray-200 text-[#2a3044]/50 text-sm font-medium hover:border-teal-primary/40 hover:text-teal-primary transition-colors"
                        >
                          <MessageCircle size={15} />
                          Consultar por WhatsApp
                        </a>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
