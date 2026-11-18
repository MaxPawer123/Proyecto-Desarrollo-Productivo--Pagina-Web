"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { products } from "@/lib/products-data"
import { cn } from "@/lib/utils"

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(products.map((p) => p.category)))
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

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
          {filteredProducts.map((product) => (
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
      </div>
    </section>
  )
}
