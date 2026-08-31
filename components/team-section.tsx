"use client"

import { useState } from "react"
import Image from "next/image"
import { X, CheckCircle2, Facebook, Linkedin, Music2, Phone } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { coordinators, teamAreas } from "@/lib/team-data"
import { cn } from "@/lib/utils"

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<any>(null)
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const displayAreas = selectedArea ? teamAreas.filter((a) => a.id === selectedArea) : teamAreas

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-4 w-4" />
      case "tiktok":
        return <Music2 className="h-4 w-4" />
      case "linkedin":
        return <Linkedin className="h-4 w-4" />
      case "whatsapp":
        return <Phone className="h-4 w-4" />
      default:
        return null
    }
  }

  const getSocialColor = (platform: string) => {
    switch (platform) {
      case "facebook":
        return "hover:bg-blue-50 hover:text-blue-600"
      case "tiktok":
        return "hover:bg-black/5 hover:text-black"
      case "linkedin":
        return "hover:bg-blue-100 hover:text-blue-700"
      case "whatsapp":
        return "hover:bg-green-50 hover:text-green-600"
      default:
        return ""
    }
  }

  return (
    <section className="bg-background py-10 sm:py-0,5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Carreras que integran el equipo - FIRST */}
        <div className="mb-10">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Carreras que integran el equipo
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            La fuerza del modelo está en mirar el mismo problema desde ángulos distintos.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
                className={cn(
                  "group rounded-2xl p-6 ring-1 transition hover:-translate-y-0.5 hover:shadow-md text-left",
                  selectedArea === area.id
                    ? "bg-[#003d4c] text-white ring-[#003d4c] shadow-md"
                    : "bg-card ring-border/60",
                )}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "flex h-11 w-11 flex-none items-center justify-center rounded-xl transition-colors",
                      selectedArea === area.id
                        ? "bg-white/20 text-white"
                        : "bg-[#a2be00]/10 text-[#a2be00] group-hover:bg-[#a2be00] group-hover:text-white",
                    )}
                  >
                    <area.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className={cn("text-base font-semibold", selectedArea === area.id ? "text-white" : "text-foreground")}>
                      {area.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-1.5 text-sm leading-relaxed",
                        selectedArea === area.id ? "text-white/90" : "text-muted-foreground",
                      )}
                    >
                      {area.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Coordinadores - SECOND */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Coordinadores
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Líderes académicos que guían la visión multidisciplinaria del proyecto.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {coordinators.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md text-left"
              >
                <div
                  className="relative h-32 w-32 overflow-hidden rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation()
                    setLightboxImage(member.image)
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="mt-4 font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm font-medium text-[#003d4c]">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.department}</p>

                {/* Social Links Row */}
                <div className="mt-4 flex gap-2 pt-3 border-t border-border/40">
                  {member.socials?.filter(social => social.url).map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={cn(
                        "inline-flex items-center justify-center h-8 w-8 rounded-lg text-[#003d4c] transition-colors",
                        getSocialColor(social.platform),
                      )}
                      aria-label={social.platform}
                    >
                      {getSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Team Members Grid - THIRD */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {selectedArea 
              ? `Integrantes de ${teamAreas.find((a) => a.id === selectedArea)?.name}` 
              : "Integrantes del Proyecto"}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {selectedArea 
              ? `Estudiantes de la carrera de ${teamAreas.find((a) => a.id === selectedArea)?.name} que forman parte de la iniciativa.`
              : "Estudiantes y profesionales multidisciplinarios de la UMSA que hacen posible el proyecto."}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayAreas.flatMap((area) => area.members).map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md text-left"
              >
                <div
                  className="relative h-32 w-32 overflow-hidden rounded-xl bg-[#a2be00]/10 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation()
                    setLightboxImage(member.image)
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="mt-4 font-semibold text-foreground">{member.name}</h4>
                {member.role && <p className="text-sm font-medium text-[#003d4c]">{member.role}</p>}
                <p className="text-xs text-muted-foreground">{member.department}</p>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{member.bio}</p>

                {/* Social Links Row */}
                <div className="mt-4 flex gap-2 pt-3 border-t border-border/40">
                  {member.socials?.filter(social => social.url).map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={cn(
                        "inline-flex items-center justify-center h-8 w-8 rounded-lg text-[#003d4c] transition-colors",
                        getSocialColor(social.platform),
                      )}
                      aria-label={social.platform}
                    >
                      {getSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedMember?.name}</DialogTitle>
          </DialogHeader>

          {selectedMember && (
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <div
                  className="relative h-40 w-40 flex-none overflow-hidden rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setLightboxImage(selectedMember.image)}
                >
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#003d4c]">{selectedMember.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{selectedMember.department}</p>
                  <p className="mt-4 leading-relaxed text-foreground">{selectedMember.bio}</p>

                  {/* Social Links in Modal */}
                  <div className="mt-4 flex gap-2">
                    {selectedMember.socials?.filter((social: any) => social.url).map((social: any) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center justify-center h-10 w-10 rounded-lg text-[#003d4c] transition-colors",
                          getSocialColor(social.platform),
                        )}
                        aria-label={social.platform}
                      >
                        {getSocialIcon(social.platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-foreground">Trayectoria y Logros</h4>
                <ul className="space-y-2">
                  {selectedMember.achievements.map((achievement: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#a2be00]" aria-hidden="true" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      {/* Photo Lightbox Modal */}
      <Dialog open={!!lightboxImage} onOpenChange={(open) => !open && setLightboxImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none z-[100] [&>button]:text-white [&>button]:bg-black/40 [&>button]:hover:bg-black/60 [&>button]:rounded-full [&>button]:right-4 [&>button]:top-4 [&>button]:h-10 [&>button]:w-10 [&>button>svg]:h-5 [&>button>svg]:w-5 [&>button]:border [&>button]:border-white/10 [&>button]:backdrop-blur-sm">
          <div className="relative flex items-center justify-center max-w-full max-h-[85vh] outline-none p-4">
            {lightboxImage && (
              <img
                src={lightboxImage}
                alt="Expanded member photo"
                className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain animate-in fade-in zoom-in-95 duration-200"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
