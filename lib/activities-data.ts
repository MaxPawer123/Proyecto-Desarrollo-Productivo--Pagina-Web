import { Mountain, Wrench, MessagesSquare, BookOpenCheck, Users, Leaf, MapPin, Zap } from "lucide-react"

export type Activity = {
  id: string
  icon: any
  title: string
  description: string
  image?: string
  images?: string[]
  video?: string // Link de YouTube, Vimeo o video .mp4 (ej: "https://www.youtube.com/watch?v=...")
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
    images: ["/1reunion.jpg"],
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
    images: ["/2reunion.jpg"],
    alt: "Equipo en Viscachani",
    tag: "Reuniones",
  },
  {
    id: "fieldtrip-3",
    icon: MapPin,
    title: "Presentación del proyecto en Sica Sica",
    description:
      "El 29 de octubre de 2025 - Se realizó la presentación del proyecto en uno de los espacios de reunión del Municipio de Sica Sica, junto al Ing. Marco Patiño. Durante la actividad, los becarios de las diferentes carreras se presentaron como parte del equipo técnico del proyecto. Asimismo, se aplicó la encuesta elaborada en KoboToolbox a las autoridades comunales y a los productores presentes, con el propósito de recopilar información para el desarrollo del proyecto.",
    image: "/PresentacionProyecto.jpg",
    alt: "Estudiantes explorando Sica Sica",
    tag: "Viajes",
  },
  {
    id: "fieldtrip-4",
    icon: MapPin,
    title: "Encuentro con productores de quinua en Milla Milla.",
    description:
      "El 16 de noviembre de 2025 - Se realizó la presentación del proyecto, validación de metodologías y recopilación de datos de rendimiento. Se impartió un taller práctico de diagnóstico de suelos (toma de muestras, medición de pH y captura de microorganismos con arroz). Se evidenció baja participación de mujeres y jóvenes, pero se identificaron líderes comunitarios proactivos.",
    image: "/visitaMillaMilla.png",
    alt: "Trabajo de campo en Milla Milla",
    tag: "Viajes",
  },
  {
    id: "workshop-1",
    icon: Wrench,
    title: "Continuación de talleres en Sica Sica.",
    description:
      "El 17 de noviembre de 2025 - Se profundizó en el manejo de suelos y prácticas orgánicas bajo el enfoque Aprender Haciendo. Se recopilaron datos económicos y productivos, identificando falta de educación financiera y dependencia de intermediarios. También se confirmó la ausencia de tecnologías automatizadas en los cultivos",
    images: ["/tallerArroz.png"],
    alt: "Taller agrícola práctico",
    tag: "Talleres",
  },
  {
    id: "workshop-2",
    icon: Wrench,
    title: "Visita a productores de hortalizas en Viscachani y reunión con concejalas de Patacamaya.",
    description:
      "El 18 de noviembre de 2025 - Se constató un mayor nivel de tecnificación en cultivos de hortalizas (riego, maquinaria). En la reunión con autoridades, se identificaron limitaciones institucionales para impulsar liderazgos femeninos. Se cerró la jornada consolidando acuerdos y proyectando futuras intervenciones.",
    images: ["/produc17Nov.png", "/autoridades.png"],
    alt: "Taller de suelos",
    tag: "Talleres",
  },
  {
    id: "workshop-3",
    icon: Leaf,
    title: "Taller práctico de elaboración de bioinsumos y preparación de suelos (22 de noviembre de 2025)",
    description:
     "El pasado 22 de noviembre de 2025 retornamos a las comunidades para desarrollar el taller práctico de elaboración de bioinsumos orientados a recuperar la fertilidad de los suelos. Tras haber entregado previamente todos los materiales e insumos necesarios, trabajamos de manera directa junto a las familias productoras en el acondicionamiento de abonos y el armado de los biodigestores (con el sellado de tapas, mangueras y la mezcla de estiércol, chancaca y leche) para la producción de biol.",
    images: ["/21diciembre253.jpeg","/21diciembre25.jpeg", "/21diciembre252.jpeg","/21diciembre254.jpeg","/21diciembre255.jpeg", ],
    alt: "Taller de suelos",
    tag: "Taller de suelossda",
  },
  {
    id: "workshop-4",
    icon: Leaf,
    title: "Evaluación de resultados en campo y cierre de gestión con las comunidades",
    description:
      "El 22 de diciembre de 2025 retornamos a las comunidades de Milla Milla, Imilla Imilla y Tarucamarca para evaluar junto a los productores el estado de las trampas de arroz instaladas previamente. Fue una jornada sumamente gratificante al comprobar visualmente la presencia de microorganismos benéficos que fortalecerán la vida de sus suelos. Aprovechamos este valioso encuentro para agradecer profundamente el compromiso de cada familia productora y desearles unas felices fiestas y un próspero año agrícola.",
    video: "https://www.youtube.com/watch?v=DU42PpcpoQ4",
    image: "/video-evaluacion-thumb.jpg",
    alt: "Evaluación de resultados en campo",
    tag: "Talleres",
  },
  {
    id: "community-1",
    icon: MessagesSquare,
    title: "Entrega final de informes multidisciplinarios",
    description:
      "El 19 de diciembre de 2025 se concretó la entrega final de los informes consolidados por los representantes de las cinco carreras participantes de la UMSA (Ingeniería Agronómica, Trabajo Social, Administración de Empresas, Informática y Comunicación Social). Este hito sintetizó todo el diagnóstico participativo, análisis de costos, validación de suelos y propuestas tecnológicas desarrolladas en beneficio de las familias productoras de Sica Sica y Patacamaya.",
    image: "/entrega final informe2025.jpeg",
    alt: "Reunión con autoridades",
    tag: "Comunidad",
  },
  { 
    id: "community-2",
    icon: Users,
    title: "Taller con productores de hortalizas en Chiarumani",
    description:
      "Espacio de encuentro y taller realizado en la comunidad de Chiarumani junto a los agricultores de hortalizas, promoviendo el diálogo participativo, el acompañamiento en campo y el fortalecimiento productivo de las familias locales.",
    image: "/12_abril.jpeg",
    alt: "Asamblea comunitaria",
    tag: "Comunidad",
  },
 
 
  
 
]
