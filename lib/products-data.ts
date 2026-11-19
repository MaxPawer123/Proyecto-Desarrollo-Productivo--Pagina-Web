import {
  Leaf,
  Droplet,
  Bug,
  Zap,
  Package,
  Utensils,
  Layers,
  Wind,
  Lightbulb,
  TrendingUp,
  Sprout,
  Wheat,
} from "lucide-react"

export type Product = {
  id: string
  name: string
  description: string
  category: string
  icon: any
  color: string
  url: string
}

export const products: Product[] = [
  
    {
    id: "quinoa-seeds-1",
    name: "Juegos didácticos informe",
    description: "Juegos Didacticos para fortalecer la producción sostenible, el uso de tecnologías agrícolas y la toma de decisiones en el campo",
    category: "Juegos Didácticos ",
    icon: Wheat,
    color: "bg-amber-50 text-amber-600",
    url: "https://drive.google.com/file/d/1fMA5NoOggjRuQAe_L8eYzghsC2QCnzCH/view?usp=drive_link",
  },
  {
    id: "quinoa-seeds-2",
    name: "Desafio Yapu Aroma (ruleta)",
    description: "Una ruleta muy dinamica de 6 colores",
    category: "Juegos Didácticos ",
    icon: Leaf,
    color: "bg-red-50 text-red-600",
    url: "https://drive.google.com/file/d/1h92Idw9HHx7eRUn6bUfpr3rLpjYfSmz0/view?usp=drive_link",
  },

  {
    id: "quinoa-seeds-3",
    name: "La Ruta del Productor explicación",
    description: "La Ruta del Productor con un juego didactico",
    category: "Juegos Didácticos ",
    icon: Leaf,
    color: "bg-slate-100 text-slate-700",
    url: "https://docs.google.com/presentation/d/1vQWjxFQEuM6go8ltexmd_7ZKLCaJhzR5J064iBTMnvU/edit?usp=drive_link",
  },
   {
    id: "quinoa-seeds-4",
    name: "La Ruta del Productor explicación",
    description: "La Ruta del Productor",
    category: "Juegos Didácticos ",
    icon: Leaf,
    color: "bg-slate-100 text-slate-700",
    url: "https://drive.google.com/file/d/1mHMzqoKFzcxSbNwhMqzy_OTeQLERd-Jz/view?usp=drive_link",
  },
     {
    id: "quinoa-seeds-5",
    name: "Yapu saberes",
    description: "¡Pon a prueba tu mente productora! Coloca el costo que estimas y descubre el costo real",
    category: "Juegos Didácticos ",
    icon: Leaf,
    color: "bg-slate-100 text-slate-700",
    url: "https://drive.google.com/file/d/1mHMzqoKFzcxSbNwhMqzy_OTeQLERd-Jz/view?usp=drive_link",
  },
  {
    id: "biofertilizer-1",
    name: "Lanzamiento",
    description: "Inoculante bioactivado para mejorar fertilidad de suelos del altiplano",
    category: "Contenido de difusión",
    icon: Droplet,
    color: "bg-green-50 text-green-600",
    url: "https://www.youtube.com/shorts/DY_LC6qw3No",
  },
  {
    id: "bioinsecticide-2",
    name: "Ya no quieren quedarse",
    description: "Control biológico de plagas sin químicos sintéticos",
    category: "Contenido de difusión",
    icon: Bug,
    color: "bg-lime-50 text-lime-600",
    url: "https://youtube.com/shorts/-quxKV0guiw?si=eerjHv5UzGoexoHU",
  },
  {
    id: "bioinsecticide-3",
    name: "Cambio Climático",
    description: "Enmienda de suelos con materia orgánica procesada localmente",
    category: "Contenido de difusión",
    icon: Layers,
    color: "bg-orange-50 text-orange-600",
    url: "https://youtube.com/shorts/RXXLRn9iRVI?si=mfNaZ_EqdH4IxwvK",
  },
  {
    id: "bioinsecticide-4",
    name: "La quinua resiste",
    description: "Cobertura vegetal para retención de humedad en suelos áridos",
    category: "Contenido de difusión",
    icon: Wind,
    color: "bg-yellow-50 text-yellow-600",
    url: "https://youtube.com/shorts/jG9nk1Lt3bk?si=v6VsRAX42B57fCCt",
  },
  {
    id: "bioinsecticide-5",
    name: "La ciencia de la producción",
    description: "Herramientas manuales adaptadas para cultivo de quinua",
    category: "Contenido de difusión",
    icon: Zap,
    color: "bg-blue-50 text-blue-600",
    url: "https://drive.google.com/file/d/13BqWcAlZMfRMdDhiFFOZ_tikKFXyfb8t/view?usp=drive_link",
  },
   {
    id: "bioinsecticide-6",
    name: "Conocimiento que transforma",
    description: "Herramientas manuales adaptadas para cultivo de quinua",
    category: "Contenido de difusión",
    icon: Zap,
    color: "bg-blue-50 text-blue-600",
    url: "https://youtube.com/shorts/FkUIOgJGeng?si=H2lge5XhnooO5BLW",
  },
   {
    id: "bioinsecticide-7",
    name: "La universidad en el campo",
    description: "Herramientas manuales adaptadas para cultivo de quinua",
    category: "Contenido de difusión",
    icon: Zap,
    color: "bg-blue-50 text-blue-600",
    url: "https://youtube.com/shorts/5vEpBc2Hga4?si=NtkrHhgNKviMOgBv",
  },
  
   {
    id: "bioinsecticide-8",
    name: "Todo empieza desde el manejo del suelo",
    description: "Herramientas manuales adaptadas para cultivo de quinua",
    category: "Contenido de difusión",
    icon: Zap,
    color: "bg-blue-50 text-blue-600",
    url: "https://youtube.com/shorts/3R723Ol8AUI?si=ASYMwb5rKOLK4RdT",
  },
  
  {
    id: "equipment-1",
    name: "Recetario con Valor Agregado",
    description: "Recetario con Valor Agregado y Registro de Costos",
    category: "Recetario",
    icon: Droplet,
    color: "bg-cyan-50 text-cyan-600",
    url: "https://drive.google.com/file/d/1n9iyCjhMOvH2dS1lzSYR7eGNPkRL8xZk/view?usp=drive_link",
  },
  
  {
    id: "guide-1",
    name: "Cartilla de Elaboración de Biol",
    description: "Cartilla para una elaboracion adecuada con el Biol ",
    category: "Cartillas y Manuales",
    icon: Lightbulb,
    color: "bg-indigo-50 text-indigo-600",
    url: "https://drive.google.com/file/d/1GxqdIvRXGRi3-DwnK_bhI-_Zzm-t9KOO/view?usp=drive_link",
  },
  {
    id: "guide-2",
    name: "Cartilla de herramientas para diagnóstico participativo de suelos",
    description: "Cartilla de herramientas para diagnóstico participativo de suelos en los municipios",
    category: "Cartillas y Manuales",
    icon: Lightbulb,
    color: "bg-purple-50 text-purple-600",
    url: "https://drive.google.com/file/d/1BGthVwAJ6zBAbTNrR8xGyEtKCa2FeeUO/view?usp=drive_link",
  },
  {
    id: "guide-3",
    name: "Manual - Estudio de Mercado Propuesta",
    description: "Manual Didactico para el Estudio de Mercado para Productores de Quinua y Hortalizas",
    category: "Cartillas y Manuales",
    icon: Lightbulb,
    color: "bg-pink-50 text-pink-600",
    url: "https://drive.google.com/file/d/1EfIfoU2U2I1vsZIoHUh6VdLL0W-CcUVZ/view?usp=drive_link",
  },
  {
    id: "yapu-aroma-1",
    name: "Yapu Aroma - App Móvil",
    description:
      "Aplicación pensada para el productor: planifica el cultivo, registra costos y acompaña la jornada en el campo, incluso sin conexión a internet.",
    category: "Tecnología",
    icon: Zap,
    color: "bg-primary text-primary-foreground",
    url: "https://drive.google.com/file/d/1zcrrh7huFAuABl27ygu86UclwNYma59X/view?usp=drive_link",
  },
    {
    id: "yapu-aroma-2",
    name: "Documentacion_YapuAroma",
    description:
      "Documentacion sobre la como se realizo el Yapu Aroma.",
    category: "Tecnología",
    icon: Zap,
    color: "bg-primary text-primary-foreground",
    url: "https://drive.google.com/file/d/1Ny48RQNqLnaG3cQez8WX1EtJo0iWPr0W/view?usp=drive_link",
  },
    {
    id: "yapu-aroma-3",
    name: "Guía paso a paso de Yapu Aroma",
    description:
      "Guia de paso para utilizar la aplicación Yapu Aroma.",
    category: "Tecnología",
    icon: Zap,
    color: "bg-primary text-primary-foreground",
    url: "https://drive.google.com/file/d/1z6s8UxyE0t9M1SK4qrSS4RrRvDNn4CHj/view?usp=drive_link",
  },

    {    
    id: "yapu-aroma-4 ",
    name: "Video tutorial",
    description:
      "Video Tutorial para la utilizacion de la aplicacion Yapu Aroma.",
    category: "Tecnología",
    icon: Zap,
    color: "bg-primary text-primary-foreground",
    url: "https://youtube.com/shorts/Vc0Q782yOVw?si=n64CGjC2gZKMDMed",
  },

]
