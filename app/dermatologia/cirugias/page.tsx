'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Clock, Stethoscope, Phone, MessageCircle, CheckCircle2 } from 'lucide-react'

const vp = { once: true, margin: '-60px' as const }

const procedimientos = [
  {
    num: '01',
    title: 'Biopsias de piel',
    desc: 'Extirpación de tejido para estudio histopatológico. Diagnóstico preciso de lesiones sospechosas.',
  },
  {
    num: '02',
    title: 'Extirpación de nevos',
    desc: 'Extracción de lunares con técnica quirúrgica adecuada según tipo y localización.',
  },
  {
    num: '03',
    title: 'Lesiones sobresalientes',
    desc: 'Resección de fibromas, verrugas y queratosis seborreicas con mínima cicatriz.',
  },
  {
    num: '04',
    title: 'Tumores subcutáneos',
    desc: 'Extirpación de quistes epidérmicos y lipomas bajo anestesia local ambulatoria.',
  },
  {
    num: '05',
    title: 'Matricectomía',
    desc: 'Cirugía de la matriz ungueal para tratar uñas encarnadas de forma definitiva.',
  },
  {
    num: '06',
    title: 'Onicectomía',
    desc: 'Extirpación total o parcial de la uña en casos que lo requieran.',
  },
  {
    num: '07',
    title: 'Tumores malignos',
    desc: 'Extirpación y/o biopsia de lesiones malignas con márgenes quirúrgicos adecuados.',
  },
]

const garantias = [
  {
    icon: ShieldCheck,
    title: 'Bajo riesgo',
    desc: 'Procedimientos superficiales con anestesia local o troncular. Sin hospitalización.',
  },
  {
    icon: Clock,
    title: 'Ambulatorio',
    desc: 'Llegas, te operan y te vas el mismo día. Sin exámenes preoperatorios en la mayoría de los casos.',
  },
  {
    icon: Stethoscope,
    title: 'Evaluación previa',
    desc: 'Tu dermatólogo cirujano evalúa cada caso, explica riesgos y beneficios antes de programar.',
  },
]

export default function CirugiasPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative w-full min-h-[88vh] flex items-end pb-20 md:pb-32 px-6 md:px-16 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.18]">
          <Image
            src="/images/bg-cirugias.jpg"
            alt="Cirugía dermatológica Dermaclinica"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-[11px] font-medium text-white/80 tracking-wider uppercase">
                Dermatología Quirúrgica
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-heading font-semibold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.07] mb-6 tracking-tight"
            >
              Cirugías Menores<br className="hidden md:block" /> Dermatológicas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="text-base md:text-[1.05rem] text-white/65 max-w-[440px] mb-10 leading-relaxed font-light"
            >
              Procedimientos ambulatorios de bajo riesgo, realizados por dermatólogos
              cirujanos en pabellón equipado. Sin hospitalización.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#2a3044] font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg"
              >
                <Phone size={14} />
                Agendar evaluación
              </Link>
              <a
                href="https://wa.me/56936909397"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll line */}
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

      {/* ── Garantías ── */}
      <section className="py-16 bg-[#f7f8fc] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {garantias.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="flex gap-5 items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-teal-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#2a3044] mb-1">{title}</p>
                  <p className="text-sm text-[#2a3044]/55 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿En qué consisten? — split layout ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-4">
                Cirugía dermatológica
              </p>
              <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] leading-snug mb-6">
                Seguras, rápidas<br /> y sin hospitalización
              </h2>
              <div className="space-y-4 text-[#2a3044]/65 text-[0.95rem] leading-relaxed">
                <p>
                  La gran mayoría de las cirugías dermatológicas son procedimientos de
                  <strong className="text-[#2a3044]/80 font-semibold"> cirugía menor</strong>: de bajo riesgo, superficiales, con anestesia local y de carácter ambulatorio.
                </p>
                <p>
                  En general no requieren exámenes preoperatorios, aunque en tumores
                  subcutáneos puede solicitarse una ecografía de partes blandas.
                </p>
                <p>
                  Antes de programar, el dermatólogo cirujano realiza una evaluación
                  clínica completa para explicarte beneficios, riesgos e indicaciones.
                </p>
              </div>

              <motion.hr
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={vp}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{ originX: 0 }}
                className="border-t border-gray-100 my-8"
              />

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-primary/10 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-teal-primary" />
                </div>
                <p className="text-sm text-[#2a3044]/60">
                  Pabellón de cirugía menor de alto nivel en Temuco
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1.07 }}
                whileInView={{ scale: 1 }}
                viewport={vp}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/bg-cirugias.jpg"
                  alt="Equipo quirúrgico Dermaclinica"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#2a3044] shadow-sm">
                  Equipo DC en pabellón
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Procedimientos ── */}
      <section className="py-24 bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
              Procedimientos
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044]">
              ¿Qué cirugías realizamos?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {procedimientos.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group flex gap-6 items-start p-6 md:p-7 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-primary/20 transition-all duration-300"
              >
                <span className="font-heading font-bold text-3xl text-teal-primary/20 group-hover:text-teal-primary/40 transition-colors duration-300 leading-none shrink-0 w-10">
                  {num}
                </span>
                <div>
                  <p className="font-heading font-semibold text-[#2a3044] mb-1.5">{title}</p>
                  <p className="text-sm text-[#2a3044]/55 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-6 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden bg-[#2a3044] text-white"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/Fachada_w1200_1200_675.jpg"
                alt="Dermaclinica Temuco"
                fill
                className="object-cover opacity-20"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a3044]/95 via-[#2a3044]/80 to-[#2a3044]/50" />
            </div>

            <div className="relative z-10 px-10 md:px-20 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
              <div className="max-w-lg">
                <p className="text-[11px] font-bold text-teal-light uppercase tracking-[0.22em] mb-4">
                  Primer paso
                </p>
                <h2 className="font-heading font-semibold text-3xl md:text-4xl leading-snug mb-4">
                  Agenda tu evaluación quirúrgica
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Tu dermatólogo cirujano evalúa la lesión, explica el procedimiento y
                  programa la cirugía. Todo en la misma clínica, sin derivaciones.
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
          </motion.div>
        </div>
      </section>

    </div>
  )
}
