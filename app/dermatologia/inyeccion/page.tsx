import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, AlertTriangle, Clock, Activity, ArrowRight, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inyección de Toxina, Relleno y Microneedling | Dermaclinica',
  description: 'Tratamientos avanzados de rejuvenecimiento facial y corporal: Toxina Botulínica, Ácido Hialurónico y Microneedling.',
}

export default function InyeccionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#2a3044] py-24 lg:py-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-primary rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-[500px] h-[500px] bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <p className="text-teal-primary font-bold tracking-widest uppercase text-sm mb-4">Tratamientos Estéticos y Médicos</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Inyección de Toxina, <br className="hidden md:block"/> Relleno y Microneedling
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Procedimientos mínimamente invasivos con los más altos estándares de seguridad y eficacia para rejuvenecer, reparar y mejorar la salud de tu piel.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32 space-y-32">
        
        {/* 1. TOXINA BOTULÍNICA */}
        <section id="botox" className="scroll-mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#17969B]/10 text-[#17969B] text-sm font-semibold mb-4">
                  Neuromoduladores
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2a3044]">
                  Toxina Botulínica (BOTOX)
                </h2>
              </div>
              
              <div className="relative w-full h-64 sm:h-80 rounded-[2rem] overflow-hidden shadow-md">
                <Image src="/images/treatment_botox.png" alt="Tratamiento Botox" fill className="object-cover object-center" />
              </div>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  Es un producto biológico elaborado a partir de una neurotoxina que produce la bacteria anaerobia <em>Clostridium botulinum</em>. Su principal acción es relajar la musculatura, lo que la hace útil en variados campos de la medicina.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <ShieldCheck className="w-8 h-8 text-[#17969B] mb-4" />
                  <h3 className="font-bold text-[#2a3044] mb-2">Seguridad Garantizada</h3>
                  <p className="text-sm text-gray-600">Alta evidencia científica de eficacia y seguridad al ser aplicada por profesionales entrenados.</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <Clock className="w-8 h-8 text-[#17969B] mb-4" />
                  <h3 className="font-bold text-[#2a3044] mb-2">Duración (3 a 6 meses)</h3>
                  <p className="text-sm text-gray-600">Variable según dosis y características. Atletas de alto rendimiento pueden presentar menor duración.</p>
                </div>
              </div>

              <Link href="#" className="inline-flex items-center gap-2 text-[#17969B] font-semibold hover:gap-4 transition-all duration-300">
                VER CASOS DE BOTOX <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 lg:p-10">
              <h3 className="text-xl font-bold text-[#2a3044] mb-6 flex items-center gap-3">
                <Activity className="text-[#17969B]" /> ¿Para qué se usa?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dermatología Médica:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-teal-primary mt-1 shrink-0"/> Trastornos de sudoración (Hiperhidrosis axilar, palmo-plantar, facial)</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-teal-primary mt-1 shrink-0"/> Dishidrosis, Bromohidrosis, Intertrigo, Psoriasis intertriginosa</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-teal-primary mt-1 shrink-0"/> Penfigo familiar benigno</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-teal-primary mt-1 shrink-0"/> Cicatrices y Piloleiomiomas</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-teal-primary mt-1 shrink-0"/> Rosácea, Sindrome de Raynaud, neuralgia post herpética</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dermoestética:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-teal-primary mt-1 shrink-0"/> Arrugas dinámicas faciales y del cuello</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-teal-primary mt-1 shrink-0"/> Contorno facial y elevación de cejas</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                    <AlertTriangle size={18} /> Contraindicaciones
                  </h4>
                  <p className="text-sm text-gray-600">
                    No recomendado en miastenia gravis, infecciones locales, embarazo, lactancia o en uso concurrente de ciertos fármacos (aminoglucosidos, sulfato de magnesio, bloqueadores de calcio).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ÁCIDO HIALURÓNICO */}
        <section id="hialuronico" className="scroll-mt-32 relative">
          <div className="absolute inset-0 bg-gray-50 w-screen left-1/2 -translate-x-1/2 rounded-[3rem] -z-10"></div>
          
          <div className="py-16 grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-[2rem] shadow-md border border-gray-100 p-8 lg:p-10">
              <h3 className="text-xl font-bold text-[#2a3044] mb-6">Usos en Dermoestética</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-teal-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-teal-primary" />
                  </div>
                  Devolver volumen perdido en el rostro
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-teal-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-teal-primary" />
                  </div>
                  Hidratar la piel, cuello y manos
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-teal-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-teal-primary" />
                  </div>
                  Mejorar los contornos faciales
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-teal-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-teal-primary" />
                  </div>
                  Perfilar la nariz y disimular ojeras
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-teal-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-teal-primary" />
                  </div>
                  Rellenar arrugas
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#17969B]/10 text-[#17969B] text-sm font-semibold mb-4">
                  Rellenos Dérmicos
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2a3044]">
                  Ácido Hialurónico
                </h2>
              </div>
              
              <div className="relative w-full h-64 sm:h-80 rounded-[2rem] overflow-hidden shadow-md">
                <Image src="/images/treatment_hialuronico.png" alt="Tratamiento Ácido Hialurónico" fill className="object-cover object-top" />
              </div>

              <div className="prose prose-lg text-gray-600">
                <p>
                  Sustancia viscosa que se encuentra de forma natural en articulaciones, cartílagos y piel. Cumple una función vital en la estructura, hidratación y volumen facial.
                </p>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-teal-primary shadow-sm mt-6">
                  <h4 className="font-bold text-gray-900 mb-2">¿Cómo se utiliza?</h4>
                  <p className="text-sm">Se inyecta en la capa dérmica de la piel mediante una serie de pequeñas inyecciones en la zona a tratar, utilizando agujas muy finas.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-teal-primary shadow-sm mt-4">
                  <h4 className="font-bold text-gray-900 mb-2">Duración (6 a 12 meses)</h4>
                  <p className="text-sm">El ácido se reabsorbe gradualmente, por lo que los efectos son transitorios y reversibles. Depende del estado de la piel y zona de aplicación.</p>
                </div>
              </div>

              <Link href="#" className="inline-flex items-center gap-2 text-[#17969B] font-semibold hover:gap-4 transition-all duration-300">
                VER CASOS DE ÁCIDO HIALURÓNICO <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. MICRONEEDLING */}
        <section id="microneedling" className="scroll-mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#17969B]/10 text-[#17969B] text-sm font-semibold mb-4">
                  Inducción de Colágeno
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2a3044]">
                  Microneedling
                </h2>
              </div>
              
              <div className="relative w-full h-64 sm:h-80 rounded-[2rem] overflow-hidden shadow-md">
                <Image src="/images/treatment_microneedling.png" alt="Tratamiento Microneedling" fill className="object-cover object-center" />
              </div>

              <div className="prose prose-lg text-gray-600">
                <p>
                  También conocido como terapia de inducción de colágeno. Es una técnica mínimamente invasiva que utiliza microagujas para estimular percutáneamente la producción de colágeno tipo I.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <Activity className="w-8 h-8 text-[#17969B] mb-4" />
                  <h3 className="font-bold text-[#2a3044] mb-2">¿Cómo funciona?</h3>
                  <p className="text-sm text-gray-600">Produce un daño controlado que induce un proceso de reparación natural, y crea microcanales que facilitan la absorción de principios activos.</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <Clock className="w-8 h-8 text-[#17969B] mb-4" />
                  <h3 className="font-bold text-[#2a3044] mb-2">Sesiones (30-60 min)</h3>
                  <p className="text-sm text-gray-600">Resultados visibles de inmediato. El número de sesiones varía según las necesidades específicas de cada paciente.</p>
                </div>
              </div>

              <Link href="#" className="inline-flex items-center gap-2 text-[#17969B] font-semibold hover:gap-4 transition-all duration-300">
                VER CASOS DE MICRONEEDLING <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="col-span-full mb-2">
                <h3 className="text-xl font-bold text-[#2a3044]">Beneficios y Usos</h3>
              </div>
              {[
                'Tratamiento rejuvenecedor (booster de vitaminas)',
                'Tratamiento anti acné',
                'Cicatrices y estrías',
                'Contorno de ojos',
                'Despigmentante',
                'Efecto tensor'
              ].map((uso, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3 group hover:border-teal-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-teal-primary/10 flex items-center justify-center group-hover:bg-teal-primary group-hover:text-white transition-colors text-teal-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-semibold text-gray-800 text-sm">{uso}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
