'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, MessageCircle, CheckCircle2, Clock } from 'lucide-react'
import { getEspecialista, iniciales } from '@/lib/especialistas'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

type Slot = { dia: string; fecha: string; hora: string }

export default function EspecialistaPage() {
  const { slug } = useParams<{ slug: string }>()
  const especialista = getEspecialista(slug)

  const [slot, setSlot] = useState<Slot | null>(null)
  const [submitted, setSubmitted] = useState(false)

  if (!especialista) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-heading font-bold text-2xl text-[#2a3044] mb-3">
          No encontramos a este especialista
        </h1>
        <p className="text-[#2a3044]/55 mb-8">
          Puede que el enlace esté mal escrito o el perfil ya no esté disponible.
        </p>
        <Link
          href="/agendar"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-primary text-white text-sm font-semibold hover:bg-teal-secondary transition-colors"
        >
          <ArrowLeft size={15} />
          Volver a especialistas
        </Link>
      </div>
    )
  }

  const disponible = Boolean(especialista.horarios?.length)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-[#faf9f7] pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <Link
          href="/agendar"
          className="inline-flex items-center gap-1.5 text-sm text-[#2a3044]/55 hover:text-teal-primary transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          Volver a especialistas
        </Link>

        {/* Encabezado del especialista */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-5 mb-8 rounded-2xl border border-gray-100 bg-white p-6 md:p-7"
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full shrink-0 ring-4 ring-teal-primary/10">
            {especialista.foto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={especialista.foto}
                alt={especialista.nombre}
                className={`w-full h-full rounded-full object-cover object-top ${
                  disponible ? '' : 'grayscale opacity-60'
                }`}
              />
            ) : (
              <div
                className={`w-full h-full rounded-full flex items-center justify-center font-heading font-bold text-2xl ${
                  disponible ? 'bg-teal-primary/10 text-teal-primary' : 'bg-gray-100 text-gray-300'
                }`}
              >
                {iniciales(especialista.nombre)}
              </div>
            )}
          </div>
          <div className="min-w-0">
            <h1 className="font-heading font-bold text-xl md:text-2xl text-[#2a3044] leading-snug">
              {especialista.nombre}
            </h1>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-primary/70 mt-1">
              {especialista.nota ?? especialista.titulo}
            </p>
            {especialista.direccion && (
              <div className="flex items-center gap-1.5 text-sm text-[#2a3044]/55 mt-2">
                <MapPin size={14} className="text-teal-primary shrink-0" />
                {especialista.direccion}
              </div>
            )}
          </div>
        </motion.div>

        {!disponible ? (
          <motion.div {...fadeUp(0.1)} className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
            <p className="text-[#2a3044]/60 mb-6">
              Lo sentimos, {especialista.nombre.split(' ')[0]} no tiene horas disponibles por ahora.
            </p>
            <a
              href={`https://wa.me/56936909397?text=${encodeURIComponent(
                `Hola, quisiera saber disponibilidad con ${especialista.nombre}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-[#2a3044]/60 text-sm font-medium hover:border-teal-primary/40 hover:text-teal-primary transition-colors"
            >
              <MessageCircle size={14} />
              Consultar por WhatsApp
            </a>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Todos los horarios disponibles */}
            <motion.div {...fadeUp(0.1)} className="lg:col-span-3 space-y-5">
              <h2 className="font-heading font-semibold text-lg text-[#2a3044]">Horarios disponibles</h2>
              {especialista.horarios!.map((h) => (
                <div key={h.dia + h.fecha} className="rounded-2xl border border-gray-100 bg-white p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2a3044] mb-3">
                    <Clock size={14} className="text-teal-primary shrink-0" />
                    {h.dia}, {h.fecha}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {h.horas.map((hora) => {
                      const isSelected = slot?.dia === h.dia && slot?.hora === hora
                      return (
                        <button
                          key={hora}
                          type="button"
                          onClick={() => {
                            setSlot({ dia: h.dia, fecha: h.fecha, hora })
                            setSubmitted(false)
                          }}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                            isSelected
                              ? 'bg-teal-primary text-white'
                              : 'bg-teal-primary/8 text-teal-primary hover:bg-teal-primary/15'
                          }`}
                        >
                          {hora}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Formulario de solicitud */}
            <motion.div {...fadeUp(0.15)} className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-7 md:p-8 lg:sticky lg:top-24">
                {!slot ? (
                  <div className="text-center py-10">
                    <div className="w-12 h-12 rounded-full bg-teal-primary/8 flex items-center justify-center mx-auto mb-4">
                      <Clock size={20} className="text-teal-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-base text-[#2a3044] mb-1.5">
                      Elige un horario
                    </h3>
                    <p className="text-sm text-[#2a3044]/50 max-w-[220px] mx-auto">
                      Selecciona un día y hora de la lista para solicitar tu cita.
                    </p>
                  </div>
                ) : submitted ? (
                  <div className="text-center py-6">
                    <CheckCircle2 size={36} className="text-teal-primary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-lg text-[#2a3044] mb-2">
                      ¡Solicitud recibida!
                    </h3>
                    <p className="text-sm text-[#2a3044]/55 max-w-md mx-auto">
                      Nos pondremos en contacto contigo a la brevedad para confirmar tu hora con{' '}
                      {especialista.nombre} el {slot.dia.toLowerCase()} {slot.fecha} a las {slot.hora}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-teal-primary bg-teal-primary/8 px-3 py-1.5 rounded-full w-fit mb-1">
                        <Clock size={13} className="shrink-0" />
                        {slot.dia}, {slot.fecha} · {slot.hora}
                      </div>
                      <h2 className="font-heading font-semibold text-lg text-[#2a3044] mt-4">
                        Completa tus datos
                      </h2>
                    </div>

                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-[#2a3044] mb-1.5">
                        Nombre completo
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#2a3044] placeholder-[#2a3044]/30 focus:outline-none focus:border-teal-primary transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="rut" className="block text-sm font-medium text-[#2a3044] mb-1.5">
                          RUT
                        </label>
                        <input
                          id="rut"
                          type="text"
                          name="rut"
                          required
                          placeholder="12.345.678-9"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#2a3044] placeholder-[#2a3044]/30 focus:outline-none focus:border-teal-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="edad" className="block text-sm font-medium text-[#2a3044] mb-1.5">
                          Edad
                        </label>
                        <input
                          id="edad"
                          type="number"
                          name="edad"
                          min={0}
                          max={120}
                          required
                          placeholder="35"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#2a3044] placeholder-[#2a3044]/30 focus:outline-none focus:border-teal-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="correo" className="block text-sm font-medium text-[#2a3044] mb-1.5">
                          Correo electrónico
                        </label>
                        <input
                          id="correo"
                          type="email"
                          name="correo"
                          required
                          placeholder="tucorreo@ejemplo.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#2a3044] placeholder-[#2a3044]/30 focus:outline-none focus:border-teal-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-[#2a3044] mb-1.5">
                          Teléfono
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          name="telefono"
                          required
                          placeholder="+56 9 1234 5678"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#2a3044] placeholder-[#2a3044]/30 focus:outline-none focus:border-teal-primary transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-full bg-teal-primary text-white font-semibold hover:bg-teal-secondary transition-colors text-sm shadow-sm"
                    >
                      Enviar solicitud
                    </button>
                    <p className="text-xs text-[#2a3044]/40 text-center">
                      También puedes escribirnos directo por WhatsApp al +56 9 3690 9397.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
