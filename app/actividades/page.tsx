import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ActivitiesSection } from "@/components/activities-section"

export const metadata: Metadata = {
  title: "Actividades | Proyecto Agro UMSA",
  description:
    "Galería interactiva de 21 actividades en campo: viajes a comunidades, talleres de capacitación bajo el principio de aprender haciendo, investigación participativa y socialización comunitaria.",
}

export default function ActividadesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Actividades"
        title="Aprender haciendo, junto a las comunidades."
        description="Cada actividad refuerza el vínculo entre la academia y los productores de quinua del altiplano boliviano."
      />
      <ActivitiesSection />
    </>
  )
}
