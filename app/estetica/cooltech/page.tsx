'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const vp = { once: true, margin: '-60px' as const }
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const FEATURES = [
  {
    icon: '🌀',
    title: 'Efecto de vacío',
    desc: 'El aplicador succiona suavemente el pliegue de grasa, exponiendo el tejido adiposo al frío controlado de forma uniforme.',
  },
  {
    icon: '❄️',
    title: 'Cristalización de los adipocitos',
    desc: 'Las células de grasa se cristalizan a temperaturas de entre -8 °C y -11 °C sin dañar la piel ni los tejidos circundantes.',
  },
  {
    icon: '⏱',
    title: 'Tiempo de tratamiento',
    desc: 'Cada sesión dura entre 45 y 70 minutos por zona. Puedes tratar hasta 2 zonas simultáneamente en una misma cita.',
  },
  {
    icon: '🔄',
    title: 'Eliminación por proceso biológico',
    desc: 'Los adipocitos cristalizados son eliminados de forma natural por el sistema linfático durante las semanas siguientes.',
  },
  {
    icon: '📈',
    title: 'Resultados visibles',
    desc: 'Los primeros resultados se aprecian a partir de los 15 días post sesión, con mejora progresiva hasta los 3 meses.',
  },
]

const PAUTAS = [
  { label: 'Perfil de paciente', value: 'Normo-peso con grasa localizada' },
  { label: 'Pliegue mínimo', value: '20 mm de tejido adiposo' },
  { label: 'Zonas por sesión', value: 'Máximo 2 zonas (máx. 6 zonas por día)' },
  { label: 'Temperatura de trabajo', value: '-8 °C a -11 °C' },
  { label: 'Nivel de vacío', value: '200 – 240 MB' },
  { label: 'Duración por zona', value: '45 – 70 minutos' },
  { label: 'Sesiones por zona', value: '1 a 3 sesiones según respuesta' },
]

const ZONAS_GRANDES = [
  'Abdomen bajo',
  'Abdomen alto',
  'Flancos',
  'Brazos',
  'Zona subescapular',
  'Muslos',
]
const ZONAS_PEQUEÑAS = ['Papada', 'Pliegue axilar']

const RESULTADOS = [
  { img: '/images/res-01.png', aplicador: 'Straight HP', resultado: '2 semanas · Pérdida: 6 cm' },
  { img: '/images/res-02.png', aplicador: 'Tight HP',    resultado: '8 semanas · Pérdida: 4 cm' },
  { img: '/images/res-03.png', aplicador: 'Double HP',   resultado: '6 semanas · Pérdida: 14 cm' },
  { img: '/images/res-04.png', aplicador: 'Curved HP',   resultado: '6 semanas · Pérdida: 6 cm' },
  { img: '/images/res-05.png', aplicador: 'Straight HP', resultado: '8 semanas · Pérdida: 6 cm' },
]

