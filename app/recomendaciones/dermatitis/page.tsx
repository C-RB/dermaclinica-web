'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Droplets, HeartPulse, Brain, ShieldAlert } from 'lucide-react'

const vp = { once: true, margin: '-50px' as const }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.55, delay },
})

const pasos = [
  {
    num: '01',
    title: 'Alteración de la barrera cutánea',
    desc: 'La piel pierde su capacidad natural para retener la humedad y protegerse de agresores externos. Esto la hace más permeable y vulnerable a la deshidratación severa.',
    tip: 'Uso constante de emolientes y cremas reparadoras de barrera.',
  },
  {
    num: '02',
    title: 'Inflamación y reactividad',
    desc: 'Ante la entrada de alérgenos o irritantes, el sistema inmune de la piel reacciona exageradamente produciendo inflamación, enrojecimiento y prurito (picazón intensa).',
    tip: 'Evitar factores desencadenantes como perfumes o jabones abrasivos.',
  },
  {
    num: '03',
    title: 'Ciclo de rascado',
    desc: 'El picor constante induce al rascado, lo cual daña aún más la barrera cutánea, incrementa la inflamación y predispone a posibles sobreinfecciones bacterianas.',
    tip: 'Tratamiento médico oportuno para frenar el prurito.',
  },
]

const recomendaciones = [
  {
    categoria: 'Higiene diaria',
    items: [
      'Toma duchas cortas (5 a 10 minutos) con agua tibia, nunca caliente.',
      'Utiliza limpiadores sin jabón (syndet) o aceites de ducha que no resequen la piel.',
      'Seca tu piel con toques suaves utilizando una toalla de algodón, sin frotar.',
    ],
  },
  {
    categoria: 'Hidratación constante',
    items: [
      'Aplica crema emoliente inmediatamente después del baño, con la piel aún ligeramente húmeda.',
      'Reaplica la hidratación varias veces al día según la sequedad o necesidad de tu piel.',
      'Prefiere productos sin fragancias, conservantes agresivos o colorantes.',
    ],
  },
  {
    categoria: 'Ropa y entorno',
    items: [
      'Usa prendas de vestir holgadas y preferentemente de algodón 100%. Evita lanas y fibras sintéticas en contacto directo.',
      'Mantén ambientes bien ventilados y evita temperaturas extremas o ambientes muy secos.',
      'Lava la ropa nueva antes de usarla y utiliza detergentes líquidos suaves sin suavizante.',
    ],
  },
  {
    categoria: 'Tratamiento médico',
    items: [
      'Utiliza los corticoides o inmunomoduladores tópicos solo en las zonas inflamadas y siguiendo estrictamente la indicación de tu dermatólogo.',
      'No suspendas los emolientes durante los períodos de brote.',
    ],
  },
]

const estiloVida = {
  evitar: [
    'Uso de esponjas ásperas o cepillos exfoliantes durante el baño.',
    'Exposición a cambios bruscos de temperatura o sudoración excesiva sin limpieza posterior.',
    'Contacto con productos químicos irritantes (detergentes, solventes, cloro) sin guantes de protección.',
    'Rascado activo de las lesiones (mantén las uñas cortas y limpias).',
  ],
  priorizar: [
    'Aplicación de compresas frías en zonas con picazón intensa.',
    'Uso de fotoprotectores minerales o formulados específicamente para pieles sensibles/atópicas.',
    'Técnicas de relajación para gestionar el estrés, ya que este es un gatillante común de los brotes.',
  ],
}

export default function RecomendacionesDermatitisPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Header editorial ── */}
      <section className="bg-[#faf9f7] border-b border-gray-100 pt-12 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
            {/* Texto */}
            <div className="pb-14">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-5"
              >
                Guía clínica · Dermatología médica
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="font-heading font-semibold text-5xl md:text-6xl lg:text-7xl text-[#2a3044] leading-[1.0] tracking-tight mb-6"
              >
                Dermatitis
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ originX: 0 }}
                className="h-px bg-gray-200 mb-6 max-w-xs"
              />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 }}
                className="text-[#2a3044]/55 text-[0.95rem] leading-relaxed max-w-sm"
              >
                Guía elaborada por el equipo médico de Dermaclinica para el manejo integral de pieles sensibles, reactivas o atópicas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex items-center gap-4 mt-8 flex-wrap"
              >
                <span className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-[11px] font-semibold text-[#2a3044]/50 uppercase tracking-widest">
                  Barrera Cutánea
                </span>
                <span className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-[11px] font-semibold text-[#2a3044]/50 uppercase tracking-widest">
                  Piel Reactiva
                </span>
              </motion.div>
            </div>

            {/* Imagen — pegada al borde inferior */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative h-[320px] md:h-[400px] lg:h-[440px] overflow-hidden self-end rounded-tl-3xl lg:rounded-tl-[3rem]"
            >
              <Image
                src="/images/bg-facial.jpg"
                alt="Tratamiento de Dermatitis — Dermaclinica"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-transparent" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── Qué es la dermatitis ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-4">
              Definición clínica
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#2a3044] mb-6 leading-snug">
              Comprendiendo tu piel
            </h2>
            <p className="text-[#2a3044]/65 leading-relaxed text-[0.97rem]">
              La <strong className="text-[#2a3044]/80 font-semibold">dermatitis o eccema</strong> agrupa distintas condiciones inflamatorias de la piel que se manifiestan con enrojecimiento, sequedad extrema y picazón. Ya sea atópica, de contacto o seborreica, su manejo fundamental consiste en restaurar la barrera de protección natural de la piel y disminuir los factores desencadenantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Fisiopatología: 3 pasos ── */}
      <section className="py-16 bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
              Fisiopatología
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#2a3044]">
              ¿Por qué se inflama la piel?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pasos.map(({ num, title, desc, tip }, i) => (
              <motion.div
                key={num}
                {...fadeUp(i * 0.1)}
                className="bg-white p-7 border border-gray-100 shadow-sm rounded-2xl"
              >
                <span className="font-heading font-bold text-4xl text-teal-primary/15 leading-none block mb-4">
                  {num}
                </span>
                <h3 className="font-heading font-semibold text-lg text-[#2a3044] mb-3">{title}</h3>
                <p className="text-sm text-[#2a3044]/55 leading-relaxed mb-4">{desc}</p>
                <div className="flex items-start gap-2.5 pt-4 border-t border-gray-100">
                  <CheckCircle2 size={14} className="text-teal-primary mt-0.5 shrink-0" />
                  <p className="text-xs text-teal-primary/80 leading-relaxed">{tip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recomendaciones generales ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Imagen sticky */}
            <motion.div
              {...fadeUp()}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl lg:sticky lg:top-24"
            >
              <motion.div
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={vp}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/bg-facial.jpg"
                  alt="Tratamiento de piel"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Categorías */}
            <div>
              <motion.div {...fadeUp()} className="mb-10">
                <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
                  Cuidados en Casa
                </p>
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#2a3044] leading-snug">
                  Claves para restaurar la barrera cutánea
                </h2>
              </motion.div>

              <div className="divide-y divide-gray-100">
                {recomendaciones.map(({ categoria, items }, i) => (
                  <motion.div key={categoria} {...fadeUp(i * 0.08)} className="py-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-primary mb-3">
                      {categoria}
                    </p>
                    <ul className="space-y-2.5">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Droplets size={13} className="text-teal-primary/60 mt-0.5 shrink-0" />
                          <p className="text-sm text-[#2a3044]/60 leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Hábitos y Emociones ── */}
      <section className="py-16 bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div {...fadeUp()} className="mb-10">
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
              Bienestar integral
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#2a3044]">
              Estrés y Piel
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: Brain,
                title: 'Conexión cerebro-piel',
                desc: 'El estrés psicológico agrava directamente los brotes de dermatitis al aumentar las respuestas inflamatorias. Es vital buscar técnicas de relajación.',
              },
              {
                icon: HeartPulse,
                title: 'Apoyo emocional',
                desc: 'Tener enfermedades crónicas de la piel puede ser frustrante. Mantener comunicación constante con tu médico tratante te ayudará a superar los brotes severos.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.1)} className="flex gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-teal-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#2a3044] mb-1.5">{title}</p>
                  <p className="text-sm text-[#2a3044]/55 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Evitar y Priorizar ── */}
      <section className="py-0 overflow-hidden mb-12">
        <motion.div
          {...fadeUp()}
          className="bg-white px-6 md:px-16 pt-20 pb-12 max-w-7xl mx-auto"
        >
          <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
            Acciones preventivas
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#2a3044]">
              Hábitos diarios
            </h2>
            <p className="text-sm text-[#2a3044]/45 max-w-sm leading-relaxed">
              Las pequeñas modificaciones en el entorno y tus rutinas hacen la diferencia.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl">
          {/* Evitar */}
          <motion.div
            {...fadeUp(0)}
            className="bg-[#2a3044] px-8 md:px-14 py-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle size={16} className="text-amber-400 shrink-0" />
              <p className="font-heading font-semibold text-white tracking-wide">Evitar</p>
            </div>
            <ul className="space-y-5">
              {estiloVida.evitar.map((item, i) => (
                <motion.li key={i} {...fadeUp(i * 0.07)} className="flex items-start gap-4">
                  <span className="w-px h-full bg-amber-400/40 shrink-0 mt-1.5 self-stretch" style={{ minHeight: 14 }} />
                  <p className="text-sm text-white/60 leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Priorizar */}
          <motion.div
            {...fadeUp(0.1)}
            className="bg-teal-primary px-8 md:px-14 py-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <ShieldAlert size={16} className="text-white/80 shrink-0" />
              <p className="font-heading font-semibold text-white tracking-wide">Priorizar</p>
            </div>
            <ul className="space-y-5">
              {estiloVida.priorizar.map((item, i) => (
                <motion.li key={i} {...fadeUp(i * 0.07)} className="flex items-start gap-4">
                  <span className="w-px bg-white/30 shrink-0 mt-1.5 self-stretch" style={{ minHeight: 14 }} />
                  <p className="text-sm text-white/75 leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
