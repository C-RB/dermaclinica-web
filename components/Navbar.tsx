'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Inicio' },
  { 
    label: 'Dermatología Médica', 
    subLinks: [
      { href: '/doctores', label: 'Equipo Médico' },
      { href: '/dermatologia/inyeccion', label: 'Inyección de Toxina, Relleno y Microneedling' },
      { href: '/dermatologia/cirugias', label: 'Cirugías Menores' },
    ]
  },
  { 
    label: 'Estética Clínica',
    subLinks: [
      { href: '/estetica/cosmetologia', label: 'Cosmetología Facial' },
      { href: '/estetica/depilacion', label: 'Depilación Láser' },
      { href: '/estetica/tienda', label: 'Tienda de productos' },
      { href: '/estetica/cooltech', label: 'Cooltech' },
      { href: '/estetica/inyeccion', label: 'Inyección de Toxina, Relleno y Microneedling' },
    ]
  },
  { href: '/promociones', label: 'Promociones' },
  { 
    label: 'Recomendaciones',
    subLinks: [
      { href: '/recomendaciones/acne', label: 'Recomendaciones en Acné' },
      { href: '/recomendaciones/dermatitis', label: 'Recomendaciones en Dermatitis Atópica' },
      { href: '/recomendaciones/rosacea', label: 'Recomendaciones en Rosácea' },
      { href: '/recomendaciones/preoperatorias', label: 'Indicaciones Preoperatorias' },
      { href: '/recomendaciones/nieve-carbonica', label: 'Cuidado post Nieve Carbónica' },
      { href: '/recomendaciones/peeling', label: 'Cuidado post Peeling Químico' },
    ]
  },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-2xl text-teal-primary tracking-wide shrink-0"
        >
          DERMACLINICA
        </Link>

        {/* Links escritorio */}
        <ul className="hidden lg:flex items-center gap-8 h-full">
          {links.map(({ href, label, subLinks }) => (
            <li key={label} className="relative group h-full flex items-center">
              {href ? (
                <Link
                  href={href}
                  className={cn(
                    'text-sm font-semibold transition-colors hover:text-teal-primary h-full flex items-center',
                    pathname === href
                      ? 'text-teal-primary border-b-[3px] border-teal-primary pt-[3px]'
                      : 'text-[#2a3044]'
                  )}
                >
                  {label}
                </Link>
              ) : (
                <div className="cursor-pointer text-sm font-semibold transition-colors hover:text-teal-primary text-[#2a3044] flex items-center gap-1.5 h-full">
                  {label} 
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
              )}

              {/* Menú desplegable */}
              {subLinks && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 w-72 z-50 pt-2">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-3 flex flex-col relative overflow-hidden">
                    {/* Borde superior decorativo */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#17969B] to-[#1FB7BC]"></div>
                    
                    {subLinks.map(sub => (
                      <Link 
                        key={sub.href} 
                        href={sub.href} 
                        className="block px-5 py-2.5 text-sm font-medium text-[#2a3044]/80 hover:bg-[#17969B]/5 hover:text-[#17969B] hover:pl-7 transition-all duration-300"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA escritorio */}
        <div className="hidden lg:block shrink-0">
          <Link
            href="/agendar"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#17969B] text-white text-sm font-semibold hover:bg-[#1FB7BC] hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Agenda una cita
          </Link>
        </div>

        {/* Botón hamburger móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-[#2a3044]"
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <div key={link.label} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                {link.href ? (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block text-lg font-semibold transition-colors hover:text-teal-primary',
                      pathname === link.href ? 'text-teal-primary' : 'text-[#2a3044]'
                    )}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div>
                    <div className="text-lg font-semibold text-[#2a3044] mb-4">{link.label}</div>
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#17969B]/20">
                      {link.subLinks?.map(sub => (
                        <Link 
                          key={sub.href} 
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="text-base text-[#2a3044]/70 hover:text-teal-primary"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 mt-2">
              <Link
                href="/agendar"
                onClick={() => setOpen(false)}
                className="block text-center px-6 py-4 rounded-xl bg-[#17969B] text-white text-base font-bold shadow-md"
              >
                Agenda una cita
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
