"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Video, Maximize2 } from "lucide-react"
import { activities, type Activity } from "@/lib/activities-data"

export type MediaItem = {
  type: "image" | "video"
  url: string
  embedUrl?: string
  videoType?: "youtube" | "vimeo" | "direct"
}

export function parseMediaUrl(url: string): MediaItem {
  if (!url) return { type: "image", url: "/placeholder.svg" }
  const trimmed = url.trim()

  // YouTube standard watch, short youtu.be, embed, shorts
  const ytMatch = trimmed.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  if (ytMatch && ytMatch[1]) {
    return {
      type: "video",
      url: trimmed,
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}`,
      videoType: "youtube",
    }
  }

  // Vimeo
  const vimeoMatch = trimmed.match(/vimeo\.com\/(?:video\/)?([0-9]+)/)
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: "video",
      url: trimmed,
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
      videoType: "vimeo",
    }
  }

  // Direct video file (.mp4, .webm, .ogg)
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(trimmed)) {
    return {
      type: "video",
      url: trimmed,
      embedUrl: trimmed,
      videoType: "direct",
    }
  }

  return {
    type: "image",
    url: trimmed,
  }
}

function getActivityMedia(activity: Activity): MediaItem[] {
  const items: MediaItem[] = []

  // 1. Si la actividad tiene campo video
  if (activity.video && activity.video.trim() !== "" && activity.video !== "/") {
    items.push(parseMediaUrl(activity.video))
  }

  // 2. Si tiene lista de imágenes o links
  if (activity.images && activity.images.length > 0) {
    for (const src of activity.images) {
      if (src && src.trim() !== "" && src !== "/") {
        // Evitar duplicar si es el mismo video
        if (activity.video && src.trim() === activity.video.trim()) continue
        items.push(parseMediaUrl(src))
      }
    }
  } else if (activity.image && activity.image.trim() !== "" && activity.image !== "/") {
    if (!activity.video || activity.image.trim() !== activity.video.trim()) {
      items.push(parseMediaUrl(activity.image))
    }
  }

  if (items.length === 0) {
    items.push({ type: "image", url: "/placeholder.svg" })
  }

  return items
}

function ActivityCard({
  activity,
  onMediaClick,
}: {
  activity: Activity
  onMediaClick: (media: MediaItem[], index: number) => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const mediaItems = getActivityMedia(activity)
  const hasMultiple = mediaItems.length > 1
  const currentMedia = mediaItems[currentIndex] || mediaItems[0]
  const hasVideo = mediaItems.some((m) => m.type === "video")

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-md">
      <div
        className="relative aspect-[16/10] overflow-hidden bg-muted group/carousel"
        onClick={() => {
          if (currentMedia.type === "image") {
            onMediaClick(mediaItems, currentIndex)
          }
        }}
      >
        {/* Media Wrapper with Slide Animation */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {mediaItems.map((item, i) => (
            <div key={i} className="relative h-full w-full flex-shrink-0 bg-black/90">
              {item.type === "video" ? (
                item.videoType === "direct" ? (
                  <video
                    src={item.embedUrl}
                    controls
                    playsInline
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <iframe
                    src={item.embedUrl}
                    title={`${activity.title} - Video`}
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )
              ) : (
                <img
                  src={item.url}
                  alt={`${activity.alt} - Imagen ${i + 1}`}
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                  className="h-full w-full object-cover cursor-pointer"
                />
              )}
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition duration-200 hover:bg-black/75 focus:opacity-100"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition duration-200 hover:bg-black/75 focus:opacity-100"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
              {mediaItems.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(i)
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? "w-4 h-1.5 bg-white shadow"
                      : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Ir al elemento ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Expand / Lightbox button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onMediaClick(mediaItems, currentIndex)
          }}
          className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition duration-200 hover:bg-black/75"
          title="Ampliar vista"
          aria-label="Ampliar vista"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </button>

        {/* Tag Overlay & Video Badge */}
        <div className="absolute left-4 top-4 flex items-center gap-2 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur shadow-sm">
            <activity.icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            {activity.tag}
          </span>
          {hasVideo && (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-600/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur shadow-sm">
              <Video className="h-3 w-3" />
              Video
            </span>
          )}
        </div>
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
    media: MediaItem[]
    index: number
  } | null>(null)

  const handleOpenLightbox = (media: MediaItem[], index: number) => {
    setLightboxData({ media, index })
  }

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!lightboxData) return
    setLightboxData((prev) => {
      if (!prev) return null
      return {
        ...prev,
        index: (prev.index - 1 + prev.media.length) % prev.media.length,
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
        index: (prev.index + 1) % prev.media.length,
      }
    })
  }

  const currentLightboxMedia = lightboxData ? lightboxData.media[lightboxData.index] : null

  return (
    <>
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <ActivityCard
                key={a.id}
                activity={a}
                onMediaClick={handleOpenLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxData && currentLightboxMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setLightboxData(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded media viewer"
        >
          <div
            className="relative flex h-full w-full items-center justify-center max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Lightbox Content */}
            {currentLightboxMedia.type === "video" ? (
              <div className="w-full aspect-video max-w-4xl max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
                {currentLightboxMedia.videoType === "direct" ? (
                  <video
                    src={currentLightboxMedia.embedUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <iframe
                    src={currentLightboxMedia.embedUrl}
                    title="Video ampliado"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            ) : (
              <img
                src={currentLightboxMedia.url}
                alt={`Imagen ampliada ${lightboxData.index + 1}`}
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg"
                }}
                className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain animate-in fade-in zoom-in-95 duration-200"
              />
            )}

            {/* Lightbox controls */}
            {lightboxData.media.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevLightbox}
                  className="absolute -left-4 sm:left-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                  aria-label="Elemento anterior"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <button
                  type="button"
                  onClick={handleNextLightbox}
                  className="absolute -right-4 sm:right-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                  aria-label="Siguiente elemento"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>

                {/* Lightbox Index Counter */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/45 px-3 py-1 rounded-full backdrop-blur-sm">
                  {lightboxData.index + 1} / {lightboxData.media.length}
                </div>
              </>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxData(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:-top-14"
              aria-label="Cerrar visor"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
