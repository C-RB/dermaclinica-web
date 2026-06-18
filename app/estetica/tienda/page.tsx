'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ShoppingBag, ChevronRight, Search, Filter, Plus, Minus, Check, ChevronDown } from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const categorias = [
  { id: 'all', label: 'Todos' },
  { id: 'antioxidante', label: 'Antioxidante' },
  { id: 'antiedad', label: 'Antiedad' },
  { id: 'hidratacion', label: 'Hidratación' },
  { id: 'proteccion', label: 'Protección' },
  { id: 'ojos', label: 'Contorno de ojos' },
]

const colores: Record<string, string> = {
  antioxidante: '#f59e0b',
  antiedad: '#8b5cf6',
  hidratacion: '#3b82f6',
  proteccion: '#009f96',
  ojos: '#ec4899',
}

const productos = [
  {
    id: 1,
    nombre: 'C E Ferulic',
    subtitulo: 'Triple Antioxidant Serum',
    desc: 'Tratamiento antioxidante de alta potencia con 15% Vitamina C, Vitamina E y Ácido Ferúlico. Previene el daño solar y unifica el tono.',
    imagen: '/images/ce-ferulic-skinceuticals.jpg',
    categoria: 'antioxidante',
    uso: 'Mañana',
    piel: 'Normal a seca',
    precio: '169.900',
  },
  {
    id: 2,
    nombre: 'Phloretin CF',
    subtitulo: 'Broad-Action Antioxidant',
    desc: 'Antioxidante de amplio espectro con 2% Phloretina, 10% Vitamina C y Ácido Ferúlico. Ideal para pieles mixtas con manchas.',
    imagen: '/images/phloretin-cf-skinceuticals.jpg',
    categoria: 'antioxidante',
    uso: 'Mañana',
    piel: 'Mixta a grasa',
    precio: '169.900',
  },
  {
    id: 3,
    nombre: 'Serum 10',
    subtitulo: 'Dual Antioxidant Treatment',
    desc: 'Tratamiento antioxidante suave con 10% Vitamina C y Ácido Ferúlico. Formulación ideal para pieles sensibles o de inicio.',
    imagen: '/images/serum-10-skinceuticals.jpg',
    categoria: 'antioxidante',
    uso: 'Mañana',
    piel: 'Sensible',
    precio: '119.900',
  },
  {
    id: 4,
    nombre: 'Resveratrol B E',
    subtitulo: 'Antioxidant Night Concentrate',
    desc: 'Concentrado nocturno con Resveratrol puro, Baicalina y Vitamina E. Potencia los mecanismos antioxidantes naturales de la piel.',
    imagen: '/images/resveratrol-b-e-skinceuticals.jpg',
    categoria: 'antiedad',
    uso: 'Noche',
    piel: 'Todo tipo',
    precio: '159.900',
  },
  {
    id: 5,
    nombre: 'Retinol 0.3',
    subtitulo: 'High Potency Night Treatment',
    desc: 'Tratamiento de noche con 0.3% Retinol puro. Suaviza arrugas, afina la textura y estimula la renovación celular progresivamente.',
    imagen: '/images/retinol-03-skinceuticals.jpg',
    categoria: 'antiedad',
    uso: 'Noche',
    piel: 'Antiedad',
    precio: '89.900',
  },
  {
    id: 6,
    nombre: 'Hydrating B5',
    subtitulo: 'Moisture-Enhancing Fluid',
    desc: 'Fluido intensamente hidratante con Ácido Hialurónico y Vitamina B5. Repone la barrera cutánea y elimina la sensación de sequedad.',
    imagen: '/images/hydrating-b5-skinceuticals.jpg',
    categoria: 'hidratacion',
    uso: 'Día y noche',
    piel: 'Todo tipo',
    precio: '99.900',
  },
  {
    id: 7,
    nombre: 'Physical Fusion UV Defense',
    subtitulo: 'SPF 50 Sunscreen',
    desc: 'Protector solar físico FPS 50 con filtros minerales. Proporciona protección UVA/UVB con textura fluida de fácil aplicación.',
    imagen: '/images/physical-fusion-uv-defense-skinceuticals.jpg',
    categoria: 'proteccion',
    uso: 'Mañana',
    piel: 'Todo tipo',
    precio: '45.900',
  },
  {
    id: 8,
    nombre: 'Age Eye Complex',
    subtitulo: 'Multi-Correction Eye Cream',
    desc: 'Crema contorno de ojos con retinol, péptidos y ácido hialurónico. Atenúa líneas de expresión, ojeras y bolsas bajo los ojos.',
    imagen: '/images/age-eye-complex-skinceuticals-box.jpg',
    categoria: 'ojos',
    uso: 'Día y noche',
    piel: 'Todo tipo',
    precio: '115.900',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TiendaPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [precioRango, setPrecioRango] = useState<string | null>(null)
  const [filtros, setFiltros] = useState({
    categoria: [] as string[],
    piel: [] as string[],
  })

  const [openAccordion, setOpenAccordion] = useState({
    precio: true,
    categoria: true,
    piel: false,
  })

  const toggleFiltro = (tipo: 'categoria' | 'piel', valor: string) => {
    setFiltros(prev => {
      const actual = prev[tipo]
      if (actual.includes(valor)) {
        return { ...prev, [tipo]: actual.filter(v => v !== valor) }
      } else {
        return { ...prev, [tipo]: [...actual, valor] }
      }
    })
  }

  const toggleAccordion = (section: keyof typeof openAccordion) => {
    setOpenAccordion(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const filtrados = productos.filter(p => {
    const matchSearch = p.nombre.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.subtitulo.toLowerCase().includes(searchQuery.toLowerCase())
    
    const precioNum = parseInt(p.precio.replace('.', ''))
    let matchPrecio = true
    if (precioRango === '0-50') matchPrecio = precioNum <= 50000
    if (precioRango === '50-100') matchPrecio = precioNum > 50000 && precioNum <= 100000
    if (precioRango === '100+') matchPrecio = precioNum > 100000

    const matchCat = filtros.categoria.length === 0 || filtros.categoria.includes(p.categoria)
    const matchPiel = filtros.piel.length === 0 || filtros.piel.includes(p.piel)

    return matchSearch && matchPrecio && matchCat && matchPiel
  })

  const pielesUnicas = Array.from(new Set(productos.map(p => p.piel)))

  return (
    <div className="min-h-screen bg-[#f7f8fc]">

      {/* ── Header ── */}
      <section className="bg-white border-b border-gray-100 py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold text-teal-primary uppercase tracking-[0.22em] mb-3">
              SkinCeuticals · Dermaclinica
            </p>
            <h1 className="font-heading font-semibold text-4xl md:text-5xl text-[#2a3044] leading-tight">
              Nuestros productos
            </h1>
            <p className="text-[#2a3044]/45 text-sm mt-3 max-w-md leading-relaxed">
              Dermocosméticos de grado clínico disponibles en Dermaclinica Temuco.
              Consulta disponibilidad y orientación personalizada con nuestro equipo.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <ShoppingBag size={15} className="text-[#2a3044]/30" />
            <span className="text-sm text-[#2a3044]/40">{productos.length} productos disponibles</span>
          </div>
        </div>
      </section>

      {/* ── Main Layout ── */}
      <section className="py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* ── Sidebar ── */}
          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="bg-white rounded-[2rem] p-7 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 sticky top-24">
              
              {/* Buscador */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-[#2a3044]/60 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Search size={14} className="text-teal-primary" />
                  Buscar Productos
                </h3>
                <div className="relative flex">
                  <input
                    type="text"
                    placeholder="Ej. Blemish age cleanser"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#f8f9fc] border border-transparent text-[#2a3044] text-sm rounded-2xl py-3.5 pl-4 pr-16 focus:outline-none focus:bg-white focus:border-teal-primary/30 focus:ring-4 focus:ring-teal-primary/10 transition-all font-medium placeholder:text-[#a0a8bb]"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#2a3044] text-white px-3 py-1.5 rounded-xl hover:bg-teal-primary transition-colors shadow-sm text-xs font-bold tracking-widest">
                    IR
                  </button>
                </div>
              </div>

              <div className="h-px w-full bg-gray-100 mb-8" />

              {/* Filtros */}
              <div>
                <h3 className="text-xs font-bold text-[#2a3044]/60 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Filter size={14} className="text-teal-primary" />
                  Filtrar productos
                </h3>

                <div className="space-y-6">
                  {/* Precio */}
                  <div>
                    <button 
                      onClick={() => toggleAccordion('precio')}
                      className="w-full flex items-center justify-between font-semibold text-[#2a3044] text-[15px] mb-2 group"
                    >
                      Precio
                      <motion.div animate={{ rotate: openAccordion.precio ? 180 : 0 }} className="text-gray-400 group-hover:text-teal-primary transition-colors">
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openAccordion.precio && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3.5 pt-3 pb-1">
                            {[
                              { id: 'all', label: 'Todos los precios' },
                              { id: '0-50', label: '$0 - $50.000' },
                              { id: '50-100', label: '$50.001 - $100.000' },
                              { id: '100+', label: 'Más de $100.000' }
                            ].map(op => (
                              <label key={op.id} className="flex items-center gap-3.5 cursor-pointer group" onClick={() => setPrecioRango(op.id === 'all' ? null : op.id)}>
                                <div className={`w-5 h-5 rounded flex items-center justify-center transition-all duration-300 ${precioRango === op.id || (op.id === 'all' && !precioRango) ? 'bg-teal-primary border-teal-primary shadow-sm shadow-teal-primary/30' : 'bg-gray-50 border border-gray-200 group-hover:border-teal-primary'}`}>
                                  {(precioRango === op.id || (op.id === 'all' && !precioRango)) && <Check size={12} className="text-white" strokeWidth={3} />}
                                </div>
                                <span className={`text-[14px] ${precioRango === op.id || (op.id === 'all' && !precioRango) ? 'text-[#2a3044] font-semibold' : 'text-[#5b6479] font-medium group-hover:text-[#2a3044] transition-colors'}`}>{op.label}</span>
                              </label>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="h-px w-full bg-gray-50" />

                  {/* Categoría (Acción) */}
                  <div>
                    <button 
                      onClick={() => toggleAccordion('categoria')}
                      className="w-full flex items-center justify-between font-semibold text-[#2a3044] text-[15px] mb-2 group"
                    >
                      Acción
                      <motion.div animate={{ rotate: openAccordion.categoria ? 180 : 0 }} className="text-gray-400 group-hover:text-teal-primary transition-colors">
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openAccordion.categoria && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3.5 pt-3 pb-1">
                            {categorias.filter(c => c.id !== 'all').map(cat => (
                              <label key={cat.id} className="flex items-center gap-3.5 cursor-pointer group" onClick={() => toggleFiltro('categoria', cat.id)}>
                                <div className={`w-5 h-5 rounded flex items-center justify-center transition-all duration-300 ${filtros.categoria.includes(cat.id) ? 'bg-teal-primary border-teal-primary shadow-sm shadow-teal-primary/30' : 'bg-gray-50 border border-gray-200 group-hover:border-teal-primary'}`}>
                                  {filtros.categoria.includes(cat.id) && <Check size={12} className="text-white" strokeWidth={3} />}
                                </div>
                                <span className={`text-[14px] capitalize ${filtros.categoria.includes(cat.id) ? 'text-[#2a3044] font-semibold' : 'text-[#5b6479] font-medium group-hover:text-[#2a3044] transition-colors'}`}>{cat.label}</span>
                              </label>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="h-px w-full bg-gray-50" />

                  {/* Tipo de Piel */}
                  <div>
                    <button 
                      onClick={() => toggleAccordion('piel')}
                      className="w-full flex items-center justify-between font-semibold text-[#2a3044] text-[15px] mb-2 group"
                    >
                      Tipo de Piel
                      <motion.div animate={{ rotate: openAccordion.piel ? 180 : 0 }} className="text-gray-400 group-hover:text-teal-primary transition-colors">
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openAccordion.piel && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3.5 pt-3 pb-1">
                            {pielesUnicas.map(piel => (
                              <label key={piel} className="flex items-center gap-3.5 cursor-pointer group" onClick={() => toggleFiltro('piel', piel)}>
                                <div className={`w-5 h-5 rounded flex items-center justify-center transition-all duration-300 ${filtros.piel.includes(piel) ? 'bg-teal-primary border-teal-primary shadow-sm shadow-teal-primary/30' : 'bg-gray-50 border border-gray-200 group-hover:border-teal-primary'}`}>
                                  {filtros.piel.includes(piel) && <Check size={12} className="text-white" strokeWidth={3} />}
                                </div>
                                <span className={`text-[14px] capitalize ${filtros.piel.includes(piel) ? 'text-[#2a3044] font-semibold' : 'text-[#5b6479] font-medium group-hover:text-[#2a3044] transition-colors'}`}>{piel}</span>
                              </label>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </div>
            </div>
          </aside>

          {/* ── Grid ── */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center pb-2">
              <p className="text-sm text-[#5b6479]">
                Mostrando <span className="font-semibold text-[#2a3044]">{filtrados.length}</span> resultados
              </p>
              <div className="flex items-center gap-2 text-sm text-[#5b6479] cursor-pointer hover:text-teal-primary">
                <Filter size={16} />
                <span>Ordenar por defecto</span>
              </div>
            </div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filtrados.map(p => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col"
                  >
                    {/* Top Section */}
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-heading text-[#5b6479] font-medium text-[15px] leading-snug pr-4">
                          {p.nombre} {p.subtitulo}
                        </h3>
                        <div className="mt-2 text-sm flex items-baseline gap-1">
                          <span className="text-[#5b6479] font-medium text-xs">desde</span>
                          <span className="text-[#2a3044] font-semibold text-lg">${p.precio}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colores[p.categoria] }} />
                        <span className="text-[11px] font-medium text-[#7a839e] capitalize">
                          {categorias.find(c => c.id === p.categoria)?.label}
                        </span>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex items-center justify-center py-6 flex-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.imagen}
                        alt={p.nombre}
                        className="h-56 w-auto object-contain transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Buttons Section */}
                    <div className="flex items-center gap-2 mt-4">
                      <a
                        href={`https://wa.me/56936909397?text=${encodeURIComponent(`Hola, me interesa el producto ${p.nombre}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-[3] flex items-center justify-between px-5 py-3 bg-[#8ca3d4] text-white rounded-full hover:bg-[#7a91c2] transition-colors shadow-sm group"
                      >
                        <span className="text-sm font-medium">Comprar</span>
                        <ChevronRight size={16} className="text-white/80 group-hover:text-white transition-colors" />
                      </a>
                      <a
                        href={`https://wa.me/56936909397?text=${encodeURIComponent(`Hola, quisiera más información sobre ${p.nombre}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-[2] flex items-center justify-center px-4 py-3 border border-gray-200 text-[#5b6479] text-sm font-medium rounded-full hover:border-gray-300 transition-colors bg-white shadow-sm"
                      >
                        Ver más
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtrados.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-24 mt-4 text-center bg-white rounded-3xl border border-gray-100 shadow-sm"
              >
                <Search size={40} className="text-teal-primary/30 mb-4" />
                <h4 className="text-lg font-semibold text-[#2a3044] mb-2">No se encontraron productos</h4>
                <p className="text-[#5b6479] text-sm max-w-sm">
                  Intenta ajustar los filtros o limpiar tu búsqueda actual.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setPrecioRango(null)
                    setFiltros({ categoria: [], piel: [] })
                  }}
                  className="mt-6 px-6 py-2.5 bg-teal-primary/10 text-teal-primary font-semibold text-sm rounded-full hover:bg-teal-primary/20 transition-colors"
                >
                  Limpiar filtros
                </button>
              </motion.div>
            )}
          </div>

        </div>
      </section>

      {/* ── Banner SkinCeuticals ── */}
      <section className="bg-[#2a3044] py-14 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold text-teal-light uppercase tracking-[0.22em] mb-2">
              Distribuidor autorizado
            </p>
            <p className="font-heading font-semibold text-xl md:text-2xl text-white mb-1">
              SkinCeuticals en Dermaclinica
            </p>
            <p className="text-white/45 text-sm max-w-md leading-relaxed">
              Todos nuestros productos son originales y cuentan con el respaldo de nuestros
              dermatólogos para orientarte en la rutina ideal para tu piel.
            </p>
          </div>
          <a
            href="https://wa.me/56936909397?text=Hola%2C%20quisiera%20orientaci%C3%B3n%20sobre%20qu%C3%A9%20productos%20SkinCeuticals%20son%20ideales%20para%20mi%20piel."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-teal-primary text-white font-semibold text-sm hover:bg-teal-secondary transition-colors"
          >
            <MessageCircle size={15} />
            Pedir orientación personalizada
          </a>
        </div>
      </section>

    </div>
  )
}
