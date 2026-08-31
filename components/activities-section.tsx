"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { activities, type Activity } from "@/lib/activities-data"

function ActivityCard({
  activity,
  onImageClick,
}: {
  activity: Activity
  onImageClick: (images: string[], index: number) => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Get all images (filter out empty/slash values)
  const images = activity.images && activity.images.length > 0
    ? activity.images.filter(img => img && img !== "/")
    : [activity.image].filter((img): img is string => !!img && img !== "/")

  const displayImages = images.length > 0 ? images : ["/placeholder.svg"]
  const hasMultiple = displayImages.length > 1

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % displayImages.length)
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-md">
      <div
        className="relative aspect-[16/10] overflow-hidden bg-muted cursor-pointer group/carousel"
        onClick={() => onImageClick(displayImages, currentIndex)}
      >
        {/* Images Wrapper with Slide Animation */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {displayImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${activity.alt} - Imagen ${i + 1}`}
              className="h-full w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Carousel controls */}
        {hasMultiple && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition duration-200 hover:bg-black/60 focus:opacity-100"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition duration-200 hover:bg-black/60 focus:opacity-100"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {displayImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(i)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-4 bg-white" : "w-1.5 bg-white/50"
                  }`}
                  aria-label={`Ir a la imagen ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Tag Overlay */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur z-10">
          <activity.icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          {activity.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <h3 className="font-serif text-2xl font-semibold leading-snug text-foreground">{activity.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{activity.description}</p>
      </div>
    </article>
  )
}

export function ActivitiesSection() {
  const [lightboxData, setLightboxData] = useState<{
    images: string[]
    index: number
  } | null>(null)

  const handleOpenLightbox = (images: string[], index: number) => {
    setLightboxData({ images, index })
  }

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!lightboxData) return
    setLightboxData((prev) => {
      if (!prev) return null
      return {
        ...prev,
        index: (prev.index - 1 + prev.images.length) % prev.images.length,
      }
    })
  }

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!lightboxData) return
    setLightboxData((prev) => {
      if (!prev) return null
      return {
        ...prev,
        index: (prev.index + 1) % prev.images.length,
      }
    })
  }

  return (
    <>
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <ActivityCard
                key={a.id}
                activity={a}
                onImageClick={handleOpenLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setLightboxData(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image viewer"
        >
          <div
            className="relative flex h-full w-full items-center justify-center max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Lightbox Image */}
            <img
              src={lightboxData.images[lightboxData.index]}
              alt={`Imagen ampliada ${lightboxData.index + 1}`}
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain animate-in fade-in zoom-in-95 duration-200"
            />

            {/* Lightbox controls */}
            {lightboxData.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevLightbox}
                  className="absolute -left-4 sm:left-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <button
                  onClick={handleNextLightbox}
                  className="absolute -right-4 sm:right-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>

                {/* Lightbox Index Counter */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/45 px-3 py-1 rounded-full backdrop-blur-sm">
                  {lightboxData.index + 1} / {lightboxData.images.length}
                </div>
              </>
            )}

            {/* Close Button */}
            <button
              onClick={() => setLightboxData(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:-top-14"
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
