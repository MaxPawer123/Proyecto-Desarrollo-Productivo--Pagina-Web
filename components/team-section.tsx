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
                <div className="relative h-32 w-32 overflow-hidden rounded-xl">
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
                  {member.socials?.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
        {displayAreas.map((area) => (
          <div key={area.id} className="mt-12">
            <h4 className="mb-6 font-serif text-xl font-semibold text-foreground">Integrante de {area.name}</h4>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {area.members.map((member) => (
                <button
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md text-left"
                >
                  <div className="relative h-32 w-32 overflow-hidden rounded-xl bg-[#a2be00]/10">
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
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{member.bio}</p>

                  {/* Social Links Row */}
                  <div className="mt-4 flex gap-2 pt-3 border-t border-border/40">
                    {member.socials?.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
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
        ))}
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
                <div className="relative h-40 w-40 flex-none overflow-hidden rounded-xl">
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
                    {selectedMember.socials?.map((social: any) => (
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
    </section>
  )
}
