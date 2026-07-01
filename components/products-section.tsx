"use client"

import { useState } from "react"
import { ArrowUpRight, Smartphone } from "lucide-react"
import { products } from "@/lib/products-data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(products.map((p) => p.category)))
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  const yapuAromaProduct = products.find((p) => p.id === "yapu-aroma")
  const otherProducts = filteredProducts.filter((p) => p.id !== "yapu-aroma")

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Filter buttons */}
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              selectedCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-muted/80",
            )}
          >
            Todos ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80",
              )}
            >
              {cat} ({products.filter((p) => p.category === cat).length})
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherProducts.map((product) => (
            <a
              key={product.id}
              href={product.url}
              target={product.url !== "#" ? "_blank" : undefined}
              rel={product.url !== "#" ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card p-5 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:ring-primary/40"
            >
              <div className={cn("flex h-12 w-12 items-center justify-center rounded-lg", product.color)}>
                <product.icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="mt-4 font-semibold leading-snug text-foreground line-clamp-2">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{product.description}</p>

              <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Ver más
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </div>

              <span className="absolute bottom-3 right-3 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase text-primary">
                {product.category}
              </span>
            </a>
          ))}
        </div>

        {/* Featured Yapu Aroma */}
        {yapuAromaProduct && (
          <div className="mt-16 overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-lg ring-1 ring-primary">
            <div
              className="pointer-events-none absolute inset-0 -z-0 opacity-40"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 90% 10%, oklch(0.74 0.14 75 / 0.7), transparent 55%), radial-gradient(circle at 10% 90%, oklch(0.74 0.14 75 / 0.35), transparent 50%)",
              }}
            />
            <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                  Producto Destacado · Tecnología
                </span>
                <div className="mt-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-md">
                    <Smartphone className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                    {yapuAromaProduct.name}
                  </h2>
                </div>
                <p className="mt-4 text-base font-medium text-primary-foreground/85 sm:text-lg">
                  El aporte tecnológico del proyecto
                </p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                  {yapuAromaProduct.description}
                </p>
              </div>

              <div className="relative lg:col-span-5">
                <div className="overflow-hidden rounded-3xl bg-primary-foreground/5 ring-1 ring-primary-foreground/15">
                  <img
                    src="/yapu-aroma-app.jpg"
                    alt="Mockup de la aplicación Yapu Aroma con interfaz agrícola"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                  Último Producto
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
