'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const vp = { once: true, margin: '-60px' as const }
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const BARRERA_CARDS = [
  {
    icono: '🚿',
    titulo: 'Higiene diaria',
    puntos: [
      'Duchas cortas (5–10 min) con agua tibia, nunca caliente.',
      'Usa limpiadores sin jabón (syndet) o aceites de ducha que no resequen.',
      'Seca con toques suaves usando toalla de algodón, sin frotar.',
    ],
  },
  {
    icono: '💧',
    titulo: 'Hidratación constante',
    puntos: [
      'Aplica crema emoliente inmediatamente post-baño, con la piel aún ligeramente húmeda.',
      'Reaaplica varias veces al día según la sequedad de tu piel.',
      'Prefiere productos sin fragancias, conservantes agresivos ni colorantes.',
    ],
    alerta: 'Solo en períodos de remisión — suspender durante brotes',
  },
  {
    icono: '👕',
    titulo: 'Ropa y entorno',
    puntos: [
      'Prendas holgadas de algodón 100%. Evita lanas y sintéticos en contacto directo.',
      'Ambientes bien ventilados, sin temperaturas extremas ni ambiente muy seco.',
      'Lava la ropa nueva antes de usarla con detergentes líquidos suaves, sin suavizante.',
    ],
  },
  {
    icono: '💊',
    titulo: 'Tratamiento médico',
    puntos: [
      'Usa corticoides o inmunomoduladores tópicos solo en zonas inflamadas y bajo indicación médica.',
      'No suspendas los emolientes durante los períodos de brote.',
    ],
  },
]

const SEGUNDA_MEDIDA = [
  'Evitar el contacto de la piel con detergentes, lavalozas o limpiadores del hogar.',
  'Usar guantes de algodón debajo de guantes de goma para tareas con detergentes.',
  'El baño debe ser diario (no suspender en los brotes), tibio y corto, para eliminar el sudor.',
  'Usar idealmente limpiadores o syndet que limpian sin resecar.',
  'El secado debe ser suave, sin frotar la piel.',
]

const RECOMENDACIONES = [
  {
    icono: '🌡️',
    titulo: 'Clima y ambiente',
    puntos: [
      'El clima templado con humedad moderada-alta es beneficioso, al igual que el agua de mar.',
      'El frío seco empeora la dermatitis atópica.',
      'La mejor calefacción es con radiadores de agua. Los calefactores eléctricos o de butano deben compensarse con un humidificador.',
      'Ventilar diariamente la habitación. Aspirar el polvo en lugar de barrer. Eliminar alfombras, polar y peluches que acumulen polvo.',
    ],
  },
  {
    icono: '🏃',
    titulo: 'Actividad física',
    puntos: [
      'No se recomienda el ejercicio físico intenso, el abrigo excesivo ni aquello que induzca demasiada sudoración.',
      'Al realizar deporte, el baño debe ser inmediatamente después, sin quedar con la transpiración en la piel.',
    ],
  },
  {
    icono: '🌸',
    titulo: 'Fragancias y productos',
    puntos: [
      'No usar perfumes ni productos con olor: cremas, colonias, aerosoles ambientales (inciensos, desinfectantes, pinturas).',
      'Los cuidadores también deben abstenerse de usar cosméticos fragantes en el entorno del paciente.',
    ],
  },
  {
    icono: '🧺',
    titulo: 'Lavado de ropa',
    puntos: [
      'Lavar ropa, toallas y sábanas con jabones neutros o detergentes suaves: jabón blanco o Popeye matic líquido.',
      'NO usar suavizantes ni detergente en polvo.',
      'Enjuagar abundantemente. Secar dentro de casa, no al aire libre.',
    ],
  },
  {
    icono: '🛡️',
    titulo: 'Prevención de sobreinfección',
    puntos: [
      'Uñas cortas y limpias. EVITAR el rascado y la sobreinfección.',
      'Suspender contacto con metales en ropas (cambiar botones y broches a plástico) y evitar collares, aros y pulseras si corresponde.',
      'No está indicado excluir alimentos, excepto ante alta sospecha de alergia alimentaria.',
      'Se recomienda el uso de agua purificada en lugar de agua directa de llave.',
    ],
  },
  {
    icono: '🧘',
    titulo: 'Manejo del estrés emocional',
    puntos: [
      'El estrés actúa como un poderoso agravante de los brotes de dermatitis atópica.',
      'Tu médico recomendará evaluación por especialista o actividades relajantes como yoga, meditación o reiki.',
    ],
  },
]

