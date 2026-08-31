import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { projectDeliverables } from "@/lib/proyecto-data"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "El Proyecto | Proyecto Agro UMSA",
  description:
    "Conoce los entregables y modelos innovadores del Proyecto Agro de la UMSA para el desarrollo sostenible de comunidades productoras de quinua en Bolivia.",
}

export default function ProyectoPage() {
  const diagnosticos = projectDeliverables.filter((d) => d.section === "Diagnósticos")
  const modelos = projectDeliverables.filter((d) => d.section === "Modelos")
  const tecnologia = projectDeliverables.filter((d) => d.section === "Tecnología")

  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="El Proyecto"
        title="Nuestros Entregables e Innovaciones"
        description="Descubre cómo fusionamos tecnología, saberes multidisciplinarios y metodologías participativas para el desarrollo real de comunidades productoras de quinua."
      />

      {/* Resumen/Enfoque del Proyecto */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[#003d4c]/10 bg-card shadow-md md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
            {/* Visual Column / Accent */}
            <div className="relative bg-[#003d4c] p-8 md:col-span-1 md:flex md:flex-col md:justify-between lg:p-12">
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-[#a2be00]/20 blur-md" />
              
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#a2be00]">
                  Enfoque
                </span>
                <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-2xl lg:text-3xl">
                  Nuestro Enfoque
                </h2>
              </div>
              
              <div className="relative z-10 mt-8 hidden md:block">
                <p className="text-xs leading-relaxed text-white/70">
                  Desarrollo rural integral a través de la co-creación y la tecnología adaptada al altiplano.
                </p>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="p-8 md:col-span-2 md:py-12 lg:p-12">
              <p className="text-base font-medium leading-relaxed text-[#003d4c] sm:text-lg">
                El Proyecto Agro de la UMSA representa un enfoque integral e innovador al desarrollo rural. Combinamos
                investigación rigurosa, tecnología adaptada, capacitación participativa y modelos replicables para
                responder a los desafíos reales de las familias productoras de quinua en el altiplano boliviano.
              </p>
              <div className="mt-6 border-t border-border/60 pt-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Nuestro trabajo se sustenta en cinco pilares clave: una mirada territorial profunda, análisis socioeconómico
                  integral, colaboración multidisciplinaria auténtica, transferencia de tecnología culturalmente apropiada, y
                  herramientas digitales diseñadas para la realidad del productor rural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnósticos */}
      <section className="bg-blue-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#003d4c]">
              Fase I
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Diagnósticos
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Comprensión profunda del territorio, sus capacidades, limitaciones y dinámicas socioeconómicas.
            </p>
          </div>

          <div className="space-y-12">
            {diagnosticos.map((deliverable, idx) => (
              <div
                key={deliverable.id}
                className={`grid gap-8 items-center lg:grid-cols-2 ${idx % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={idx % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                    {deliverable.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{deliverable.description}</p>

                  <ul className="mt-6 space-y-3">
                    {deliverable.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#a2be00]" aria-hidden="true" />
                        <span className="text-sm leading-relaxed text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={deliverable.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-2xl border border-[#003d4c]/20 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer block"
                >
                  <Image
                    src={deliverable.image}
                    alt={deliverable.imageAlt}
                    width={500}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos */}
      <section className="bg-green-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#003d4c]">
              Fase II
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Modelos Innovadores
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Arquitecturas de trabajo colaborativo y metodologías replicables para el desarrollo sostenible.
            </p>
          </div>

          <div className="space-y-12">
            {modelos.map((deliverable, idx) => (
              <div
                key={deliverable.id}
                className={`grid gap-8 items-center lg:grid-cols-2 ${idx % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={idx % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                    {deliverable.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{deliverable.description}</p>

                  <ul className="mt-6 space-y-3">
                    {deliverable.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#a2be00]" aria-hidden="true" />
                        <span className="text-sm leading-relaxed text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={deliverable.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-2xl border border-[#003d4c]/20 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer block"
                >
                  <Image
                    src={deliverable.image}
                    alt={deliverable.imageAlt}
                    width={500}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section className="bg-amber-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#003d4c]">
              Fase III
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Tecnología Digital
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Soluciones digitales diseñadas específicamente para el contexto rural del altiplano boliviano.
            </p>
          </div>

          <div className="space-y-12">
            {tecnologia.map((deliverable) => (
              <div key={deliverable.id} className="grid gap-8 items-center lg:grid-cols-2">
                <div>
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                    {deliverable.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{deliverable.description}</p>

                  <ul className="mt-6 space-y-3">
                    {deliverable.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#a2be00]" aria-hidden="true" />
                        <span className="text-sm leading-relaxed text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={deliverable.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-2xl border border-[#003d4c]/20 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer block"
                >
                  <Image
                    src={deliverable.image}
                    alt={deliverable.imageAlt}
                    width={500}
                    height={400}
                    className="h-180 w-150 object-cover"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="bg-background py-12 sm:py-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-muted-foreground">Continúa explorando el proyecto</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/historia"
                className="inline-flex items-center gap-2 rounded-lg bg-[#003d4c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#003d4c]/90"
              >
                Siguiente: Nuestra Historia
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/actividades"
                className="inline-flex items-center gap-2 rounded-lg border border-[#003d4c] px-4 py-2 text-sm font-semibold text-[#003d4c] transition hover:bg-[#003d4c]/5"
              >
                Ver Actividades
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 rounded-lg border border-[#a2be00] px-4 py-2 text-sm font-semibold text-[#a2be00] transition hover:bg-[#a2be00]/5"
              >
                Explora Productos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