export default function CoolTechPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <main className="bg-white text-[#2a3044]">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-[92vh] min-h-[580px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <Image
            src="/images/service_cooltech.png"
            alt="Tratamiento CoolTech"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a3a]/80 via-[#0c3050]/65 to-[#003a50]/55" />
        </motion.div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6 w-full">
            <motion.div {...fadeUp(0.1)} className="max-w-2xl">
              <span className="inline-block mb-5 px-4 py-1.5 border border-white/30 text-white/70 text-xs font-heading tracking-[0.2em] uppercase">
                Tratamiento No Invasivo
              </span>
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
                COOL
                <span className="text-[#4dd9d4]">TECH</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-sans leading-relaxed mb-10 max-w-xl">
                Elimina la grasa corporal localizada sin cirugía, sin agujas y sin tiempo de recuperación mediante criolipólisis de última generación.
              </p>
              <a
                href={`https://wa.me/56936909397?text=${encodeURIComponent('Hola, quisiera agendar una evaluación para CoolTech')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#009f96] hover:bg-[#00857d] text-white font-heading text-sm font-semibold tracking-widest uppercase px-8 py-4 transition-colors duration-200"
              >
                Agenda tu evaluación
              </a>
            </motion.div>
          </div>
        </div>

        {/* ice accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4dd9d4]/60 to-transparent" />
      </section>

      {/* ── CONCEPTO ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0)}>
            <span className="text-[#009f96] font-heading text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
              ¿Cómo funciona?
            </span>
            <h2 className="font-heading text-4xl font-bold text-[#2a3044] mb-6 leading-tight">
              Criolipólisis:<br />frío que modela
            </h2>
            <div className="space-y-4 text-[#555] font-sans leading-relaxed">
              <p>
                CoolTech utiliza <strong className="text-[#2a3044]">criolipólisis controlada</strong> para enfriar selectivamente las células de grasa hasta alcanzar su punto de cristalización, sin afectar la piel, nervios ni tejidos adyacentes.
              </p>
              <p>
                Gracias a su tecnología de vacío, el aplicador atrae el pliegue adiposo y aplica frío de forma uniforme. Los adipocitos dañados son eliminados progresivamente por el sistema linfático, reduciendo el volumen de la zona tratada.
              </p>
              <p>
                Es el tratamiento ideal para personas en <strong className="text-[#2a3044]">normo-peso</strong> que presentan acúmulos de grasa localizada resistentes a la dieta y el ejercicio.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 gap-4">
            {[
              { num: '45–70', unit: 'min', label: 'por sesión' },
              { num: '-11°C', unit: '', label: 'temperatura de trabajo' },
              { num: '15', unit: 'días', label: 'primeros resultados' },
              { num: '100%', unit: '', label: 'no invasivo' },
            ].map(({ num, unit, label }) => (
              <div key={label} className="bg-[#f5f9fa] p-6 flex flex-col justify-between">
                <div className="font-heading text-3xl font-bold text-[#009f96]">
                  {num}<span className="text-lg ml-1 text-[#2a3044]/60">{unit}</span>
                </div>
                <div className="text-sm text-[#555] font-sans mt-2 capitalize">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MECANISMO DE ACCIÓN ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f9fa]">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="text-[#009f96] font-heading text-xs tracking-[0.25em] uppercase font-semibold block mb-3">
              Mecanismo de acción
            </span>
            <h2 className="font-heading text-4xl font-bold text-[#2a3044]">
              5 etapas del tratamiento
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-0">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp(i * 0.08)}
                className="relative bg-white p-7 border-r border-[#e8eeef] last:border-r-0 md:border-r group hover:bg-[#009f96] transition-colors duration-300"
              >
                <div className="text-3xl mb-5">{f.icon}</div>
                <div className="w-8 h-0.5 bg-[#009f96] group-hover:bg-white/60 mb-4 transition-colors duration-300" />
                <h3 className="font-heading text-base font-bold text-[#2a3044] group-hover:text-white mb-3 transition-colors duration-300 leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm text-[#666] group-hover:text-white/85 font-sans leading-relaxed transition-colors duration-300">
                  {f.desc}
                </p>
                <div className="absolute top-6 right-6 font-heading text-5xl font-bold text-[#e8eeef] group-hover:text-white/10 transition-colors duration-300 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAUTAS DE TRATAMIENTO ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="text-[#009f96] font-heading text-xs tracking-[0.25em] uppercase font-semibold block mb-3">
              Parámetros clínicos
            </span>
            <h2 className="font-heading text-4xl font-bold text-[#2a3044]">
              Pautas de tratamiento
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="border border-[#e0e8ea]">
            {PAUTAS.map((p, i) => (
              <div
                key={p.label}
                className={`flex items-start gap-6 px-8 py-5 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f5f9fa]'} border-b border-[#e0e8ea] last:border-b-0`}
              >
                <div className="w-2 h-2 mt-2 flex-shrink-0 bg-[#009f96]" />
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8">
                  <span className="font-heading text-sm font-semibold text-[#2a3044] min-w-[200px]">
                    {p.label}
                  </span>
                  <span className="text-[#555] font-sans text-sm">{p.value}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ZONAS DE TRATAMIENTO ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0c1a3a] text-white">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="text-[#4dd9d4] font-heading text-xs tracking-[0.25em] uppercase font-semibold block mb-3">
              Cobertura corporal
            </span>
            <h2 className="font-heading text-4xl font-bold text-white">
              Zonas de tratamiento
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Zonas grandes */}
            <motion.div {...fadeUp(0.05)} className="border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-[#009f96]" />
                <h3 className="font-heading text-lg font-bold text-white tracking-wide uppercase">
                  Zonas Grandes
                </h3>
              </div>
              <ul className="space-y-4">
                {ZONAS_GRANDES.map((z, i) => (
                  <li key={z} className="flex items-center gap-4 group">
                    <span className="font-heading text-xs text-[#4dd9d4]/60 min-w-[24px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 h-px bg-white/10 group-hover:bg-[#009f96]/40 transition-colors" />
                    <span className="font-sans text-sm text-white/80 group-hover:text-white transition-colors">
                      {z}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Zonas pequeñas */}
            <motion.div {...fadeUp(0.1)} className="border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-[#4dd9d4]" />
                <h3 className="font-heading text-lg font-bold text-white tracking-wide uppercase">
                  Zonas Pequeñas
                </h3>
              </div>
              <ul className="space-y-4">
                {ZONAS_PEQUEÑAS.map((z, i) => (
                  <li key={z} className="flex items-center gap-4 group">
                    <span className="font-heading text-xs text-[#4dd9d4]/60 min-w-[24px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 h-px bg-white/10 group-hover:bg-[#4dd9d4]/40 transition-colors" />
                    <span className="font-sans text-sm text-white/80 group-hover:text-white transition-colors">
                      {z}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-5 bg-white/5 border border-[#4dd9d4]/20">
                <p className="text-sm text-white/60 font-sans leading-relaxed">
                  <span className="text-[#4dd9d4] font-semibold">Nota clínica:</span> Se puede tratar un máximo de 2 zonas por sesión y hasta 6 zonas en un mismo día, combinando zonas grandes y pequeñas según indicación.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RESULTADOS ANTES / DESPUÉS ────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f9fa]">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="text-[#009f96] font-heading text-xs tracking-[0.25em] uppercase font-semibold block mb-3">
              Casos reales
            </span>
            <h2 className="font-heading text-4xl font-bold text-[#2a3044]">
              Resultados comprobados
            </h2>
            <p className="text-[#666] font-sans mt-4 max-w-lg mx-auto">
              Fotografías reales de pacientes tratadas con CoolTech. Los resultados pueden variar según cada persona.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {RESULTADOS.map((r, i) => (
              <motion.div
                key={r.img}
                {...fadeUp(i * 0.07)}
                className={`bg-white overflow-hidden ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <Image
                  src={r.img}
                  alt={`Resultado CoolTech ${i + 1}`}
                  width={600}
                  height={380}
                  className="w-full object-cover"
                />
                <div className="px-4 py-3 border-t border-[#e8eeef]">
                  <span className="block font-heading text-xs font-semibold text-[#2a3044] tracking-wide">
                    {r.aplicador}
                  </span>
                  <span className="block text-xs text-[#009f96] font-sans mt-0.5">
                    {r.resultado}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp(0.4)} className="text-center text-xs text-[#aaa] font-sans mt-8">
            * Los resultados individuales pueden variar. Imágenes clínicas de referencia.
          </motion.p>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 bg-[#009f96] overflow-hidden">
        <div className="absolute inset-0 select-none flex items-center justify-center pointer-events-none">
          <span className="font-heading text-[22vw] font-black text-white/5 tracking-tighter">
            CRYO
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              ¿Lista para redefinir<br />tu silueta?
            </h2>
            <p className="text-white/80 font-sans text-lg mb-10 max-w-xl mx-auto">
              Agenda tu evaluación sin costo y descubre si CoolTech es el tratamiento indicado para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/56936909397?text=${encodeURIComponent('Hola, quisiera agendar una evaluación para CoolTech')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#009f96] font-heading text-sm font-bold tracking-widest uppercase px-10 py-4 hover:bg-[#f0fafa] transition-colors duration-200"
              >
                WhatsApp
              </a>
              <a
                href="tel:+56452690700"
                className="inline-block border-2 border-white text-white font-heading text-sm font-bold tracking-widest uppercase px-10 py-4 hover:bg-white/10 transition-colors duration-200"
              >
                +56 45 269 0700
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
