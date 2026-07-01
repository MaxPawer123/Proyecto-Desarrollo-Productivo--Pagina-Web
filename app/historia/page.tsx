import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { TimelineSection } from "@/components/timeline-section"

export const metadata: Metadata = {
  title: "Nuestra Historia | Cooperacion Agropecuaria a Familias Productoras",
  description:
    "Línea de tiempo del proyecto: desde la primera reunión multidisciplinaria de la UMSA hasta la ejecución en las comunidades de Sica Sica y Patacamaya.",
}

export default function HistoriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestra Historia"
        title="El camino que recorrimos juntos."
        description="Una línea de tiempo de los hitos que dieron forma al Modelo Multidisciplinario de Desarrollo Comunitario Productivo."
      />
      <TimelineSection />
    </>
  )
}
