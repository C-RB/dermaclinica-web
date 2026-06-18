'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Leaf, Dumbbell, Brain } from 'lucide-react'

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
    title: 'Hiperseborrea',
    desc: 'Primer evento reconocido: exceso de producción de sebo. Tu dermatólogo evaluará si hay factores asociados o si es solo parte de los cambios hormonales de la adolescencia.',
    tip: 'Jabón de acné, mascarillas absorbentes o formulaciones tópicas matificantes.',
  },
  {
    num: '02',
    title: 'Taponamiento folicular',
    desc: 'El sebo y la queratina tapan los folículos pilosos formando comedones (puntos negros). Se necesitan productos comedolíticos, limpiezas faciales, microdermoabrasión o peelings.',
    tip: 'Aseo con limpiador suave para evitar irritación.',
  },
  {
    num: '03',
    title: 'Inflamación',
    desc: 'La bacteria Propionibacterium acnes coloniza el folículo y genera una respuesta inflamatoria. Su intensidad varía según genética, estrés, alimentación y fármacos.',
    tip: 'Medicamentos orales y/o tópicos, luz azul, peelings o terapia fotodinámica según severidad.',
  },
]

const recomendaciones = [
  {
    categoria: 'Limpieza e hidratación',
    items: [
      'Usa el jabón indicado 2 veces al día. Todo cosmético o hidratante debe ser libre de aceite o no comedogénico.',
    ],
  },
  {
    categoria: 'Retinoides tópicos',
    items: [
      'Aplica en piel limpia y seca, 15 min tras el lavado. Cubre toda el área afectada. Las primeras semanas puede haber un brote transitorio — es normal.',
    ],
  },
  {
    categoria: 'Antibióticos tópicos y orales',
    items: [
      'Las cremas antibióticas se usan solo en lesiones inflamatorias y por períodos cortos. Los orales no deben tomarse más de 3 meses; algunos sensibilizan al sol.',
    ],
  },
  {
    categoria: 'Isotretinoína',
    items: [
      'Requiere fotoprotección diaria, lubricación y control periódico. Evita alcohol. Si eres mujer en edad fértil: doble método anticonceptivo obligatorio.',
    ],
  },
]

const alimentacion = {
  evitar: [
    'Azúcares y cereales procesados: jugos comerciales, gaseosas, pasteles, harinas blancas (pan, pastas), cereales refinados.',
    'Lácteos, especialmente los descremados. Reemplaza con almendras, soya, espinacas.',
    'Alimentos procesados con grasas vegetales ricas en omega-6: fritos, snacks.',
  ],
  priorizar: [
    'Vegetales, frutas frescas y legumbres.',
    'Cereales integrales de alta densidad nutricional.',
    'Alimentos ricos en omega-3: salmón, atún, caballa, sardinas, nueces, semillas de chía y lino.',
  ],
}

export default function RecomendacionesAcnePage() {
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
                Acné
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
                Guía elaborada por el equipo de dermatólogos de Dermaclinica para complementar tu tratamiento personalizado.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex items-center gap-4 mt-8"
              >
                <span className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-[11px] font-semibold text-[#2a3044]/50 uppercase tracking-widest">
                  Enfermedad crónica
                </span>
                <span className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-[11px] font-semibold text-[#2a3044]/50 uppercase tracking-widest">
                  Folículo pilosebáceo
                </span>
              </motion.div>
            </div>

            {/* Imagen — pegada al borde inferior */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative h-[320px] md:h-[400px] lg:h-[440px] overflow-hidden self-end"
            >
              <Image
                src="/images/solution_acne.png"
                alt="Acné — Dermaclinica"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7]/60 via-transparent to-transparent" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── Qué es el acné ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-4">
              Definición clínica
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#2a3044] mb-6 leading-snug">
              ¿Qué es el acné?
            </h2>
            <p className="text-[#2a3044]/65 leading-relaxed text-[0.97rem]">
              El acné es una <strong className="text-[#2a3044]/80 font-semibold">enfermedad inflamatoria crónica del folículo pilosebáceo</strong>, mediada por andrógenos (hormonas presentes desde la pubertad en hombres y mujeres). Los tratamientos buscan actuar en alguno de los puntos fisiopatológicos precipitados por estas hormonas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Fisiopatología: 3 pasos ── */}
      <section className="py-16 bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
              Cómo se desarrolla
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#2a3044]">
              Los tres eventos del acné
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pasos.map(({ num, title, desc, tip }, i) => (
              <motion.div
                key={num}
                {...fadeUp(i * 0.1)}
                className="bg-white p-7 border border-gray-100 shadow-sm"
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
              className="relative aspect-[3/4] overflow-hidden lg:sticky lg:top-24"
            >
              <motion.div
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={vp}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/bg-toxina.jpg"
                  alt="Tratamiento dermatológico"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Categorías */}
            <div>
              <motion.div {...fadeUp()} className="mb-10">
                <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
                  Medidas generales
                </p>
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#2a3044] leading-snug">
                  Recomendaciones para complementar tu tratamiento
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
                          <CheckCircle2 size={13} className="text-teal-primary/60 mt-0.5 shrink-0" />
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

      {/* ── Estilo de vida ── */}
      <section className="py-16 bg-[#f7f8fc]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div {...fadeUp()} className="mb-10">
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
              Hábitos
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#2a3044]">
              Estilo de vida
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: Brain,
                title: 'Manejo del estrés',
                desc: 'El estrés agrava el acné al aumentar la producción de andrógenos. Incorpora actividades que te ayuden a regularlo: meditación, yoga, tiempo al aire libre.',
              },
              {
                icon: Dumbbell,
                title: 'Ejercicio regular',
                desc: 'El ejercicio reduce los niveles de insulina y la grasa corporal, factores que pueden aumentar la producción de andrógenos y empeorar el acné.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.1)} className="flex gap-5 bg-white p-6 border border-gray-100 shadow-sm">
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

      {/* ── Alimentación ── */}
      <section className="py-0 overflow-hidden">
        {/* Header strip */}
        <motion.div
          {...fadeUp()}
          className="bg-white px-6 md:px-16 pt-20 pb-12 max-w-7xl mx-auto"
        >
          <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
            Nutrición
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#2a3044]">
              Alimentación y acné
            </h2>
            <p className="text-sm text-[#2a3044]/45 max-w-sm leading-relaxed">
              Ciertos alimentos pueden aumentar los andrógenos e insulina, agravando el acné.
            </p>
          </div>
        </motion.div>

        {/* Dos paneles full-bleed */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Evitar — panel oscuro */}
          <motion.div
            {...fadeUp(0)}
            className="bg-[#2a3044] px-8 md:px-14 py-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle size={16} className="text-amber-400 shrink-0" />
              <p className="font-heading font-semibold text-white tracking-wide">Reducir o evitar</p>
            </div>
            <ul className="space-y-5">
              {alimentacion.evitar.map((item, i) => (
                <motion.li key={i} {...fadeUp(i * 0.07)} className="flex items-start gap-4">
                  <span className="w-px h-full bg-amber-400/40 shrink-0 mt-1.5 self-stretch" style={{ minHeight: 14 }} />
                  <p className="text-sm text-white/60 leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Priorizar — panel teal */}
          <motion.div
            {...fadeUp(0.1)}
            className="bg-teal-primary px-8 md:px-14 py-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <Leaf size={16} className="text-white/80 shrink-0" />
              <p className="font-heading font-semibold text-white tracking-wide">Priorizar</p>
            </div>
            <ul className="space-y-5">
              {alimentacion.priorizar.map((item, i) => (
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
