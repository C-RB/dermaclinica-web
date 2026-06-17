import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna marca */}
        <div>
          <p className="font-heading font-bold text-xl tracking-wide mb-3">
            DERMACLINICA
          </p>
          <p className="text-sm text-white/70 leading-relaxed">
            Clínica dermatológica especializada en tratamientos médicos y
            estéticos de alta calidad.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/dermaclinica.cl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 hover:text-white transition-colors"
            >
              {/* Instagram SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a
              href="https://www.facebook.com/dermaclinica"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/70 hover:text-white transition-colors"
            >
              {/* Facebook SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        {/* Columna navegación */}
        <div>
          <h3 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4 text-white/50">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              ['/', 'Inicio'],
              ['/servicios', 'Servicios'],
              ['/doctores', 'Doctores'],
              ['/blog', 'Blog'],
              ['/contacto', 'Contacto'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna contacto */}
        <div>
          <h3 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4 text-white/50">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-teal-light" />
              <span>Edificio Paseo de las Artes 7° piso, Av. Alemania 0999, Temuco</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-teal-light" />
              <a href="tel:+56452690700" className="hover:text-white transition-colors">
                +56 45 2690700
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-teal-light" />
              <a href="mailto:contactodermaclinica@gmail.com" className="hover:text-white transition-colors">
                contactodermaclinica@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-white/40">
        © {new Date().getFullYear()} Dermaclinica. Todos los derechos reservados.
      </div>
    </footer>
  )
}
