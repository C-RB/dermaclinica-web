'use client'

import Link from 'next/link'
import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowUpRight, Phone, MessageCircle } from 'lucide-react'
import Hero from '@/components/Hero'
import SolutionsSection from '@/components/SolutionsSection'

// ─── DATA ───────────────────────────────────────────────────────────────────

const servicios = [
  {
    image: '/images/service_laser.png',
    title: 'Depilación Láser',
    desc: 'Láser diodo de 808nm para todo tipo de piel. Sin dolor, sin cicatrices, con reducción permanente desde la primera sesión.',
    tag: 'Más popular',
    href: '/estetica/depilacion',
  },
  {
    image: '/images/service_cooltech.png',
    title: 'CoolTech',
    desc: 'Elimina grasa localizada sin cirugía ni anestesia. La criolipólisis más avanzada disponible en Temuco.',
    tag: 'Sin cirugía',
    href: '/estetica/cooltech',
  },
  {
    image: '/images/service_facial.png',
    title: 'Cosmetología',
    desc: 'Protocolos personalizados para mejorar la textura, luminosidad y salud de tu piel. Con seguimiento dermatológico.',
    tag: 'Personalizado',
    href: '/estetica/cosmetologia',
  },
  {
    image: '/images/service_botox.png',
    title: 'Toxina Botulínica',
    desc: 'Resultados naturales aplicados por dermatólogos, no por estéticas. Precisión clínica en cada procedimiento.',
    tag: 'Médico',
    href: '/dermatologia/inyeccion',
  },
]

const stats = [
  { prefix: '', value: 6, suffix: '', label: 'Dermatólogos certificados' },
  { prefix: '+', value: 15, suffix: '', label: 'Años en Temuco' },
  { prefix: '+', value: 5000, suffix: '', label: 'Pacientes atendidos' },
  { prefix: '', value: 100, suffix: '%', label: 'Respaldo clínico' },
]

const doctores = [
  { name: 'Dr. Gastón Briceño', role: 'Médico Dermatólogo', image: '/images/team01.jpg' },
  { name: 'Dra. Yesenia Valenzuela', role: 'Médico Dermatólogo', image: '/images/team02.jpg' },
  { name: 'Dr. M. Á. Lassalle', role: 'Médico Dermatólogo', image: '/images/team04.jpg' },
  { name: 'Dr. Cristian Pinto', role: 'Médico Dermatólogo', image: '/images/dr-pinto-1.jpeg' },
  { name: 'Dra. Fernanda Sepúlveda', role: 'Médico Dermatólogo', image: '/images/fernanda2.jpg' },
  { name: 'Dra. Isabel Herrera', role: 'Médico Dermatólogo', image: '/images/isabel2.jpg' },
]

// ─── STAT COUNTER ────────────────────────────────────────────────────────────

function StatCounter({
  value,
  prefix,
  suffix,
  label,
}: {
  value: number
  prefix: string
  suffix: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  const formatted =
    value >= 1000 ? display.toLocaleString('de-DE') : display.toString()

  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5">
      <span className="font-heading font-bold text-4xl md:text-5xl text-[#2a3044] tabular-nums">
        {prefix}
        {formatted}
        {suffix}
      </span>
      <span className="text-sm text-[#2a3044]/50 text-center">{label}</span>
    </div>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const servicesRef = useRef<HTMLElement>(null)

  return (
    <>
      <Hero />

      {/* ── Stats strip ── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <StatCounter {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios: grid 2×2 ── */}
      <section ref={servicesRef} className="py-24 bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
          >
            <div>
              <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
                Especialidades
              </p>
              <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] leading-snug">
                Dermatología médica<br className="hidden md:block" /> y estética clínica
              </h2>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2a3044]/40 hover:text-teal-primary transition-colors shrink-0"
            >
              Ver todos los servicios <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          {/* Grid 2×2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicios.map(({ image, title, desc, tag, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <Link href={href} className="group block bg-white overflow-hidden hover:shadow-md transition-shadow duration-300">
                  {/* Imagen */}
                  <div className="aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Texto */}
                  <div className="p-6 border-b-2 border-transparent group-hover:border-teal-primary transition-colors duration-300">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-teal-primary mb-3">
                      {tag}
                    </span>
                    <h3 className="font-heading font-semibold text-xl text-[#2a3044] mb-2 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-[#2a3044]/50 leading-relaxed mb-4">
                      {desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2a3044]/30 group-hover:text-teal-primary transition-colors duration-300">
                      Ver tratamiento
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Soluciones ── */}
      <SolutionsSection />

      {/* ── Equipo médico ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
                Nuestro equipo
              </p>
              <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044]">
                Especialistas que te atienden
              </h2>
            </div>
            <Link
              href="/doctores"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2a3044]/50 hover:text-teal-primary transition-colors shrink-0"
            >
              Ver equipo completo <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {doctores.map(({ name, role, image }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="group flex flex-col items-center text-center gap-3"
              >
                {/* Photo */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
                {/* Info */}
                <div>
                  <p className="font-heading font-semibold text-sm text-[#2a3044] leading-snug">{name}</p>
                  <p className="text-[11px] text-[#2a3044]/45 mt-0.5">{role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: Contacto ── */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-[#2a3044] text-white"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Fachada_w1200_1200_675.jpg"
            alt="Dermaclinica Temuco"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a3044]/95 via-[#2a3044]/80 to-[#2a3044]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-lg">
            <p className="text-[11px] font-bold text-teal-light uppercase tracking-[0.22em] mb-4">
              ¿Lista para comenzar?
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl leading-snug mb-4">
              Cuida tu piel con el respaldo médico que merece
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Agenda tu consulta y recibe una evaluación personalizada con nuestro equipo
              de dermatólogos en Temuco. Lunes a viernes, 9:00 – 17:30 hrs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch gap-3 shrink-0">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#2a3044] font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg whitespace-nowrap"
            >
              <Phone size={15} />
              Agendar consulta
            </Link>
            <a
              href="https://wa.me/56936909397"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      </motion.section>
    </>
  )
}
