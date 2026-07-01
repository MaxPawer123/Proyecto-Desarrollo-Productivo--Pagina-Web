import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { TeamSection } from "@/components/team-section"

export const metadata: Metadata = {
  title: "Quiénes Somos | Yapu Aroma",
  description:
    "Equipo multidisciplinario de estudiantes de la Universidad Mayor de San Andrés (UMSA) integrando carreras como Informática, Agronomía y más.",
}

export default function QuienesSomosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quiénes Somos"
        title="Un equipo multidisciplinario de la UMSA."
        description="Estudiantes de distintas facultades unidos para responder, con todas las miradas posibles, a un desafío real del agro boliviano."
      />
      <TeamSection />
    </>
  )
}
