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
    date: "Septiembre 2025",
    title: "Conformación del Equipo Multidisciplinario",
    description:
      "Integración de las cinco áreas de la UMSA (Informática, Agronomía, Administración de Empresas, Trabajo Social y Comunicación Social) para impulsar el desarrollo productivo en Sica Sica y Patacamaya.",
  },
  {
    icon: Shield,
    label: "Hito 02",
    date: "Octubre 2025",
    title: "Diseño de Encuestas y Línea Base",
    description:
      "Estructuración de formularios digitales en KoBo Toolbox y ODK para recopilar información socioeconómica, costos de producción, salud del suelo y conectividad en las parcelas sin depender de internet.",
  },
  {
    icon: CheckCircle2,
    label: "Hito 03",
    date: "Noviembre 2025",
    title: "Diagnóstico Participativo en Comunidades",
    description:
      "Aplicación de encuestas y entrevistas junto a APROQUIMSS en Milla Milla, Imilla Imilla, Tarucamarca y Chiarumani, realizando pruebas de pH y trampas de arroz para capturar microorganismos.",
  },
  {
    icon: Rocket,
    label: "Hito 04",
    date: "Noviembre - Diciembre 2025",
    title: "Talleres de Bioinsumos y Validación en Campo",
    description:
      "Entrega de materiales, armado práctico de biodigestores para la elaboración de biol junto a las familias productoras y verificación positiva de los microorganismos benéficos capturados en sus suelos.",
  },
  {
    icon: Palette,
    label: "Hito 05",
    date: "Enero - Febrero 2026",
    title: "Cartillas Técnicas y Juegos Didácticos",
    description:
      "Elaboración de cartillas prácticas de diagnóstico de suelos, guías de biol, manuales para el cálculo del punto de equilibrio y juegos didácticos para facilitar el aprendizaje financiero.",
  },
  {
    icon: ClipboardList,
    label: "Hito 06",
    date: "Marzo 2026",
    title: "Desarrollo de la App Móvil Yapu Aroma",
    description:
      "Programación de la aplicación móvil con arquitectura offline-first, diseñada para que los productores registren sus costos de siembra a cosecha y controlen sus cultivos directamente en el campo sin señal.",
  },
  {
    icon: Palette,
    label: "Hito 07",
    date: "Abril 2026",
    title: "Identidad Visual y Contenidos Audiovisuales",
    description:
      "Consolidación de la marca Yapu Aroma, rescate de saberes ancestrales y producción de diez videos educativos optimizados para compartirse fácilmente por celular entre las familias productoras.",
  },
  {
    icon: Truck,
    label: "Hito 08",
    date: "Mayo 2026",
    title: "Capacitación en Campo y 26 Descargas",
    description:
      "Socialización, pruebas y entrenamiento práctico en el uso de Yapu Aroma en las comunidades, aplicando mejoras continuas y logrando que 26 productores instalen y registren sus datos en el sistema.",
  },
  {
    icon: Globe,
    label: "Hito 09",
    date: "Junio 2026",
    title: "Sistematización de Guías y Prototipo Web",
    description:
      "Entrega de los informes diagnósticos, la Guía del Modelo Multidisciplinario y el diseño del prototipo web interactivo para conectar productos naturales, transformados y turismo con el mercado.",
  },
  {
    icon: Sprout,
    label: "Hito 10",
    date: "Actualidad",
    title: "Proyección Empresarial y Escalamiento",
    description:
      "Transición de Yapu Aroma hacia un modelo de negocio sostenible que articula el control financiero agrícola, el valor agregado (Raíz Productiva) y la logística directa (Camino al Mercado).",
  },
]