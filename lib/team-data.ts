import { Code2, Sprout, HeartHandshake, BarChart3, Briefcase, GraduationCap } from "lucide-react"

export type SocialLink = {
  platform: "facebook" | "tiktok" | "linkedin" | "whatsapp" | "email"
  url: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  department: string
  image: string
  bio: string
  achievements: string[]
  socials?: SocialLink[]
}

export type TeamArea = {
  id: string
  name: string
  description: string
  icon: any
  color: string
  members: TeamMember[]
}

export const coordinators: TeamMember[] = [
  {
    id: "coord-1",
    name: "",
    role: "Coordinador General",
    department: "Facultad de Agronomía",
    image: "/placeholder-user.jpg",
    bio: "Ingeniero Agrónomo con especialización en cultivos andinos. Más de 15 años de experiencia en investigación aplicada con comunidades campesinas del altiplano boliviano.",
    achievements: [
      "Director de 5 proyectos de desarrollo rural",
      "Publicaciones en revistas internacionales",
      "Reconocimiento de CONACYT por investigación en quinua",
    ],
    socials: [
      { platform: "facebook", url: "https://facebook.com" },
      { platform: "tiktok", url: "https://tiktok.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "whatsapp", url: "https://wa.me/+59164123456" },
      { platform: "email", url: "mailto:juan.carlos.mamani@universidad.edu.bo" },
    ],
  },
  {
    id: "coord-2",
    name: "Ing. MSc. Marco Antonio Patiño Fernández",
    role: "Docente Facultad de Agronomía - UMSA",
    department: "Responsable técnico, administrativo del proyecto y tutor",
    image: "/ingpati.png",
    bio: "Magíster en Desarrollo Rural. Especialista en vinculación entre universidades y comunidades. Lidera procesos de co-investigación participativa.",
    achievements: [
      "",
      "",
      "",
    ],
    socials: [
      { platform: "facebook", url: "" },
      { platform: "tiktok", url: "" },
      { platform: "linkedin", url: "" },
    ],
  },
]

export const teamAreas: TeamArea[] = [
  {
    id: "informatica",
    name: "Informática",
    description:
      "Desarrollo de soluciones tecnológicas innovadoras para el contexto rural. Arquitectura de la app Yapu Aroma con enfoque offline-first.",
    icon: Code2,
    color: "bg-blue-50 text-blue-600",
    members: [
      {
        id: "info-1",
        name: "Ghilmar David Mamani Valeriano",
        role: "",
        department: "Carrera de Informática",
        image: "/david.png",
        bio: ".",
        achievements: [
          "Arquitecto de Yapu Aroma",
          "Experto en React Native y desarrollo offline",
          "Mentor técnico del equipo",
        ],
        socials: [
          { platform: "facebook", url: "https://www.facebook.com/max.pawer.5011516/" },
          { platform: "linkedin", url: "https://www.facebook.com/marcoantonio.patino.9210" },
          { platform: "whatsapp", url: "https://wa.me/+59169769901" },
        ],
      },
    ],
  },
  {
    id: "agronomia",
    name: "Agronomía",
    description:
      "Análisis científico del cultivo de quinua, mejoramiento de prácticas y validación de tecnologías agrícolas.",
    icon: Sprout,
    color: "bg-green-50 text-green-600",
    members: [
      {
        id: "agro-1",
        name: "Irene Loida Uruchi Callisaya",
        role: "Especialista en Cultivos Andinos",
        department: "Carrera de Agronomía",
        image: "/irene.png",
        bio: "Agrónomo especializado en quinua y papa nativa. Investigador de técnicas de manejo agroecológico en el altiplano.",
        achievements: [
          "Publicaciones en Agronomía Tropical",
          "Certificación en Agroecología",
          "Productor de semilla certificada",
        ],
        socials: [
          { platform: "facebook", url: "https://facebook.com" },
          { platform: "tiktok", url: "https://tiktok.com" },
          { platform: "linkedin", url: "https://linkedin.com" },
        ],
      },
    ],
  },
  {
    id: "trabajo-social",
    name: "Trabajo Social",
    description: "Fortalecimiento de vínculos comunitarios, facilitación del diálogo y procesos participativos.",
    icon: HeartHandshake,
    color: "bg-red-50 text-red-600",
    members: [
      {
        id: "ts-1",
        name: "Fátima Zulema Saavedra Suárez",
        role: "",
        department: "Carrera de Trabajo Social",
        image: "/Zulema.jpg",
        bio: "Profesional en Trabajo Social con diplomado en Educación Superior y formación técnica en Gastronomía Profesional. Experiencia en desarrollo rural, investigación social, coordinación interinstitucional y fortalecimiento comunitario, con enfoque de género, derechos y desarrollo territorial. .",
        achievements: [
          "Desarrollo de diagnósticos sociales y modelos de intervención.",
          "Diseño y ejecución de proyectos de promoción de la salud y desarrollo comunitario.",
          "Experiencia en intervención familiar y trabajo comunitario.",
          "Voluntaria en campañas de apoyo a niñas y niños con cáncer.",
        ],
        socials: [
          { platform: "facebook", url: "https://www.facebook.com/share/19HhBH3MEg/" },
          { platform: "linkedin", url: "https://www.linkedin.com/in/fatima-zulema-saavedra-suarez-57596b367?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
          { platform: "whatsapp", url: "https://wa.me/+59164789012" },
        ],
      },
      {
        id: "ts-2",
        name: "Gabriela Fatima Mayta Quispe",
        role: "",
        department: "Carrera de Trabajo Social",
        image: "/Fatima.jpg",
        bio: "",
        achievements: [
          "Apoyo técnico en proyectos de cooperación agropecuaria",
          "Facilitadora de espacios colectivos",
        ],
        socials: [
          { platform: "facebook", url: "https://facebook.com" },
          { platform: "tiktok", url: "https://tiktok.com" },
          { platform: "linkedin", url: "https://linkedin.com" },
          { platform: "whatsapp", url: "https://wa.me/+59164890123" },
        ],
      },
    ],
  },
  {
    id: "comunicacion-social",
    name: "Comunicación Social",
    description:
      "Diseño de estrategias de difusión y fortalecimiento de la identidad comunitaria. Promoción de productos locales y procesos comunicacionales que aseguren la participación inclusiva de todos los actores del sistema productivo.",
    icon: BarChart3,
    color: "bg-yellow-50 text-yellow-600",
    members: [
      {
        id: "com-1",
        name: "Yoshio Nicolas Parisaca Coarite",
        role: "Comunicador Social",
        department: "Carrera de Comunicación Social",
        image: "/yoshio.png",
        bio: "",
        achievements: [
          "",
          "",
          "",
        ],
        socials: [
          { platform: "facebook", url: "https://facebook.com" },
          { platform: "tiktok", url: "https://tiktok.com" },
          { platform: "linkedin", url: "https://linkedin.com" },
          { platform: "whatsapp", url: "https://wa.me/+59164901234" },
        ],
      },
    ],
  },
  {
    id: "administracion",
    name: "Administración de Empresas",
    description: "Gestión eficiente de recursos productivos y análisis de rentabilidad agroempresarial. Planificación estratégica de costos, control financiero y búsqueda de mercados competitivos para mejorar los ingresos de las familias.",
    icon: Briefcase,
    color: "bg-purple-50 text-purple-600",
    members: [
      {
        id: "admin-1",
        name: "Tatiana Borras Anze",
        role: "Administrador del Proyecto",
        department: "Carrera de Administración",
        image: "/Tati.jpg",
        bio: "Profesional de Administración de Empresas de la UMSA, con mención en Gestión de Talento Humano. Experiencia en investigación del desarrollo profesional de estudiantes universitarios con enfoque en su perfil profesional al mercado laboral.",
        achievements: [
          "Diseño y elaboración de diagnósticos y modelos de intervención en áreas rurales",
          "Desarrollo de proyectos de servicio hacia niños y personas vulnerables.",
          "Experiencia de trabajo en equipos de alto rendimiento y liderazgo",
          "Voluntariados en servicio a niños y animales rescatados",
          "Experiencia en traducción del idioma inglés.",
        ],
        socials: [
          { platform: "facebook", url: "https://facebook.com" },
          { platform: "tiktok", url: "https://tiktok.com" },
          { platform: "linkedin", url: "https://linkedin.com" },
          { platform: "whatsapp", url: "https://wa.me/+59165123456" },
        ],
      },
    ],
  },
]
