'use client'

import { motion, useScroll, useTransform, useMotionValue, animate as fmAnimate } from 'framer-motion'
import { useRef, useState, useCallback, useEffect } from 'react'
import { MessageCircle, Phone, CheckCircle2, Sparkles, ShieldCheck, Zap, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react'
import Link from 'next/link'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const vp = { once: true, margin: '-60px' as const }
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const geneo = [
  {
    icon: ShieldCheck,
    titulo: 'Seguro',
    desc: 'Tecnología certificada, sin agujas y sin tiempo de recuperación. Apta para todo tipo de piel.',
  },
  {
    icon: Zap,
    titulo: 'Resultados inmediatos',
    desc: 'Mejora visible desde la primera sesión: piel más luminosa, firme y oxigenada.',
  },
  {
    icon: Sparkles,
    titulo: 'Personalizado',
    desc: 'Cada protocolo se adapta al diagnóstico de tu piel, diseñado junto a tu cosmetóloga.',
  },
]

const tratamientos = [
  {
    titulo: 'Limpieza facial profunda',
    desc: 'Eliminación de impurezas, puntos negros y células muertas con aparatología especializada. Deja la piel despejada, oxigenada y lista para absorber activos.',
    beneficio: 'Piel limpia y luminosa',
    duracion: '60 min',
    imagen: '/images/service_facial.png',
  },
  {
    titulo: 'Fototerapia luz azul',
    desc: 'Tratamiento con luz LED de espectro azul que elimina las bacterias responsables del acné y reduce la inflamación activa sin irritar ni dañar la piel.',
    beneficio: 'Control del acné activo',
    duracion: '40 min',
    imagen: '/images/solution_acne.png',
  },
  {
    titulo: 'Peelings químicos',
    desc: 'Renovación celular controlada mediante ácidos seleccionados según tu diagnóstico. Mejora textura, manchas, cicatrices superficiales y tono irregular.',
    beneficio: 'Renovación celular',
    duracion: '45 min',
    imagen: '/images/treatment_microneedling.png',
  },
  {
    titulo: 'Microdermabrasión',
    desc: 'Exfoliación mecánica con microcristales que elimina la capa córnea superficial. Suaviza líneas finas, cicatrices y devuelve luminosidad inmediata al rostro.',
    beneficio: 'Textura suavizada',
    duracion: '50 min',
    imagen: '/images/bg-facial.jpg',
  },
  {
    titulo: 'Radiofrecuencia',
    desc: 'Estimulación del colágeno mediante calor controlado en profundidad. Reafirma y tensa la piel de forma progresiva con resultados visibles y duraderos.',
    beneficio: 'Lifting no invasivo',
    duracion: '60 min',
    imagen: '/images/solution_rosacea.png',
  },
  {
    titulo: 'Drenaje linfático facial',
    desc: 'Masaje especializado de baja presión que activa el sistema linfático, reduce hinchazón, ojeras y retención de líquidos. Efecto relajante inmediato.',
    beneficio: 'Desinflamación y relax',
    duracion: '45 min',
    imagen: '/images/solution_aging.png',
  },
  {
    titulo: 'Tratamiento antiacné',
    desc: 'Protocolo combinado con activos específicos, fototerapia y limpieza profunda diseñado para controlar el acné activo y prevenir nuevas lesiones.',
    beneficio: 'Control total del acné',
    duracion: '70 min',
    imagen: '/images/solution_dermatitis.png',
  },
  {
    titulo: 'Tratamiento despigmentante',
    desc: 'Reducción de manchas, melasma y daño solar con ácidos depigmentantes, vitamina C estabilizada y protocolos de luz. Resultados progresivos y estables.',
    beneficio: 'Unifica el tono',
    duracion: '60 min',
    imagen: '/images/solution_acne.png',
  },
  {
    titulo: 'Tratamiento antiedad',
    desc: 'Restitución de la barrera cutánea con activos hialurónicos, péptidos y antioxidantes. Ideal para pieles secas, maduras o con signos de envejecimiento.',
    beneficio: 'Hidratación profunda',
    duracion: '65 min',
    imagen: '/images/solution_aging.png',
  },
  {
    titulo: 'Masajes estéticos faciales',
    desc: 'Técnicas manuales especializadas que mejoran la circulación, relajan la musculatura facial y aportan luminosidad y frescura inmediata al rostro.',
    beneficio: 'Luminosidad inmediata',
    duracion: '40 min',
    imagen: '/images/service_facial.png',
  },
]

const preciosIndividuales = [
  { nombre: 'Evaluación cosmetológica', precio: 'Gratis' },
  { nombre: 'Limpieza facial profunda', precio: '$32.000' },
  { nombre: 'Fototerapia luz azul (Lumiere)', precio: '$35.000' },
  { nombre: 'Peeling químico', precio: '$38.000' },
  { nombre: 'Microdermabrasión', precio: '$35.000' },
  { nombre: 'Radiofrecuencia', precio: '$45.000' },
  { nombre: 'Drenaje linfático facial', precio: '$32.000' },
  { nombre: 'Tratamiento antiacné', precio: '$40.000' },
  { nombre: 'Tratamiento despigmentante', precio: '$42.000' },
  { nombre: 'Tratamiento hidratante / antiedad', precio: '$42.000' },
  { nombre: 'Masaje estético facial', precio: '$28.000' },
]

const packs = [
  { nombre: 'Pack Limpieza x3', sesiones: '3 sesiones', precio: '$84.000' },
  { nombre: 'Pack Luminosidad', sesiones: '4 sesiones', precio: '$130.000' },
  { nombre: 'Pack Antiacné', sesiones: '6 sesiones', precio: '$210.000' },
  { nombre: 'Pack Antiedad', sesiones: '4 sesiones', precio: '$148.000' },
  { nombre: 'Pack Despigmentante', sesiones: '6 sesiones', precio: '$222.000' },
  { nombre: 'Pack Radiofrecuencia', sesiones: '6 sesiones', precio: '$240.000' },
  { nombre: 'Pack Fototerapia', sesiones: '6 sesiones', precio: '$180.000' },
  { nombre: 'Pack Microdermabrasión', sesiones: '4 sesiones', precio: '$125.000' },
  { nombre: 'Pack Combinado Premium', sesiones: '8 sesiones', precio: '$290.000' },
  { nombre: 'Pack Mantenimiento', sesiones: '12 sesiones', precio: '$380.000' },
  { nombre: 'Pack Novia / Quinceañera', sesiones: '6 sesiones', precio: '$198.000' },
]

// ─── Tratamientos Carousel ────────────────────────────────────────────────────

const SPRING = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.85 }

function TratamientosCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [current, setCurrent] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [paused, setPaused] = useState(false)
  const total = tratamientos.length

  const getTargetX = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return 0
    const card = track.children[index] as HTMLElement
    return card ? -card.offsetLeft : 0
  }, [])

  const scrollTo = useCallback((index: number) => {
    fmAnimate(x, getTargetX(index), SPRING)
    setCurrent(index)
  }, [x, getTargetX])

  const pauseAndResume = useCallback(() => {
    setPaused(true)
    const t = setTimeout(() => setPaused(false), 6000)
    return () => clearTimeout(t)
  }, [])

  const prev = () => { pauseAndResume(); scrollTo(Math.max(0, current - 1)) }
  const next = () => { pauseAndResume(); scrollTo(Math.min(total - 1, current + 1)) }

  // Auto-advance one by one, loops back
  useEffect(() => {
    if (showAll || paused) return
    const timer = setInterval(() => {
      setCurrent(i => {
        const nextIdx = (i + 1) % total
        fmAnimate(x, getTargetX(nextIdx), SPRING)
        return nextIdx
      })
    }, 3500)
    return () => clearInterval(timer)
  }, [showAll, paused, total, x, getTargetX])

  // no onScroll needed — state is always in sync
  const onScroll = undefined

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <motion.div
          {...{ initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: vp, transition: { duration: 0.65 } }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
              Tratamientos
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] leading-snug">
              Todos nuestros tratamientos faciales
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Ver todos toggle */}
            <button
              onClick={() => setShowAll(v => !v)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors duration-200 ${
                showAll
                  ? 'bg-teal-primary text-white border-teal-primary'
                  : 'bg-white text-[#2a3044]/50 border-gray-200 hover:border-teal-primary/40 hover:text-teal-primary'
              }`}
            >
              <LayoutGrid size={13} />
              {showAll ? 'Ver carrusel' : 'Ver todos'}
            </button>

            {/* Prev / Next — solo en modo carrusel */}
            {!showAll && (
              <div className="flex items-center gap-1">
                <button
                  onClick={prev}
                  disabled={current === 0}
                  className="w-9 h-9 flex items-center justify-center border border-gray-200 text-[#2a3044]/50 hover:text-teal-primary hover:border-teal-primary/40 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  disabled={current === total - 1}
                  className="w-9 h-9 flex items-center justify-center border border-gray-200 text-[#2a3044]/50 hover:text-teal-primary hover:border-teal-primary/40 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* ── Modo GRID ── */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {tratamientos.map((t, i) => (
              <TratamientoCard key={t.titulo} t={t} i={i} />
            ))}
          </motion.div>
        )}

        {/* ── Modo CAROUSEL ── */}
        {!showAll && (
          <>
            <div className="overflow-hidden">
              <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex gap-4"
              >
                {tratamientos.map((t, i) => (
                  <div
                    key={t.titulo}
                    className="shrink-0 w-[85vw] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <TratamientoCard t={t} i={i} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-8">
              {tratamientos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { pauseAndResume(); scrollTo(i) }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-6 h-1.5 bg-teal-primary'
                      : 'w-1.5 h-1.5 bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  )
}

function TratamientoCard({ t, i }: { t: typeof tratamientos[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3) }}
      className="group h-full bg-white border border-gray-100 hover:border-teal-primary/30 hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={t.imagen}
          alt={t.titulo}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Número badge */}
        <span className="absolute top-3 left-3 font-heading font-bold text-xs text-white bg-teal-primary/80 backdrop-blur-sm px-2.5 py-1 leading-none">
          {String(i + 1).padStart(2, '0')}
        </span>
        {/* Chip duración */}
        <span className="absolute top-3 right-3 text-[10px] font-medium text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 leading-none">
          {t.duracion}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        {/* Beneficio chip */}
        <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-teal-primary mb-2">
          {t.beneficio}
        </span>

        {/* Título */}
        <h3 className="font-heading font-semibold text-[#2a3044] text-base leading-snug mb-2">
          {t.titulo}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-[#2a3044]/50 leading-relaxed flex-1 mb-4">
          {t.desc}
        </p>

        {/* CTA */}
        <a
          href="https://wa.me/56936909397"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-primary border-t border-gray-100 pt-4 mt-auto hover:gap-3 transition-all duration-200"
        >
          <MessageCircle size={13} />
          Consultar por WhatsApp
        </a>
      </div>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CosmetologiaPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero: split — imagen derecha, texto izquierda ── */}
      <section ref={heroRef} className="relative overflow-hidden bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[85vh]">

          {/* Texto */}
          <div className="flex flex-col justify-center px-6 md:px-16 py-20 md:py-28">
            <motion.p
              {...fadeUp(0)}
              className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-5"
            >
              Dermaclinica · Temuco
            </motion.p>
            <motion.h1
              {...fadeUp(0.08)}
              className="font-heading font-semibold text-5xl md:text-6xl lg:text-7xl text-[#2a3044] leading-[1.0] tracking-tight mb-6"
            >
              Cosmetología<br />
              <span className="text-teal-primary">Facial</span>
            </motion.h1>
            <motion.p
              {...fadeUp(0.16)}
              className="text-[#2a3044]/55 text-[1rem] leading-relaxed max-w-[380px] mb-10"
            >
              Una ciencia dedicada a preservar y mejorar la salud de tu piel. Protocolos
              personalizados con tecnología de última generación y respaldo dermatológico.
            </motion.p>
            <motion.div {...fadeUp(0.22)} className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/56936909397"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal-primary text-white font-semibold text-sm hover:bg-teal-secondary transition-colors shadow-sm"
              >
                <MessageCircle size={15} />
                Agendar hora
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#2a3044]/15 text-[#2a3044] font-medium text-sm hover:bg-white transition-colors"
              >
                <Phone size={15} />
                Llamar
              </Link>
            </motion.div>
          </div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative min-h-[60vw] md:min-h-0"
          >
            <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.12]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bg-facial.jpg"
                alt="Cosmetología facial Dermaclinica"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            {/* Franja decorativa izquierda */}
            <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-[#faf9f7] to-transparent z-10" />
          </motion.div>
        </div>
      </section>

      {/* ── Intro: qué es cosmetología ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-4">
              ¿Qué es?
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] leading-snug mb-6">
              La ciencia que cuida tu piel desde adentro
            </h2>
            <div className="space-y-4 text-[#2a3044]/60 text-[0.95rem] leading-relaxed">
              <p>
                La cosmetología es la disciplina científica que estudia la composición, fabricación y
                efectos de los cosméticos sobre el cuerpo humano. Va mucho más allá de la estética:
                es salud de la piel.
              </p>
              <p>
                En Dermaclinica integramos cosmetología clínica con dermatología médica, lo que nos
                permite ofrecerte tratamientos con seguimiento profesional real. Cada protocolo está
                diseñado para tu tipo de piel, tu diagnóstico y tus objetivos.
              </p>
            </div>
          </motion.div>

          {/* Imagen de tratamiento */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.75 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/3limpiezas.jpg"
              alt="Tratamiento facial Dermaclinica"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/5 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── Especialista: Silvana ── */}
      <section className="py-20 bg-[#2a3044] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8 }}
            className="relative order-last md:order-first"
          >
            <div className="aspect-[3/4] max-w-xs mx-auto md:max-w-sm overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/silvana-principal.jpg"
                alt="Silvana Jara Gómez — Cosmetóloga"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Badge flotante */}
            <div className="absolute bottom-4 left-4 bg-teal-primary px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Cosmetóloga</p>
              <p className="font-heading font-semibold text-sm text-white">Silvana Jara G.</p>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div {...fadeUp(0.1)}>
            <p className="text-[11px] font-bold text-teal-light uppercase tracking-[0.22em] mb-4">
              Nuestra especialista
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl leading-snug mb-6">
              Silvana Jara Gómez
            </h2>
            <p className="text-white/60 text-[0.95rem] leading-relaxed mb-6">
              Cosmetóloga titulada con formación especializada en tratamientos faciales clínicos.
              Con años de experiencia atendiendo en Dermaclinica, Silvana combina diagnóstico
              personalizado con protocolos de última generación para lograr resultados visibles
              y duraderos.
            </p>
            <ul className="space-y-3">
              {[
                'Especialista en tratamientos despigmentantes y antiacné',
                'Formación en tecnología GENEO y radiofrecuencia',
                'Trabajo integrado con el equipo médico dermatológico',
                'Evaluación inicial gratuita para nuevos pacientes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-teal-light shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ── GENEO Technology ── */}
      <section className="py-20 bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div {...fadeUp(0)} className="mb-14 max-w-xl">
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-4">
              Tecnología
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] leading-snug mb-4">
              GENEO: oxigenación y regeneración celular
            </h2>
            <p className="text-[#2a3044]/55 text-[0.95rem] leading-relaxed">
              El sistema GENEO es la tecnología facial más avanzada disponible hoy. Estimula la
              oxigenación natural desde el interior de la piel, potencia la absorción de activos
              y activa la regeneración celular sin procedimientos invasivos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {geneo.map(({ icon: Icon, titulo, desc }, i) => (
              <motion.div
                key={titulo}
                {...fadeUp(i * 0.1)}
                className="bg-white p-8 border border-gray-100 hover:border-teal-primary/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-teal-primary/10 mb-5">
                  <Icon size={20} className="text-teal-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#2a3044] mb-3">{titulo}</h3>
                <p className="text-sm text-[#2a3044]/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tratamientos: carousel ── */}
      <TratamientosCarousel />

      {/* ── Precios: tabla dos columnas ── */}
      <section className="py-20 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-4">
              Aranceles 2025
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] leading-snug">
              Precios transparentes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Sesiones individuales */}
            <motion.div {...fadeUp(0)}>
              <h3 className="font-heading font-semibold text-lg text-[#2a3044] mb-4 pb-3 border-b border-gray-200">
                Sesiones individuales
              </h3>
              <div className="space-y-0">
                {preciosIndividuales.map(({ nombre, precio }, i) => (
                  <motion.div
                    key={nombre}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={vp}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className={`flex items-center justify-between py-3.5 border-b border-gray-100 ${
                      precio === 'Gratis' ? 'bg-teal-primary/5 px-3 -mx-3' : ''
                    }`}
                  >
                    <span className="text-sm text-[#2a3044]/70">{nombre}</span>
                    <span className={`text-sm font-bold tabular-nums ${
                      precio === 'Gratis' ? 'text-teal-primary' : 'text-[#2a3044]'
                    }`}>
                      {precio}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Packs */}
            <motion.div {...fadeUp(0.1)}>
              <h3 className="font-heading font-semibold text-lg text-[#2a3044] mb-4 pb-3 border-b border-gray-200">
                Packs y promociones
              </h3>
              <div className="space-y-0">
                {packs.map(({ nombre, sesiones, precio }, i) => (
                  <motion.div
                    key={nombre}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={vp}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="flex items-center justify-between py-3.5 border-b border-gray-100 group"
                  >
                    <div>
                      <p className="text-sm text-[#2a3044]/80 font-medium">{nombre}</p>
                      <p className="text-[11px] text-[#2a3044]/35">{sesiones}</p>
                    </div>
                    <span className="text-sm font-bold text-[#2a3044] tabular-nums">{precio}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-[#2a3044]/35 mt-4">
                * Los packs incluyen evaluación inicial gratuita. Precios en pesos chilenos, IVA incluido.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CTA final: full-bleed teal ── */}
      <section className="bg-teal-primary overflow-hidden relative">
        {/* Fondo decorativo */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden"
        >
          <span className="font-heading font-bold text-[18vw] leading-none text-white/5 whitespace-nowrap">
            FACIAL
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <motion.div {...fadeUp(0)} className="max-w-lg">
            <p className="text-[11px] font-bold text-white/50 uppercase tracking-[0.22em] mb-3">
              ¿Lista para empezar?
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white leading-snug mb-3">
              Tu primera evaluación es gratis
            </h2>
            <p className="text-white/65 text-sm leading-relaxed">
              Silvana evaluará tu tipo de piel y diseñará un protocolo personalizado.
              Sin compromisos, con respaldo dermatológico.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.12)} className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://wa.me/56936909397"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-teal-primary font-semibold text-sm hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <Phone size={15} />
              Agendar consulta
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
