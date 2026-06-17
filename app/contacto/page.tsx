import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contáctanos para agendar una cita en Dermaclinica, Temuco. Llámanos o escríbenos.',
}

export default function ContactoPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-sm font-semibold text-teal-primary uppercase tracking-widest mb-2">
          Escríbenos
        </p>
        <h1 className="font-heading font-bold text-4xl text-charcoal">Contacto</h1>
        <p className="mt-3 text-charcoal/60 max-w-xl">
          Agenda tu consulta o resuélve tus dudas. Te respondemos a la brevedad.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario */}
        <div>
          <h2 className="font-heading font-semibold text-xl text-charcoal mb-6">
            Envíanos un mensaje
          </h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-charcoal mb-1.5">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2.5 rounded border border-gray-200 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-teal-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-charcoal mb-1.5">
                  Apellido
                </label>
                <input
                  id="apellido"
                  type="text"
                  name="apellido"
                  placeholder="Tu apellido"
                  className="w-full px-4 py-2.5 rounded border border-gray-200 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-teal-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="tu@correo.com"
                className="w-full px-4 py-2.5 rounded border border-gray-200 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-teal-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-charcoal mb-1.5">
                Teléfono <span className="text-charcoal/40">(opcional)</span>
              </label>
              <input
                id="telefono"
                type="tel"
                name="telefono"
                placeholder="+56 9 1234 5678"
                className="w-full px-4 py-2.5 rounded border border-gray-200 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-teal-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="servicio" className="block text-sm font-medium text-charcoal mb-1.5">
                Servicio de interés
              </label>
              <select
                id="servicio"
                name="servicio"
                className="w-full px-4 py-2.5 rounded border border-gray-200 text-sm text-charcoal focus:outline-none focus:border-teal-primary transition-colors bg-white"
              >
                <option value="">Selecciona un servicio</option>
                <option>Depilación Láser</option>
                <option>CoolTech</option>
                <option>Toxina Botulínica</option>
                <option>Cosmetología</option>
                <option>Dermatología Médica</option>
                <option>Cirugías Dermatológicas</option>
                <option>Otro / Consulta general</option>
              </select>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-charcoal mb-1.5">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Cuéntanos en qué podemos ayudarte…"
                className="w-full px-4 py-2.5 rounded border border-gray-200 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-teal-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-sm bg-teal-primary text-white font-semibold hover:bg-teal-secondary transition-colors text-sm"
            >
              Enviar mensaje
            </button>
            <p className="text-xs text-charcoal/40 text-center">
              Te responderemos en un plazo de 24 horas hábiles.
            </p>
          </form>
        </div>

        {/* Info de contacto + Mapa */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-heading font-semibold text-xl text-charcoal mb-6">
              Información de contacto
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-charcoal">Dirección</p>
                  <p className="text-sm text-charcoal/60">
                    Edificio Paseo de las Artes, 7° piso<br />
                    Av. Alemania 0999, Temuco, Chile
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-teal-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-charcoal">Teléfono</p>
                  <a
                    href="tel:+56452690700"
                    className="text-sm text-charcoal/60 hover:text-teal-primary transition-colors"
                  >
                    +56 45 2690700
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-teal-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-charcoal">Email</p>
                  <a
                    href="mailto:contactodermaclinica@gmail.com"
                    className="text-sm text-charcoal/60 hover:text-teal-primary transition-colors"
                  >
                    contactodermaclinica@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-teal-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-charcoal">Horario de atención</p>
                  <p className="text-sm text-charcoal/60">Lunes a Viernes: 9:00 – 17:30</p>
                  <p className="text-sm text-charcoal/60">Consultas dermatólogo: 9:30 – 13:30 y 15:00 – 19:30</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Imagen Fachada + Google Maps embed */}
          <div className="flex flex-col gap-4 h-full">
            <div className="rounded overflow-hidden border border-gray-100 shadow-sm relative h-48 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Fachada_w1200_1200_675.jpg"
                alt="Fachada Dermaclinica Temuco"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded overflow-hidden border border-gray-100 shadow-sm flex-1 min-h-[240px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.0!2d-72.5900!3d-38.7359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966434f63eb7c82f%3A0x0!2sAv.+Alemania+0999%2C+Temuco!5e0!3m2!1ses!2scl!4v1000000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '240px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dermaclinica — Av. Alemania 0999, Temuco"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
