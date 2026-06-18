'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { MessageCircle, Phone, CheckCircle2, ShieldCheck, Zap, Smile, ChevronDown } from 'lucide-react'
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

const beneficios = [
  {
    icon: Zap,
    titulo: 'La más efectiva',
    desc: 'Puede eliminar hasta un 80% del vello dependiendo del tipo de vello y piel.',
    stat: '80%',
  },
  {
    icon: Smile,
    titulo: 'La menos dolorosa',
    desc: 'Puede ser hasta un 90% menos dolorosa que las técnicas tradicionales de depilación.',
    stat: '90%',
  },
  {
    icon: ShieldCheck,
    titulo: 'Respaldada por dermatólogos',
    desc: 'Profesionales especializados en técnicas y cuidados personalizados de la depilación láser.',
    stat: '6 Dr.',
  },
]

const pasos = [
  'La tecnología asistida de vacío succiona la piel dentro del aplicador. Así, la piel siente la presión del vacío en lugar de sentir la emisión del láser.',
  'La piel se afina al ser estirada mientras que el vello se acerca a la fuente de energía. Así, la densidad de los melanocitos de la piel disminuye y menos energía es absorbida por la epidermis.',
  'La presión de vacío comprime los tejidos y los vasos circundantes temporalmente.',
  'También la sangre es temporalmente desplazada. Menos energía será absorbida por la oxihemoglobina.',
  'La energía va directamente al cromóforo. De esta manera más protones son capaces de llegar a la melanina del vello que absorbe esta energía lumínica.',
  'La energía se acumula en el folículo piloso. El exceso de calor lo daña e imposibilita su posterior crecimiento.',
]

type PrecioZona = { zona: string; sesion: string; pack: string; sesiones: number }

const preciosRostro: PrecioZona[] = [
  { zona: 'Nariz', sesion: '$14.000', pack: '$85.000', sesiones: 8 },
  { zona: 'Oídos', sesion: '$14.000', pack: '$85.000', sesiones: 8 },
  { zona: 'Bozo', sesion: '$14.000', pack: '$85.000', sesiones: 8 },
  { zona: 'Entrecejo', sesion: '$14.000', pack: '$85.000', sesiones: 8 },
  { zona: 'Frente', sesion: '$21.000', pack: '$110.000', sesiones: 8 },
  { zona: 'Labio', sesion: '$14.000', pack: '$85.000', sesiones: 8 },
  { zona: 'Mejillas', sesion: '$21.000', pack: '$110.000', sesiones: 8 },
  { zona: 'Mentón', sesion: '$14.000', pack: '$85.000', sesiones: 8 },
  { zona: 'Patillas', sesion: '$14.000', pack: '$85.000', sesiones: 8 },
  { zona: 'Pómulos', sesion: '$14.000', pack: '$85.000', sesiones: 8 },
  { zona: 'Borde Basilar', sesion: '$17.000', pack: '$95.000', sesiones: 8 },
  { zona: '1/2 Rostro', sesion: '$29.000', pack: '$170.000', sesiones: 8 },
  { zona: 'Rostro completo', sesion: '$45.000', pack: '$260.000', sesiones: 8 },
  { zona: 'Cuello', sesion: '$21.000', pack: '$120.000', sesiones: 8 },
  { zona: '1/2 Cuello', sesion: '$17.000', pack: '$95.000', sesiones: 8 },
]

const preciosCuerpo: PrecioZona[] = [
  { zona: 'Hombros', sesion: '$20.000', pack: '$95.000', sesiones: 6 },
  { zona: 'Axilas', sesion: '$18.000', pack: '$85.000', sesiones: 6 },
  { zona: 'Areola', sesion: '$17.000', pack: '$80.000', sesiones: 6 },
  { zona: '1/3 Tórax anterior o posterior', sesion: '$25.000', pack: '$100.000', sesiones: 6 },
  { zona: '1/2 Tórax anterior o posterior', sesion: '$30.000', pack: '$130.000', sesiones: 6 },
  { zona: 'Tórax anterior o posterior', sesion: '$40.000', pack: '$160.000', sesiones: 6 },
  { zona: '1/2 Abdomen', sesion: '$25.000', pack: '$100.000', sesiones: 6 },
  { zona: 'Abdomen completo', sesion: '$30.000', pack: '$130.000', sesiones: 6 },
  { zona: 'Línea alba 1/2 superior o inferior', sesion: '$15.000', pack: '$65.000', sesiones: 6 },
  { zona: 'Línea alba completa', sesion: '$18.000', pack: '$85.000', sesiones: 6 },
]

