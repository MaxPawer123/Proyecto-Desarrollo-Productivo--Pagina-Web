import { milestones } from "@/lib/milestones-data"

export function TimelineSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Vertical timeline */}
        <ol className="relative space-y-10">
          <div
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-border"
            aria-hidden="true"
          />
          {milestones.map((m, i) => (
            <li key={m.title} className="relative pl-16 sm:pl-20">
              <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md ring-4 ring-background">
                <m.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-md sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {m.label}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{m.date}</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{m.description}</p>
              </div>
              {i === milestones.length - 1 && (
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-secondary-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Fase actual del proyecto
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
