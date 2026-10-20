export type Horario = {
  dia: string
  fecha: string
  horas: string[]
}

export type Especialista = {
  nombre: string
  slug: string
  foto?: string
  nota?: string
  titulo?: string
  direccion?: string
  horarios?: Horario[]
}

// Datos de ejemplo (referencia de diseño) — reemplazar por disponibilidad real
// cuando exista una integración con el sistema de reservas de la clínica.
export const especialistas: Especialista[] = [
  {
    nombre: 'Isabel Herrera Salazar',
    slug: 'isabel-herrera-salazar',
    foto: '/images/isabel2.jpg',
    titulo: 'Médico Dermatólogo',
    direccion: 'Av. Alemania 0999, 7° piso',
    horarios: [
      { dia: 'Martes', fecha: '14 de julio', horas: ['09:30', '10:15', '11:00', '16:30'] },
      { dia: 'Jueves', fecha: '16 de julio', horas: ['09:30', '12:00'] },
    ],
  },
  {
    nombre: 'Fernanda Sepúlveda Campos',
    slug: 'fernanda-sepulveda-campos',
    foto: '/images/fernanda2.jpg',
    titulo: 'Médico Dermatólogo',
    direccion: 'Av. Alemania 0999, 7° piso',
    horarios: [
      { dia: 'Martes', fecha: '14 de julio', horas: ['10:00', '11:30', '17:00'] },
      { dia: 'Viernes', fecha: '17 de julio', horas: ['09:30', '10:15'] },
    ],
  },
  {
    nombre: 'Miguel Ángel Lassalle',
    slug: 'miguel-angel-lassalle',
    foto: '/images/team04.jpg',
    titulo: 'Médico Dermatólogo',
    direccion: 'Av. Alemania 0999, 7° piso',
    horarios: [
      { dia: 'Martes', fecha: '14 de julio', horas: ['16:00', '16:45', '18:00'] },
    ],
  },
  {
    nombre: 'Roberto Reveco Betancourt',
    slug: 'roberto-reveco-betancourt',
    titulo: 'Médico Dermatólogo',
    direccion: 'Av. Alemania 0999, 7° piso',
    horarios: [
      { dia: 'Martes', fecha: '14 de julio', horas: ['09:00', '09:45'] },
      { dia: 'Miércoles', fecha: '15 de julio', horas: ['11:00'] },
    ],
  },
  {
    nombre: 'Gastón Briceño Rivera',
    slug: 'gaston-briceno-rivera',
    foto: '/images/team02.jpg',
    titulo: 'Médico Dermatólogo',
    direccion: 'Av. Alemania 0999, 7° piso',
    horarios: [
      { dia: 'Miércoles', fecha: '15 de julio', horas: ['15:30', '16:15', '17:00'] },
    ],
  },
  {
    nombre: 'María Jesús Hernández',
    slug: 'maria-jesus-hernandez',
    titulo: 'Médico Dermatólogo',
    direccion: 'Av. Alemania 0999, 7° piso',
    horarios: [
      { dia: 'Viernes', fecha: '17 de julio', horas: ['09:30', '10:15', '11:00'] },
    ],
  },
  {
    nombre: 'Cristian Pinto Santana',
    slug: 'cristian-pinto-santana',
    foto: '/images/dr-pinto-1.jpeg',
    titulo: 'Médico Dermatólogo',
    direccion: 'Av. Alemania 0999, 7° piso',
  },
  {
    nombre: 'Yesenia Valenzuela Vergara',
    slug: 'yesenia-valenzuela-vergara',
    foto: '/images/team01.jpg',
    titulo: 'Médico Dermatólogo',
    nota: 'Atención a mayores de 14 años',
    direccion: 'Av. Alemania 0999, 7° piso',
  },
  {
    nombre: 'María Paz Traipe Páez',
    slug: 'maria-paz-traipe-paez',
    titulo: 'Médico Dermatólogo',
    direccion: 'Av. Alemania 0999, 7° piso',
  },
  {
    nombre: 'Javiera Agouborde Kuncar',
    slug: 'javiera-agouborde-kuncar',
    titulo: 'Médico Dermatólogo',
    direccion: 'Av. Alemania 0999, 7° piso',
  },
]

export function getEspecialista(slug: string) {
  return especialistas.find((e) => e.slug === slug)
}

export function iniciales(nombre: string) {
  const partes = nombre.split(' ').filter(Boolean)
  return ((partes[0]?.[0] ?? '') + (partes[1]?.[0] ?? '')).toUpperCase()
}
