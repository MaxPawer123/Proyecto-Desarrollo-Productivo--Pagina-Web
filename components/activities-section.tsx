"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { activities } from "@/lib/activities-data"

export function ActivitiesSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <article
                key={a.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-muted cursor-pointer"
                  onClick={() => setSelectedImage(a.image)}
                >
                  <img
                    src={a.image || "/placeholder.svg"}
                    alt={a.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 hover:opacity-90"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                    <a.icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {a.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                  <h3 className="font-serif text-2xl font-semibold leading-snug text-foreground">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{a.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image viewer"
        >
          <div
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Expanded activity image"
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain animate-in fade-in zoom-in-95 duration-200"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-12 -top-12 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:-right-14 sm:-top-14"
              aria-label="Close image viewer"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
