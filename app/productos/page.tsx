import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ProductsSection } from "@/components/products-section"

export const metadata: Metadata = {
  title: "Productos | Cooperacion Agropecuaria a Familias Productoras",
  description:
    "App móvil Yapu Aroma con arquitectura offline-first, calculadora de costos y reportes en PDF, más los documentos del Diagnóstico Integral y el Modelo Multidisciplinario.",
}

export default function ProductosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestros Productos"
        title="Entregables que quedan en el territorio."
        description="Tres productos core que fusionan ciencia, tecnología y trabajo comunitario al servicio de las familias productoras."
      />
      <ProductsSection />
    </>
  )
}