export default function DermatitisPage() {
  return (
    <main className="bg-white text-[#2a3044]">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="min-h-[72vh] grid md:grid-cols-2">
        <div className="flex items-center bg-[#f5f9fa] px-8 md:px-16 py-24 order-2 md:order-1">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block mb-5 text-[#009f96] font-heading text-xs tracking-[0.25em] uppercase font-semibold">
              Dermatología · Guía clínica
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#2a3044] leading-tight mb-6">
              Dermatitis<br />
              <span className="text-[#009f96]">Atópica</span>
            </h1>
            <p className="font-sans text-base text-[#555] leading-relaxed max-w-lg mb-10">
              Recomendaciones y cuidados elaborados por el equipo médico de Dermaclinica
              para ayudarte a controlar los brotes y mejorar tu calidad de vida.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Hidratación', 'Contactantes', 'Ropa', 'Ambiente', 'Brotes'].map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-white border border-[#dde5e7] text-xs font-heading font-semibold text-[#2a3044]/70 tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[380px] order-1 md:order-2"
        >
          <Image
            src="/images/hero_real_dermatologist_hispanic_8k.png"
            alt="Consulta dermatológica para dermatitis atópica"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f9fa]/20 to-transparent" />
        </motion.div>
      </section>

      {/* ── CUIDADOS EN CASA / BARRERA CUTÁNEA ───────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="mb-14">
            <span className="text-[#009f96] font-heading text-xs tracking-[0.25em] uppercase font-semibold block mb-2">
              Primera medida preventiva
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#2a3044] mb-1">
              Cuidados en Casa
            </h2>
            <p className="font-sans text-[#777] text-sm">
              Claves para restaurar la barrera cutánea
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 4 tarjetas */}
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {BARRERA_CARDS.map((card, i) => (
                <motion.div key={card.titulo} {...fadeUp(i * 0.07)} className="border border-[#e0e8ea] p-6 hover:border-[#009f96]/40 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">{card.icono}</span>
                    <h3 className="font-heading text-sm font-bold text-[#2a3044]">{card.titulo}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {card.puntos.map((p, pi) => (
                      <li key={pi} className="flex gap-2.5 items-start">
                        <div className="w-1 h-1 mt-1.5 flex-shrink-0 bg-[#009f96]" />
                        <p className="font-sans text-xs text-[#555] leading-relaxed">{p}</p>
                      </li>
                    ))}
                  </ul>
                  {card.alerta && (
                    <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-200 px-3 py-2">
                      <span className="text-amber-500 text-xs mt-0.5">⚠️</span>
                      <span className="font-sans text-xs font-semibold text-amber-700 leading-snug">{card.alerta}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Productos recomendados */}
            <motion.div {...fadeUp(0.2)} className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-heading text-[#009f96] uppercase tracking-widest font-semibold mb-4">
                  Productos recomendados
                </p>
                <p className="font-sans text-xs text-[#777] leading-relaxed mb-5">
                  Cremas emolientes específicas para pieles atópicas: lipídicas, no perfumadas e hipoalergénicas.
                </p>
              </div>
              {[
                { src: '/images/Atopix-crema.png', nombre: 'Atopix Crema', desc: 'Xylitol · Niacinamida · Manteca de Karité', peso: '150 g' },
                { src: '/images/Atopix-emulsion.png', nombre: 'Atopix Emulsión', desc: 'Xylitol · Niacinamida · Manteca de Karité', peso: '200 g' },
              ].map(prod => (
                <div key={prod.nombre} className="bg-[#f5f9fa] border border-[#e0e8ea] p-4 flex gap-4 items-center">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image src={prod.src} alt={prod.nombre} fill className="object-contain" />
                  </div>
                  <div>
                    <span className="font-heading text-sm font-bold text-[#2a3044] block">{prod.nombre}</span>
                    <span className="text-xs text-[#777] font-sans leading-snug block">{prod.desc}</span>
                    <span className="text-xs text-[#009f96] font-heading font-semibold block mt-1">
                      Pieles atópicas · {prod.peso}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SEGUNDA MEDIDA: CONTACTANTES ─────────────────────────── */}
      <section className="py-20 px-6 bg-[#f5f9fa]">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp(0)} className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#009f96] font-heading text-xs tracking-[0.25em] uppercase font-semibold block mb-2">
                Segunda medida preventiva
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#2a3044] mb-4">
                Suspensión de contactantes
              </h2>
              <p className="font-sans text-sm text-[#666] leading-relaxed">
                Evitar los agentes irritantes que pueden inflamar y/o resecar aún más la piel y agravar el cuadro.
              </p>
            </div>
            <ul className="space-y-4">
              {SEGUNDA_MEDIDA.map((item, i) => (
                <motion.li key={i} {...fadeUp(i * 0.06)} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 mt-2 flex-shrink-0 bg-[#009f96]" />
                  <p className="font-sans text-sm text-[#555] leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── RECOMENDACIONES GENERALES ────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="mb-14 max-w-2xl">
            <span className="text-[#009f96] font-heading text-xs tracking-[0.25em] uppercase font-semibold block mb-3">
              Cuidados diarios
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#2a3044]">
              Recomendaciones generales
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {RECOMENDACIONES.map((rec, ri) => (
              <motion.div key={rec.titulo} {...fadeUp(ri * 0.07)} className="bg-[#f5f9fa] border border-[#e0e8ea] p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{rec.icono}</span>
                  <h3 className="font-heading text-base font-bold text-[#2a3044]">{rec.titulo}</h3>
                </div>
                <ul className="space-y-3">
                  {rec.puntos.map((punto, pi) => (
                    <li key={pi} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 mt-1.5 flex-shrink-0 bg-[#009f96]" />
                      <p className="font-sans text-sm text-[#555] leading-relaxed">{punto}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANEJO DE BROTES ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#2a3044] text-white">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp(0)} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#4dd9d4] font-heading text-xs tracking-[0.25em] uppercase font-semibold block mb-4">
                Fase aguda
              </span>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">
                Manejo de los brotes
              </h2>
              <p className="font-sans text-white/75 leading-relaxed mb-5">
                Para el manejo de los brotes, tu médico recetará medicamentos orales y/o tópicos,
                dependiendo de la severidad o factores gatillantes presentes.
              </p>
              <p className="font-sans text-white/75 leading-relaxed">
                También será relevante si existe atopia respiratoria y/o digestiva asociada.
                Cada caso es evaluado de forma individual para un tratamiento personalizado.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { titulo: 'Suspender humectantes', desc: 'Durante un brote activo, las cremas emolientes pueden empeorar la irritación.' },
                { titulo: 'Continuar el baño', desc: 'El baño diario no debe suspenderse aunque haya brote activo.' },
                { titulo: 'Tratamiento médico', desc: 'Medicamentos orales y/o tópicos según severidad e indicación del dermatólogo.' },
                { titulo: 'Atopia asociada', desc: 'Se evalúa si existe compromiso respiratorio (asma, rinitis) o digestivo (alergias).' },
              ].map((punto, pi) => (
                <motion.div key={punto.titulo} {...fadeUp(pi * 0.08)} className="flex gap-4 p-5 border border-white/10 hover:border-[#4dd9d4]/40 transition-colors">
                  <div className="w-2 h-2 mt-1.5 flex-shrink-0 bg-[#4dd9d4]" />
                  <div>
                    <span className="font-heading text-sm font-bold text-white block mb-1">{punto.titulo}</span>
                    <span className="font-sans text-sm text-white/65 leading-relaxed">{punto.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#009f96]">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="font-heading text-4xl font-bold text-white mb-5">
              ¿Tienes dudas sobre tu piel?
            </h2>
            <p className="text-white/80 font-sans text-lg mb-10 max-w-xl mx-auto">
              Nuestro equipo dermatológico está disponible para orientarte y diseñar un tratamiento personalizado según tu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/56936909397?text=${encodeURIComponent('Hola, quisiera una consulta por dermatitis atópica')}`}
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