const preciosExtremidades: PrecioZona[] = [
  { zona: '1/2 Brazo', sesion: '$27.000', pack: '$120.000', sesiones: 6 },
  { zona: 'Brazo completo', sesion: '$39.000', pack: '$160.000', sesiones: 6 },
  { zona: 'Dorso dedos', sesion: '$14.000', pack: '$60.000', sesiones: 6 },
  { zona: '1/2 Pierna / Muslos', sesion: '$30.000', pack: '$140.000', sesiones: 6 },
  { zona: 'Pierna completa', sesion: '$45.000', pack: '$180.000', sesiones: 6 },
  { zona: 'Glúteo', sesion: '$25.000', pack: '$110.000', sesiones: 6 },
]

const preciosIntimo: PrecioZona[] = [
  { zona: 'Rebaje tradicional', sesion: '$18.000', pack: '$85.000', sesiones: 6 },
  { zona: 'Rebaje extendido', sesion: '$21.000', pack: '$95.000', sesiones: 6 },
  { zona: 'Rebaje Profundo', sesion: '$27.000', pack: '$120.000', sesiones: 6 },
]

const gruposPrecios = [
  { label: 'Rostro y cuello', data: preciosRostro },
  { label: 'Cuerpo', data: preciosCuerpo },
  { label: 'Extremidades', data: preciosExtremidades },
  { label: 'Zona íntima', data: preciosIntimo },
]

// ─── Tabla de precios ─────────────────────────────────────────────────────────

