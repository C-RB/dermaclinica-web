import Link from 'next/link'
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react'
import Hero from '@/components/Hero'
import SolutionsSection from '@/components/SolutionsSection'

const servicios = [
  {
    image: '/images/service_laser.png',
    title: 'Depilación Láser',
    desc: 'Tecnología de última generación para una eliminación permanente del vello.',
  },
  {
    image: '/images/service_cooltech.png',
    title: 'CoolTech',
    desc: 'Criolipólisis no invasiva para reducir la grasa localizada sin cirugía.',
  },
  {
    image: '/images/service_botox.png',
    title: 'Toxina Botulínica',
    desc: 'Tratamiento médico-estético para suavizar líneas de expresión.',
  },
  {
    image: '/images/service_facial.png',
    title: 'Cosmetología',
    desc: 'Tratamientos faciales y corporales personalizados para tu piel.',
  },
]



export default async function HomePage() {

  return (
    <>
      <Hero />

      {/* Servicios destacados */}
      <section className="py-24 bg-white relative">
        {/* Decoración de fondo opcional */}
        <div className="absolute top-0 left-0 w-full h-[60%] bg-gray-50/50 -z-10 rounded-b-[4rem]"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-teal-primary uppercase tracking-[0.2em] mb-3">
              Nuestros tratamientos
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-charcoal">
              Servicios Destacados
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicios.map(({ image, title, desc }) => (
              <div
                key={title}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col bg-white relative z-20 -mt-6 mx-4 rounded-2xl shadow-sm border border-gray-50/80">
                  <h3 className="font-heading font-bold text-lg text-charcoal mb-3">{title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed mb-5 flex-1">{desc}</p>
                  <Link href="/servicios" className="inline-flex items-center gap-2 text-teal-primary text-sm font-semibold hover:text-teal-secondary transition-colors mt-auto group/link">
                    Conocer más <ChevronRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/servicios"
              className="inline-flex items-center px-8 py-4 rounded-full bg-charcoal text-white font-semibold hover:bg-charcoal/90 transition-colors text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-300"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>



      {/* Soluciones interactivas */}
      <SolutionsSection />

      {/* Productos Destacados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#f8f9fc] rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-gray-100/50">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <p className="text-xs font-bold text-[#8ba2cd] uppercase tracking-widest mb-3">
                  Nuestros Productos
                </p>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#2a3044]">
                  Productos Destacados
                </h2>
              </div>
              <div className="hidden md:flex gap-3 mt-6 md:mt-0">
                <button className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#8ba2cd] hover:text-teal-primary hover:border-teal-primary transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#8ba2cd] hover:text-teal-primary hover:border-teal-primary transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  nombre: 'SkinCeuticals C E Ferulic',
                  tag: 'Antioxidante',
                  tagColor: 'bg-orange-400',
                  precio: 'desde $149.990',
                  imagen: '/images/ce-ferulic-skinceuticals.jpg',
                },
                {
                  nombre: 'SkinCeuticals HA Intensifier',
                  tag: 'Antiedad',
                  tagColor: 'bg-purple-400',
                  precio: 'desde $109.990',
                  imagen: '/images/skinceuticals-ha-intensifier.jpg',
                },
                {
                  nombre: 'Babé Hidratante Matificante',
                  tag: 'Acné',
                  tagColor: 'bg-teal-400',
                  precio: 'desde $19.990',
                  imagen: '/images/babe-hidratante-matificante-50-ml.jpg',
                },
              ].map((prod) => (
                <div key={prod.nombre} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                  {/* Header de la tarjeta */}
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-heading font-medium text-[#2a3044] text-base leading-snug">
                      {prod.nombre}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0 mt-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${prod.tagColor}`}></span>
                      <span className="text-[11px] font-medium text-[#8ba2cd]">{prod.tag}</span>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-[#2a3044] mb-8">{prod.precio}</p>

                  {/* Imagen */}
                  <div className="flex-1 flex items-center justify-center mb-8 h-48 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={prod.imagen} alt={prod.nombre} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-[1.2] bg-[#8ba2cd] hover:bg-[#7289b5] text-white rounded-full py-3 px-5 text-xs font-semibold flex items-center justify-between transition-colors shadow-sm">
                      <span>Comprar</span>
                      <ChevronRight size={14} className="opacity-70" />
                    </button>
                    <button className="flex-1 bg-white border border-gray-200 hover:border-gray-300 text-charcoal/70 rounded-full py-3 px-4 text-xs font-semibold transition-colors text-center">
                      Ver más
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Contacto */}
      <section className="py-20 bg-teal-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Agenda tu consulta con nuestros especialistas. Estamos en Temuco, Chile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-sm bg-white text-teal-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Agenda en línea
            </Link>
            <a
              href="tel:+56226565050"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-sm border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone size={16} />
              Llámanos
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
