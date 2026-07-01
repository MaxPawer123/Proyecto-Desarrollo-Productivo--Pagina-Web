import {
  Users,
  ClipboardList,
  Rocket,
  Shield,
  CheckCircle2,
  Palette,
  Truck,
  Zap,
  Globe,
  Sprout,
  LucideIcon,
} from "lucide-react"

export interface Milestone {
  icon: LucideIcon
  label: string
  date: string
  title: string
  description: string
}

export const milestones: Milestone[] = [
  {
    icon: Users,
    label: "Hito 01",
    date: "Octubre 2025",
    title: "Planificación Inicial y Reuniones con el Equipo",
    description:
      "Primeras reuniones y conformación del equipo multidisciplinario en la UMSA. Estudiantes de distintas facultades se reúnen para trazar un objetivo común: aportar al desarrollo de las comunidades productoras de quinua.",
  },
  {
    icon: Shield,
    label: "Hito 02",
    date: "Nuestra primera meta: Marzo 2025",
    title: "Configuración de Redes y Seguridad",
    description:
      "Subneteo, Packet Tracer y bases de datos iniciales del ecosistema. Se estructuran los fundamentos técnicos y de seguridad para el proyecto.",
  },
  {
    icon: CheckCircle2,
    label: "Hito 03",
    date: "Mayo 2025",
    title: "Validación e Identidad Digital",
    description:
      "Procesos de registro en portales ciudadanos y estructuración legal. Se estabelecen las bases normativas y digitales del proyecto.",
  },
  {
    icon: Rocket,
    label: "Hito 04",
    date: "Septiembre 2025",
    title: "Arranque del Ecosistema de Software",
    description:
      "Inicio del desarrollo de los módulos core y la plataforma habitacional asociada. Comienza la construcción de la infraestructura digital principal.",
  },
  {
    icon: Palette,
    label: "Hito 05",
    date: "Octubre 2025",
    title: "Primeros Conceptos de Gamificación",
    description:
      "Diseño de prototipos lúdicos e interactivos (El Tesoro del Morcillo) con temáticas históricas y locales. Se exploran mecanismos de engagement y motivación.",
  },
  {
    icon: ClipboardList,
    label: "Hito 06",
    date: "Noviembre 2025",
    title: "Trabajo de Campo en Comunidades",
    description:
      "Talleres y socialización presencial del proyecto en Milla Milla y Patacamaya. Primeros contactos directos con productores y autoridades locales.",
  },
  {
    icon: Palette,
    label: "Hito 07",
    date: "Marzo 2026",
    title: "Evolución de Identidad: Yapu Aroma",
    description:
      "Refactorización visual y cambio oficial de nombre a Yapu Aroma para conectar con la producción de quinua y hortalizas. Se redefine la identidad del proyecto.",
  },
  {
    icon: Truck,
    label: "Hito 08",
    date: "Abril 2026",
    title: "Despliegue y Pruebas en Lahuachaca",
    description:
      "Viaje de entrenamiento y demostración de la aplicación móvil en territorio productivo. Se valida la funcionalidad en campo real con productores.",
  },
  {
    icon: Globe,
    label: "Hito 09",
    date: "Mayo 2026",
    title: "Lanzamiento y Distribución Pública",
    description:
      "Publicación del enlace oficial para promover e integrar la aplicación Yapu Aroma con los productores del altiplano. La app se pone al alcance de los usuarios.",
  },
  {
    icon: Sprout,
    label: "Hito 10",
    date: "Junio 2026 / Actualidad",
    title: "Independencia de Módulos y Futuro",
    description:
      "Separación e inicio del proyecto autónomo de 'Planificación de Cultivo' para expandir las capacidades del agro. Se abre una nueva etapa de escalabilidad.",
  },
]
