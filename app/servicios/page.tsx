import type { Metadata } from 'next'
import Link from 'next/link'
import { Scissors, Snowflake, Syringe, Sparkles, Stethoscope, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Tratamientos dermatológicos y estéticos en Vitacura: depilación láser, CoolTech, toxina botulínica, cosmetología y cirugías dermatológicas.',
}

const servicios = [
  {
    icon: Scissors,
    title: 'Depilación Láser',
    desc: 'Eliminación permanente del vello con tecnología láser de última generación. Segura para todo tipo de piel, rápida y efectiva. Tratamos rostro, axilas, piernas, bikini y más.',
    detalles: ['Tecnología Alexandrite y Nd:YAG', 'Para todo tipo de piel', 'Resultados permanentes'],
  },
  {
    icon: Snowflake,
    title: 'CoolTech',
    desc: 'Criolipólisis no invasiva para la reducción de grasa localizada. Sin cirugía, sin tiempo de recuperación. Elimina las células de grasa de forma natural y definitiva.',
    detalles: ['Sin cirugía ni anestesia', 'Resultados visibles desde la 1a sesión', 'Tratamiento de 1 hora'],
  },
  {
    icon: Syringe,
    title: 'Toxina Botulínica',
    desc: 'Tratamiento médico-estético para suavizar líneas de expresión y arrugas. Resultados naturales que rejuvenecen el rostro manteniendo tu expresividad.',
    detalles: ['Aplicación rápida (15-30 min)', 'Resultados visibles en 3-7 días', 'Duración 4-6 meses'],
  },
  {
    icon: Sparkles,
    title: 'Cosmetología',
    desc: 'Tratamientos faciales y corporales personalizados: peelings, hidratación profunda, mesoterapia, y más. Protocolos adaptados a las necesidades específicas de tu piel.',
    detalles: ['Diagnóstico personalizado', 'Peelings químicos', 'Mesoterapia facial y corporal'],
  },
  {
    icon: Stethoscope,
    title: 'Dermatología Médica',
    desc: 'Consultas dermatológicas para el diagnóstico y tratamiento de enfermedades de la piel: acné, rosácea, psoriasis, dermatitis, manchas y lesiones pigmentadas.',
    detalles: ['Diagnóstico por imagen dermoscopia', 'Tratamiento de acné y rosácea', 'Control de lesiones pigmentadas'],
  },
  {
    icon: Zap,
    title: 'Cirugías Dermatológicas',
    desc: 'Extirpación de lesiones benignas y malignas: lunares, quistes, verrugas, lipomas. Realizadas por dermatólogos certificados en un ambiente clínico seguro.',
    detalles: ['Cirugía ambulatoria', 'Estudio anatomopatológico', 'Cicatrización mínima'],
  },
]

export default function ServiciosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-sm font-semibold text-teal-primary uppercase tracking-widest mb-2">
          Tratamientos
        </p>
        <h1 className="font-heading font-bold text-4xl text-charcoal">Nuestros servicios</h1>
        <p className="mt-3 text-charcoal/60 max-w-2xl">
          Ofrecemos una amplia gama de tratamientos dermatológicos médicos y estéticos,
          respaldados por tecnología de última generación y profesionales certificados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map(({ icon: Icon, title, desc, detalles }) => (
          <div
            key={title}
            className="bg-white rounded border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-primary/10 mb-4">
              <Icon size={22} className="text-teal-primary" />
            </div>
            <h2 className="font-heading font-bold text-lg text-charcoal mb-2">{title}</h2>
            <p className="text-sm text-charcoal/60 leading-relaxed mb-4 flex-1">{desc}</p>
            <ul className="space-y-1">
              {detalles.map((d) => (
                <li key={d} className="text-xs text-charcoal/50 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-teal-primary inline-block" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center bg-teal-primary/5 rounded border border-teal-primary/20 py-12 px-6">
        <h2 className="font-heading font-bold text-2xl text-charcoal mb-3">
          ¿No sabes qué tratamiento necesitas?
        </h2>
        <p className="text-charcoal/60 mb-6">
          Agenda una consulta con nuestros especialistas para un diagnóstico personalizado.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center px-8 py-3 rounded-sm bg-teal-primary text-white font-semibold hover:bg-teal-secondary transition-colors"
        >
          Agenda tu consulta
        </Link>
      </div>
    </div>
  )
}
