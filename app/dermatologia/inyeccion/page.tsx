'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Clock, ShieldCheck, AlertCircle, Phone, MessageCircle, FlaskConical, Sparkles } from 'lucide-react'

// Viewport preset
const vp = { once: true, margin: '-60px' as const }

// Stagger wrappers para listas
const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075, delayChildren: 0.05 } },
}
const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.38, ease: 'easeOut' } },
}

// Stagger para grids (benefits, stats)
const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}
const gridItem = {
  hidden: { opacity: 0, scale: 0.93 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, type: 'spring', stiffness: 220, damping: 20 } },
}

// ─── Sección Botox con tabs ────────────────────────────────────────────────────

const botoxMedica = [
  'Hiperhidrosis axilar, palmo-plantar y facial',
  'Dishidrosis, Bromohidrosis, Intertrigo',
  'Cicatrices y Piloleiomiomas',
  'Rosácea, síndrome de Raynaud, neuralgia post-herpética',
]
const botoxEstetica = [
  'Arrugas dinámicas faciales y del cuello',
  'Contorno facial y elevación de cejas',
]

function BotoxContent() {
  const [tab, setTab] = useState<'medica' | 'estetica'>('medica')
  const items = tab === 'medica' ? botoxMedica : botoxEstetica

  return (
    <div className="flex flex-col gap-6">

      {/* Badge + Título + Descripción */}
      <div>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.45 }}
          className="inline-block px-3.5 py-1.5 rounded-full bg-teal-primary/10 text-teal-primary text-xs font-bold tracking-wide mb-4"
        >
          Neuromoduladores
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] mb-4"
        >
          Toxina Botulínica
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="text-[#2a3044]/60 leading-relaxed text-sm"
        >
          Neurotoxina purificada que bloquea la señal nerviosa de forma selectiva y transitoria.
          Cuenta con décadas de evidencia clínica tanto en medicina como en estética facial.
        </motion.p>
      </div>

      {/* Info strip: 3 pills en una fila */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-2"
      >
        {[
          { icon: <Clock size={13} className="text-teal-primary" />, label: '3 – 6 meses', sub: 'de duración' },
          { icon: <ShieldCheck size={13} className="text-teal-primary" />, label: 'Alta seguridad', sub: 'evidencia clínica' },
          { icon: <FlaskConical size={13} className="text-teal-primary" />, label: 'Producto biológico', sub: 'uso médico' },
        ].map(({ icon, label, sub }) => (
          <div key={label} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#f7f8fc] border border-gray-100">
            {icon}
            <span className="text-xs font-semibold text-[#2a3044]">{label}</span>
            <span className="text-xs text-[#2a3044]/40">· {sub}</span>
          </div>
        ))}
      </motion.div>

      {/* Tabs interactivos */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {/* Tab buttons */}
        <div className="flex gap-1 p-1 bg-gray-100/80 rounded-xl w-fit mb-5">
          {([
            { key: 'medica', label: 'Dermatología Médica', icon: <FlaskConical size={13} /> },
            { key: 'estetica', label: 'Dermoestética', icon: <Sparkles size={13} /> },
          ] as const).map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-200 ${
                tab === key
                  ? 'text-[#2a3044]'
                  : 'text-[#2a3044]/45 hover:text-[#2a3044]/70'
              }`}
            >
              {tab === key && (
                <motion.span
                  layoutId="botox-tab-bg"
                  className="absolute inset-0 bg-white rounded-lg shadow-sm"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {icon}
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* Tab content con transición */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="space-y-2.5"
          >
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[#2a3044]/65">
                <CheckCircle2 size={15} className="text-teal-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </motion.div>

      {/* Contraindicaciones */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.45, delay: 0.3 }}
        className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50 border border-amber-100"
      >
        <AlertCircle size={15} className="text-amber-500 mt-0.5 shrink-0" />
        <p className="text-xs text-amber-700/80 leading-relaxed">
          <span className="font-bold text-amber-700">Contraindicado</span> en miastenia gravis,
          infecciones locales, embarazo, lactancia y con aminoglucósidos, sulfato de magnesio o
          bloqueadores de calcio.
        </p>
      </motion.div>

    </div>
  )
}

export default function InyeccionPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])

  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative w-full min-h-[68vh] flex items-end pb-16 md:pb-24 px-6 md:px-16 overflow-hidden">

        {/* Parallax background */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.15]">
          <Image
            src="/images/bg-toxina.jpg"
            alt="Tratamientos inyectables Dermaclinica Temuco"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-[11px] font-medium text-white/80 tracking-wider">
                Dermatología Médica · Estética Clínica
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-heading font-semibold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] mb-5 tracking-tight"
            >
              Inyección de Toxina,<br className="hidden md:block" /> Relleno y Microneedling
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="text-base md:text-lg text-white/65 max-w-lg leading-relaxed font-light"
            >
              Procedimientos mínimamente invasivos aplicados por dermatólogos certificados.
              Sin estéticas, sin intermediarios: respaldo clínico en cada procedimiento.
            </motion.p>
          </div>
        </div>

        {/* Scroll line animado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 right-8 md:right-16"
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

      {/* ── Nav ancla sticky ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 flex gap-1 overflow-x-auto py-3">
          {[
            { id: 'botox', label: 'Toxina Botulínica' },
            { id: 'hialuronico', label: 'Ácido Hialurónico' },
            { id: 'microneedling', label: 'Microneedling' },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 px-5 py-2 rounded-full text-sm font-semibold text-[#2a3044]/55 hover:text-[#2a3044] hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* ── Contenido ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-28">

        {/* ━━━ 1. TOXINA BOTULÍNICA ━━━ */}
        <section id="botox" className="scroll-mt-32">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

            {/* Imagen con zoom-reveal */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100"
            >
              <motion.div
                initial={{ scale: 1.07 }}
                whileInView={{ scale: 1 }}
                viewport={vp}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/treatment_botox.png"
                  alt="Toxina Botulínica"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            {/* Texto — componente con tabs */}
            <BotoxContent />
          </div>
        </section>

        {/* Separador animado */}
        <motion.hr
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={vp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="border-gray-100"
        />

        {/* ━━━ 2. ÁCIDO HIALURÓNICO ━━━ */}
        <section id="hialuronico" className="scroll-mt-32">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

            <div className="flex flex-col gap-7">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.45 }}
                  className="inline-block px-3.5 py-1.5 rounded-full bg-teal-primary/10 text-teal-primary text-xs font-bold tracking-wide mb-4"
                >
                  Rellenos Dérmicos
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] mb-4"
                >
                  Ácido Hialurónico
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.55, delay: 0.16 }}
                  className="text-[#2a3044]/60 leading-relaxed"
                >
                  Sustancia presente de forma natural en la piel. Cumple una función estructural clave
                  en la hidratación y el volumen facial. Se inyecta mediante agujas muy finas, con
                  resultados visibles, reversibles y progresivos.
                </motion.p>
              </div>

              <motion.div
                variants={gridContainer}
                initial="hidden"
                whileInView="show"
                viewport={vp}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  { icon: <Clock className="w-5 h-5 text-teal-primary mt-0.5 shrink-0" />, title: '6 – 12 meses', sub: 'Se reabsorbe gradualmente' },
                  { icon: <ShieldCheck className="w-5 h-5 text-teal-primary mt-0.5 shrink-0" />, title: 'Reversible', sub: 'Efectos transitorios y seguros' },
                ].map(({ icon, title, sub }) => (
                  <motion.div
                    key={title}
                    variants={gridItem}
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 350 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-[#f7f8fc] border border-gray-100 cursor-default"
                  >
                    {icon}
                    <div>
                      <p className="font-semibold text-[#2a3044] text-sm">{title}</p>
                      <p className="text-xs text-[#2a3044]/50 mt-0.5 leading-relaxed">{sub}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={vp}
                  transition={{ duration: 0.4 }}
                  className="text-xs font-bold text-[#2a3044]/40 uppercase tracking-widest mb-4"
                >
                  Usos en Dermoestética
                </motion.p>
                <motion.ul variants={listContainer} initial="hidden" whileInView="show" viewport={vp} className="space-y-2.5">
                  {[
                    'Devolver volumen perdido en el rostro',
                    'Hidratar piel, cuello y manos',
                    'Mejorar contornos faciales',
                    'Perfilar la nariz y disimular ojeras',
                    'Rellenar arrugas estáticas',
                  ].map((item) => (
                    <motion.li key={item} variants={listItem} className="flex items-start gap-2.5 text-sm text-[#2a3044]/65">
                      <CheckCircle2 size={15} className="text-teal-primary mt-0.5 shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

            {/* Imagen con zoom-reveal */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100"
            >
              <motion.div
                initial={{ scale: 1.07 }}
                whileInView={{ scale: 1 }}
                viewport={vp}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/bg-facial.jpg"
                  alt="Hidratación y volumen con ácido hialurónico"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Separador animado */}
        <motion.hr
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={vp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="border-gray-100"
        />

        {/* ━━━ 3. MICRONEEDLING ━━━ */}
        <section id="microneedling" className="scroll-mt-32">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

            {/* Imagen con zoom-reveal */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100"
            >
              <motion.div
                initial={{ scale: 1.07 }}
                whileInView={{ scale: 1 }}
                viewport={vp}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/treatment_microneedling.png"
                  alt="Microneedling"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            <div className="flex flex-col gap-7">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.45 }}
                  className="inline-block px-3.5 py-1.5 rounded-full bg-teal-primary/10 text-teal-primary text-xs font-bold tracking-wide mb-4"
                >
                  Inducción de Colágeno
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] mb-4"
                >
                  Microneedling
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.55, delay: 0.16 }}
                  className="text-[#2a3044]/60 leading-relaxed"
                >
                  Técnica mínimamente invasiva con microagujas que estimula la producción de colágeno tipo I.
                  Genera un daño controlado que activa la reparación natural de la piel y crea microcanales
                  que potencian la absorción de activos.
                </motion.p>
              </div>

              <motion.div
                variants={gridContainer}
                initial="hidden"
                whileInView="show"
                viewport={vp}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  { icon: <Clock className="w-5 h-5 text-teal-primary mt-0.5 shrink-0" />, title: '30 – 60 min', sub: 'Por sesión' },
                  { icon: <ShieldCheck className="w-5 h-5 text-teal-primary mt-0.5 shrink-0" />, title: 'Mínima invasión', sub: 'Resultados visibles de inmediato' },
                ].map(({ icon, title, sub }) => (
                  <motion.div
                    key={title}
                    variants={gridItem}
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 350 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-[#f7f8fc] border border-gray-100 cursor-default"
                  >
                    {icon}
                    <div>
                      <p className="font-semibold text-[#2a3044] text-sm">{title}</p>
                      <p className="text-xs text-[#2a3044]/50 mt-0.5 leading-relaxed">{sub}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={vp}
                  transition={{ duration: 0.4 }}
                  className="text-xs font-bold text-[#2a3044]/40 uppercase tracking-widest mb-4"
                >
                  Beneficios y usos
                </motion.p>
                <motion.div
                  variants={gridContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={vp}
                  className="grid grid-cols-2 gap-2"
                >
                  {[
                    'Rejuvenecimiento facial',
                    'Tratamiento anti-acné',
                    'Cicatrices y estrías',
                    'Contorno de ojos',
                    'Despigmentación',
                    'Efecto tensor',
                  ].map((uso) => (
                    <motion.div
                      key={uso}
                      variants={gridItem}
                      whileHover={{ y: -2, backgroundColor: '#eef1f9' }}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f7f8fc] border border-gray-100"
                    >
                      <CheckCircle2 size={14} className="text-teal-primary shrink-0" />
                      <span className="text-sm font-medium text-[#2a3044]/70">{uso}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ── CTA final ── */}
      <div className="px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden bg-[#2a3044] text-white px-10 md:px-20 py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative max-w-md">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-[11px] font-bold text-teal-light uppercase tracking-[0.22em] mb-3"
              >
                ¿Te interesa algún tratamiento?
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="font-heading font-semibold text-2xl md:text-3xl leading-snug mb-3"
              >
                Agenda una consulta con nuestros dermatólogos
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-white/55 text-sm leading-relaxed"
              >
                Evaluamos tu caso de forma personalizada y te recomendamos el protocolo más adecuado.
                Lunes a viernes, 9:00 – 17:30 hrs.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
              className="relative flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 shrink-0"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#2a3044] font-semibold text-sm hover:bg-gray-50 transition-colors whitespace-nowrap shadow-md"
              >
                <Phone size={14} />
                Agendar consulta
              </Link>
              <a
                href="https://wa.me/56936909397"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors whitespace-nowrap"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </div>
  )
}
