"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Video, Maximize2, Play, ExternalLink } from "lucide-react"
import { activities, type Activity } from "@/lib/activities-data"

export type MediaItem = {
  type: "image" | "video"
  url: string
  embedUrl?: string
  videoType?: "youtube" | "vimeo" | "direct"
  thumbnailUrl?: string
}

export function parseMediaUrl(url: string, fallbackThumb?: string): MediaItem {
  if (!url) return { type: "image", url: fallbackThumb || "/placeholder.svg" }
  const trimmed = url.trim()

  // YouTube standard watch, short youtu.be, embed, shorts
  const ytMatch = trimmed.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  if (ytMatch && ytMatch[1]) {
    const videoId = ytMatch[1]
    return {
      type: "video",
      url: trimmed,
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
      videoType: "youtube",
      thumbnailUrl: fallbackThumb || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
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
      thumbnailUrl: fallbackThumb || "/placeholder.svg",
    }
  }

  // Direct video file (.mp4, .webm, .ogg)
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(trimmed)) {
    return {
      type: "video",
      url: trimmed,
      embedUrl: trimmed,
      videoType: "direct",
      thumbnailUrl: fallbackThumb || "/placeholder.svg",
    }
  }

  return {
    type: "image",
    url: trimmed,
  }
}

function getActivityMedia(activity: Activity): MediaItem[] {
  const items: MediaItem[] = []
  const primaryThumb = activity.image && activity.image.trim() !== "" ? activity.image.trim() : undefined

  // 1. Si la actividad tiene campo video
  if (activity.video && activity.video.trim() !== "" && activity.video !== "/") {
    items.push(parseMediaUrl(activity.video, primaryThumb))
  }

  // 2. Si tiene lista de imágenes o links
  if (activity.images && activity.images.length > 0) {
    for (const src of activity.images) {
      if (src && src.trim() !== "" && src !== "/") {
        // Evitar duplicar si es el mismo video o la miniatura ya asociada
        if (activity.video && src.trim() === activity.video.trim()) continue
        if (activity.video && primaryThumb && src.trim() === primaryThumb) continue
        items.push(parseMediaUrl(src))
      }
    }
  } else if (activity.image && activity.image.trim() !== "" && activity.image !== "/") {
    // Si no tenía video, agregar la imagen principal
    if (!activity.video) {
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
  const [isPlaying, setIsPlaying] = useState(false)

  const mediaItems = getActivityMedia(activity)
  const hasMultiple = mediaItems.length > 1
  const currentMedia = mediaItems[currentIndex] || mediaItems[0]
  const hasVideo = mediaItems.some((m) => m.type === "video")

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
  }

  const getVideoEmbedSrc = (item: MediaItem) => {
    if (!item.embedUrl) return ""
    const separator = item.embedUrl.includes("?") ? "&" : "?"
    return `${item.embedUrl}${separator}autoplay=1&rel=0&playsinline=1&enablejsapi=1`
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-md">
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-muted group/carousel"
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
            <div key={i} className="relative h-full w-full flex-shrink-0 bg-black">
              {item.type === "video" ? (
                isPlaying && currentIndex === i ? (
                  <div className="absolute inset-0 h-full w-full bg-black">
                    {item.videoType === "direct" ? (
                      <video
                        src={item.embedUrl}
                        controls
                        autoPlay
                        playsInline
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <iframe
                        src={getVideoEmbedSrc(item)}
                        title={`${activity.title} - Video`}
                        className="absolute inset-0 h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    )}

                    {/* Controles superiores durante la reproducción */}
                    <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-7 items-center gap-1.5 rounded-full bg-black/80 px-2.5 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-red-600 hover:text-white"
                          title="Abrir en YouTube en pestaña nueva"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span className="hidden sm:inline">YouTube</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsPlaying(false)
                        }}
                        className="flex h-7 items-center gap-1 rounded-full bg-black/80 px-2.5 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-neutral-800"
                        title="Cerrar video y ver portada"
                      >
                        <X className="h-3.5 w-3.5" />
                        <span>Cerrar</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="relative h-full w-full cursor-pointer overflow-hidden group/thumb"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsPlaying(true)
                    }}
                  >
                    <img
                      src={item.thumbnailUrl || item.url || "/placeholder.svg"}
                      alt={`${activity.alt} - Vista previa del video`}
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg"
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                    />
                    {/* Semi-transparent dark overlay */}
                    <div className="absolute inset-0 bg-black/35 transition-colors group-hover/thumb:bg-black/45" />

                    {/* Botón de reproducción centrado */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsPlaying(true)
                        }}
                        className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl shadow-red-600/50 transition-all duration-300 hover:scale-110 hover:bg-red-500 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-500/50"
                        aria-label="Reproducir video"
                      >
                        <Play className="h-8 w-8 sm:h-9 sm:w-9 fill-white translate-x-0.5" />
                      </button>
                      <span className="rounded-full bg-black/70 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-sm shadow tracking-wide">
                        Reproducir video
                      </span>
                    </div>
                  </div>
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
                    setIsPlaying(false)
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
        {!isPlaying && (
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
        )}

        {/* Tag Overlay & Video Badge */}
        {!isPlaying && (
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
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3 p-6 sm:p-7">
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-2xl font-semibold leading-snug text-foreground">{activity.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{activity.description}</p>
        </div>

        {activity.video && (
          <div className="mt-2 pt-3 border-t border-border/60 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Reproducir en la web</span>
            </button>
            <a
              href={activity.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-red-600 transition-colors"
            >
              <span>Ver en YouTube</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        )}
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
              <div className="w-full aspect-video max-w-4xl max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black relative">
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
                    src={`${currentLightboxMedia.embedUrl}?autoplay=1&rel=0&playsinline=1&enablejsapi=1`}
                    title="Video ampliado"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}

                {/* Enlace directo a YouTube en el visor */}
                {currentLightboxMedia.url && (
                  <a
                    href={currentLightboxMedia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 z-50 flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition hover:bg-red-600"
                  >
                    <span>Abrir en YouTube</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
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