function TablaPrecios() {
  const [abierto, setAbierto] = useState<string | null>('Rostro y cuello')

  return (
    <section className="py-20 bg-[#faf9f7]">
      <div className="max-w-5xl mx-auto px-6 md:px-16">
        <motion.div {...fadeUp(0)} className="mb-12">
          <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-4">
            Aranceles 2025
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] leading-snug">
            Precios por zona
          </h2>
          <p className="text-sm text-[#2a3044]/45 mt-2">Valor sesión y pack completo según zona tratada.</p>
        </motion.div>

        <div className="space-y-3">
          {gruposPrecios.map(({ label, data }, gi) => (
            <motion.div
              key={label}
              {...fadeUp(gi * 0.08)}
              className="border border-gray-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => setAbierto(abierto === label ? null : label)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-heading font-semibold text-[#2a3044] text-base">{label}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#2a3044]/35">{data.length} zonas</span>
                  <ChevronDown
                    size={16}
                    className={`text-[#2a3044]/40 transition-transform duration-300 ${abierto === label ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {abierto === label && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border-t border-gray-100">
                    {/* Header row */}
                    <div className="grid grid-cols-3 px-6 py-2.5 bg-[#f7f8fc] text-[10px] font-bold uppercase tracking-wider text-[#2a3044]/40">
                      <span>Zona</span>
                      <span className="text-center">1 sesión</span>
                      <span className="text-center">Pack completo</span>
                    </div>
                    {data.map(({ zona, sesion, pack, sesiones }, i) => (
                      <div
                        key={zona}
                        className={`grid grid-cols-3 px-6 py-3.5 text-sm border-t border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-[#faf9f7]'}`}
                      >
                        <span className="text-[#2a3044]/80 font-medium">{zona}</span>
                        <span className="text-center text-[#2a3044] font-semibold">{sesion}</span>
                        <div className="text-center">
                          <span className="text-teal-primary font-bold">{pack}</span>
                          <span className="block text-[10px] text-[#2a3044]/30">({sesiones} sesiones)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp(0.3)} className="text-xs text-[#2a3044]/35 mt-6 text-center">
          * Precios en pesos chilenos. Los packs ofrecen el mejor valor por sesión. Consulta disponibilidad con nuestro equipo.
        </motion.p>
      </div>
    </section>
  )
}

// ─── Formulario ───────────────────────────────────────────────────────────────

function FormularioContacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const texto = `Hola, me llamo ${form.nombre}. Me interesa: ${form.servicio || 'Depilación Láser'}. ${form.mensaje} Mi email: ${form.email}. Teléfono: ${form.telefono}.`
    window.open(`https://wa.me/56936909397?text=${encodeURIComponent(texto)}`, '_blank')
  }

  const inputCls = "w-full bg-white border border-gray-200 px-4 py-3 text-sm text-[#2a3044] placeholder:text-[#2a3044]/30 focus:outline-none focus:border-teal-primary transition-colors"

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 md:gap-20 items-start">

        <motion.div {...fadeUp(0)}>
          <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-4">
            Evaluación sin costo
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] leading-snug mb-4">
            Solicita tu evaluación<br /> sin costo
          </h2>
          <p className="text-[#2a3044]/55 text-sm leading-relaxed mb-8">
            Nuestro equipo evaluará tu tipo de piel y vello para recomendarte el protocolo ideal.
            Sin compromisos. Respuesta en menos de 24 horas.
          </p>
          <div className="space-y-3">
            {[
              'Diagnóstico personalizado de piel y vello',
              'Plan de sesiones a medida',
              'Presupuesto sin letra chica',
              'Atención por profesionales certificados',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 text-sm text-[#2a3044]/65">
                <CheckCircle2 size={15} className="text-teal-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form {...fadeUp(0.1)} onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text" placeholder="Tu nombre" required
            className={inputCls}
            value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
          />
          <input
            type="email" placeholder="Tu correo electrónico" required
            className={inputCls}
            value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          />
          <input
            type="tel" placeholder="Teléfono"
            className={inputCls}
            value={form.telefono} onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
          />
          <select
            className={`${inputCls} appearance-none`}
            value={form.servicio} onChange={e => setForm(f => ({ ...f, servicio: e.target.value }))}
          >
            <option value="">¿Qué zona te interesa?</option>
            <option>Rostro y cuello</option>
            <option>Axilas</option>
            <option>Piernas</option>
            <option>Zona íntima</option>
            <option>Cuerpo completo</option>
            <option>Otro</option>
          </select>
          <textarea
            placeholder="Tu mensaje (opcional)" rows={4}
            className={`${inputCls} resize-none`}
            value={form.mensaje} onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))}
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 bg-teal-primary text-white font-semibold text-sm hover:bg-teal-secondary transition-colors"
          >
            <MessageCircle size={15} />
            Enviar por WhatsApp
          </button>
        </motion.form>

      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DepilacionPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[88vh] flex items-end pb-16 md:pb-24 px-6 md:px-16 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.15]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/depilacion.jpg" alt="Depilación Láser Dermaclinica" className="w-full h-full object-cover object-center" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-[11px] font-bold text-white/50 uppercase tracking-[0.22em] mb-5"
            >
              Dermaclinica · LightSheer Duet
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }}
              className="font-heading font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-tight mb-6"
            >
              Depilación<br />
              <span className="text-teal-light">Láser</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.16 }}
              className="text-white/65 text-[1rem] leading-relaxed max-w-sm mb-10"
            >
              La tecnología LightSheer Duet para resultados permanentes, con el menor dolor y el respaldo de dermatólogos certificados.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.22 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://wa.me/56936909397"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#2a3044] font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg"
              >
                Solicita evaluación sin costo
              </a>
              <a
                href="https://wa.me/56936909397"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3 Beneficios ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {beneficios.map(({ icon: Icon, titulo, desc, stat }, i) => (
              <motion.div
                key={titulo}
                {...fadeUp(i * 0.1)}
                className="flex flex-col items-start gap-4 px-0 md:px-10 py-10 md:py-8 first:pl-0 last:pr-0"
              >
                <div className="flex items-center gap-4">
                  <span className="font-heading font-bold text-4xl text-teal-primary">{stat}</span>
                  <Icon size={22} className="text-teal-primary/50" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-[#2a3044] mb-2">{titulo}</h3>
                  <p className="text-sm text-[#2a3044]/55 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tecnología LightSheer ── */}
      <section className="py-20 bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-4">
              Tecnología
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] leading-snug mb-6">
              Láser LightSheer Duet
            </h2>
            <p className="text-[#2a3044]/55 text-[0.95rem] leading-relaxed mb-6">
              El LightSheer Duet de Lumenis es el estándar de oro mundial en depilación láser.
              Su tecnología de vacío asistido revoluciona el procedimiento: succiona la piel
              hacia el aplicador para que sientas la presión en lugar del calor, haciendo el
              tratamiento prácticamente indoloro.
            </p>
            <div className="space-y-3">
              {['Diodo 805nm — efectivo en todo tipo de piel', 'Sistema de vacío asistido patentado', 'Cabezal grande: sesiones hasta 3x más rápidas', 'Certificación FDA y CE'].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-[#2a3044]/65">
                  <CheckCircle2 size={14} className="text-teal-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.75 }}
            className="flex items-center justify-center bg-white p-10 border border-gray-100"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/laser-lightsheer.jpg"
              alt="LightSheer Duet — Lumenis"
              className="w-full max-w-xs object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Experta: Deyanira ── */}
      <section className="py-20 bg-[#2a3044] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8 }}
            className="relative order-last md:order-first"
          >
            <div className="aspect-square max-w-xs mx-auto overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/deyanira-vilchez.jpg"
                alt="Deyanira Vilchez — Kinesióloga"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-teal-primary px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Kinesióloga</p>
              <p className="font-heading font-semibold text-sm text-white">Deyanira Vilchez</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <p className="text-[11px] font-bold text-teal-light uppercase tracking-[0.22em] mb-6">
              Procedimientos en manos de expertos
            </p>
            <blockquote className="relative">
              <span className="absolute -top-4 -left-2 text-7xl text-teal-primary/20 font-serif leading-none select-none">"</span>
              <p className="font-heading font-medium text-xl md:text-2xl text-white leading-relaxed pl-6 mb-6">
                Creo que además de brindar procedimientos efectivos, nuestros pacientes merecen un trato respetuoso y en un contexto de privacidad.
              </p>
            </blockquote>
            <div className="pl-6">
              <p className="font-heading font-semibold text-white text-sm">Deyanira Vilchez</p>
              <p className="text-white/40 text-xs mt-0.5">Kinesióloga · Dermaclinica Temuco</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Cómo actúa el LightSheer ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <motion.div {...fadeUp(0)} className="mb-14">
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-4">
              Mecanismo de acción
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#2a3044] leading-snug">
              ¿Cómo actúa el LightSheer Duet?
            </h2>
          </motion.div>

          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-100 hidden md:block" />

            <div className="space-y-0">
              {pasos.map((paso, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-6 md:gap-8 py-6 border-b border-gray-50 last:border-0"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-teal-primary/10 text-teal-primary font-heading font-bold text-sm z-10 relative">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm text-[#2a3044]/65 leading-relaxed pt-2.5">{paso}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="bg-teal-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {[
            { titulo: 'Confianza y privacidad para ti', desc: 'Cada sesión se realiza en un espacio privado y cómodo, con protocolos de higiene estrictos y atención personalizada.' },
            { titulo: 'Salud para tu piel', desc: 'Todos nuestros tratamientos están respaldados por dermatólogos. Tu piel está en las mejores manos.' },
          ].map(({ titulo, desc }, i) => (
            <motion.div key={titulo} {...fadeUp(i * 0.1)} className="px-0 md:px-12 py-8 first:pl-0 last:pr-0">
              <h3 className="font-heading font-semibold text-lg text-white mb-2">{titulo}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Precios ── */}
      <TablaPrecios />

      {/* ── CTA final ── */}
      <section className="bg-[#2a3044] py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold text-teal-light uppercase tracking-[0.22em] mb-2">¿Lista para comenzar?</p>
            <p className="font-heading font-semibold text-xl md:text-2xl text-white">Tu evaluación es gratis y sin compromiso</p>
            <p className="text-white/40 text-sm mt-1">Lunes a viernes, 9:00 – 17:30 hrs.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://wa.me/56936909397"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-primary text-white font-semibold text-sm hover:bg-teal-secondary transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <Phone size={15} />
              Agendar
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
