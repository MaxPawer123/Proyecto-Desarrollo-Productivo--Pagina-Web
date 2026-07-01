import { Mountain, Wrench, MessagesSquare, BookOpenCheck, Users, Leaf, MapPin, Zap } from "lucide-react"

export type Activity = {
  id: string
  icon: any
  title: string
  description: string
  image: string
  alt: string
  tag: string
}

export const activities: Activity[] = [
  {
    id: "fieldtrip-1",
    icon: Mountain,
    title: "Primer Encuentro con los compañeros becarios de la UMSA",
    description:
      "El 17 de octubre de 2025 se realizó la primera reunión con el responsable del proyecto, Ing. Marco Patiño, y los becarios de las carreras de Agronomía, Trabajo Social, Informática y Comunicación Social. Durante el encuentro se presentaron los objetivos, el alcance y el enfoque de trabajo del proyecto.",
    image: "/1reunion.jpg",
    alt: "Primer encuentro con los becarios de la UMSA",
    tag: "Reuniones",
  },
  {
    id: "fieldtrip-2",
    icon: Mountain,
    title: "Realizacion de la Encuesta",
    description:
      "El 23 de octubre de 2025 se recibió una capacitación sobre el uso de KoboToolbox, herramienta que sería utilizada para el diseño y la aplicación de encuestas en las comunidades. Posteriormente, se elaboró y presentó la encuesta al responsable del proyecto y a los compañeros becarios para su revisión y validación.",
    image: "/2reunion.jpg",
    alt: "Equipo en Viscachani",
    tag: "Reuniones",
  },
  {
    id: "fieldtrip-3",
    icon: MapPin,
    title: "Presentación del proyecto en Sica Sica y aplicación de la encuesta",
    description:
      "El 29 de octubre de 2025 se realizó la presentación del proyecto en uno de los espacios de reunión del Municipio de Sica Sica, junto al Ing. Marco Patiño. Durante la actividad, los becarios de las diferentes carreras se presentaron como parte del equipo técnico del proyecto. Asimismo, se aplicó la encuesta elaborada en KoboToolbox a las autoridades comunales y a los productores presentes, con el propósito de recopilar información para el desarrollo del proyecto.",
    image: "/PresentacionProyecto.jpg",
    alt: "Estudiantes explorando Sica Sica",
    tag: "Viajes",
  },
  {
    id: "fieldtrip-4",
    icon: MapPin,
    title: "Viaje a Milla Milla",
    description:
      "Encuentro con productores de quinua en Patacamaya para validar metodologías y recopilar datos de rendimiento.",
    image: "/activity-fieldtrip.jpg",
    alt: "Trabajo de campo en Patacamaya",
    tag: "Viajes",
  },
  {
    id: "workshop-1",
    icon: Wrench,
    title: "Taller de capacitación agrícola",
    description:
      "Sesión práctica en campo donde el conocimiento se construye en conjunto con los productores bajo el principio de 'Aprender Haciendo'.",
    image: "/activity-workshop.jpg",
    alt: "Taller agrícola práctico",
    tag: "Talleres",
  },
  {
    id: "workshop-2",
    icon: Wrench,
    title: "Capacitación en manejo de suelos",
    description:
      "Workshop intensivo sobre análisis y mejoramiento de suelos, dirigido tanto a estudiantes como a productores locales.",
    image: "/activity-workshop.jpg",
    alt: "Taller de suelos",
    tag: "Talleres",
  },
  {
    id: "workshop-3",
    icon: Leaf,
    title: "Taller de técnicas agroecológicas",
    description:
      "Formación teórico-práctica en métodos sustentables de cultivo de quinua y rotación de cultivos.",
    image: "/activity-workshop.jpg",
    alt: "Técnicas agroecológicas",
    tag: "Talleres",
  },
  {
    id: "workshop-4",
    icon: Zap,
    title: "Capacitación en uso de Yapu Aroma",
    description:
      "Formación para productores en el uso de la aplicación móvil Yapu Aroma y sus funcionalidades de planificación.",
    image: "/activity-workshop.jpg",
    alt: "Capacitación app Yapu Aroma",
    tag: "Talleres",
  },
  {
    id: "community-1",
    icon: MessagesSquare,
    title: "Socialización con autoridades locales",
    description:
      "Espacios de diálogo con autoridades de Sica Sica y Patacamaya para validar resultados y escuchar inquietudes.",
    image: "/activity-community.jpg",
    alt: "Reunión con autoridades",
    tag: "Comunidad",
  },
  {
    id: "community-2",
    icon: Users,
    title: "Asamblea comunitaria",
    description:
      "Encuentro con familias productoras para co-diseñar las herramientas y validar avances del proyecto.",
    image: "/activity-community.jpg",
    alt: "Asamblea comunitaria",
    tag: "Comunidad",
  },
  {
    id: "community-3",
    icon: MessagesSquare,
    title: "Devolución de resultados",
    description:
      "Presentación participativa del diagnóstico integral en territorios, recogiendo retroalimentación para ajustes.",
    image: "/activity-community.jpg",
    alt: "Devolución de resultados",
    tag: "Comunidad",
  },
  {
    id: "community-4",
    icon: Users,
    title: "Encuentro de saberes",
    description:
      "Espacios de intercambio entre conocimientos académicos y saberes ancestrales de las comunidades productoras.",
    image: "/activity-community.jpg",
    alt: "Encuentro de saberes",
    tag: "Comunidad",
  },
  {
    id: "research-1",
    icon: BookOpenCheck,
    title: "Levantamiento de datos de campo",
    description:
      "Recolección sistemática de información sobre variedades de quinua, rendimientos y prácticas productivas locales.",
    image: "/activity-diagnosis.jpg",
    alt: "Levantamiento de datos",
    tag: "Investigación",
  },
  {
    id: "research-2",
    icon: BookOpenCheck,
    title: "Análisis de muestras de suelo",
    description:
      "Procesamiento científico de muestras del territorio para caracterizar composición, pH y nutrientes.",
    image: "/activity-diagnosis.jpg",
    alt: "Análisis de suelos",
    tag: "Investigación",
  },
  {
    id: "research-3",
    icon: BookOpenCheck,
    title: "Sistematización de saberes",
    description:
      "Documentación y análisis de prácticas ancestrales de productores para integrarlas al modelo multidisciplinario.",
    image: "/activity-diagnosis.jpg",
    alt: "Sistematización de saberes",
    tag: "Investigación",
  },
]
