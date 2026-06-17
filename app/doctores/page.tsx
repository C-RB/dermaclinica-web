import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Doctores',
  description: 'Conoce al equipo médico de Dermaclinica. Dermatólogos especializados en Temuco, Chile.',
}

const equipo = [
  {
    nombre: 'Dr. Gastón Briceño',
    titulo: 'Médico Dermatólogo',
    especialidades: ['Dermatología Clínica', 'Dermatología Estética'],
    descripcion: 'Médico Dermatólogo especializado en el diagnóstico y tratamiento de enfermedades de la piel.',
    image: '/images/team02.jpg'
  },
  {
    nombre: 'Dra. Yesenia Valenzuela',
    titulo: 'Médico Dermatólogo',
    especialidades: ['Dermatología Clínica', 'Dermatología Estética'],
    descripcion: 'Médico Dermatólogo con amplia experiencia en dermatología clínica y procedimientos estéticos.',
    image: '/images/team01.jpg'
  },
  {
    nombre: 'Dr. Miguel Ángel Lassalle',
    titulo: 'Médico Dermatólogo',
    especialidades: ['Dermatología Clínica', 'Cirugía Dermatológica'],
    descripcion: 'Médico Dermatólogo con formación en dermatología clínica y procedimientos quirúrgicos.',
    image: '/images/team04.jpg'
  },
  {
    nombre: 'Dr. Cristian Pinto',
    titulo: 'Médico Dermatólogo',
    especialidades: ['Dermatología Clínica', 'Dermatología Estética'],
    descripcion: 'Médico Dermatólogo comprometido con la salud y el cuidado integral de la piel.',
    image: '/images/dr-pinto-1.jpeg'
  },
  {
    nombre: 'Dra. Fernanda Sepúlveda',
    titulo: 'Médico Dermatólogo',
    especialidades: ['Dermatología Clínica', 'Dermatología Estética'],
    descripcion: 'Médico Dermatólogo especializada en dermatología clínica y tratamientos estéticos personalizados.',
    image: '/images/fernanda2.jpg'
  },
  {
    nombre: 'Dra. Isabel Herrera',
    titulo: 'Médico Dermatólogo',
    especialidades: ['Dermatología Clínica', 'Dermatología Estética'],
    descripcion: 'Médico Dermatólogo con enfoque en el diagnóstico y tratamiento integral de afecciones de la piel.',
    image: '/images/isabel2.jpg'
  },
]

export default function DoctoresPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-sm font-semibold text-teal-primary uppercase tracking-widest mb-2">
          Profesionales
        </p>
        <h1 className="font-heading font-bold text-4xl text-charcoal">Nuestro equipo médico</h1>
        <p className="mt-3 text-charcoal/60 max-w-2xl">
          Un equipo de especialistas dedicados a cuidar tu piel con los más altos estándares
          médicos y estéticos en Temuco.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {equipo.map(({ nombre, titulo, especialidades, image }) => (
          <div
            key={nombre}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col overflow-hidden group hover:shadow-md transition-shadow relative pb-16"
          >
            {/* Imagen superior con fondo decorativo */}
            <div className="relative h-72 bg-[#eef3fb] overflow-hidden">
              {/* Círculos decorativos del fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 border-[1px] border-white/40 rounded-full translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute top-0 right-0 w-48 h-48 border-[1px] border-white/30 rounded-full translate-x-1/4 -translate-y-1/4"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-[1px] border-white/50 rounded-full -translate-x-1/2 translate-y-1/2"></div>
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={image} 
                alt={nombre} 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] w-auto object-cover object-bottom transition-transform duration-300 group-hover:scale-105" 
              />
            </div>

            {/* Contenido info */}
            <div className="p-6 bg-white relative">
              <h3 className="font-heading font-bold text-xl text-charcoal">{nombre}</h3>
              <p className="text-sm text-charcoal/50 mt-1 mb-4">{titulo}</p>
              
              <div className="flex flex-wrap gap-2">
                {especialidades.map((e) => (
                  <span
                    key={e}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-teal-primary/5 text-teal-primary font-semibold uppercase tracking-wider"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>

            {/* Botón flotante (+) en la esquina inferior derecha como en la referencia */}
            <button className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-charcoal/40 hover:bg-teal-primary hover:text-white hover:border-teal-primary transition-colors z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}
