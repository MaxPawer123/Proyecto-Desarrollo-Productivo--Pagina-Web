import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, BookOpen, Compass, Smartphone, Users, Mountain } from "lucide-react"

export function BentoGrid() {
  return (
    <section className="border-t border-border/50 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Intro Section with Text and Image Spaces */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Text Block */}
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Explora el Sitio
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
              Descubre nuestro ecosistema de innovación.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Somos un equipo multidisciplinario de la UMSA comprometido con mejorar las condiciones de vida de los productores de quinua del altiplano boliviano. A través de investigación aplicada, tecnología accesible y trabajo comunitario, hemos construido un modelo replicable que fusiona saberes ancestrales con innovación.
            </p>
          </div>

          {/* Image Placeholder Area */}
          <div className="flex flex-col gap-4">
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-muted ring-1 ring-border/60">
              <div className="flex h-full items-center justify-center text-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Imagen principal del ecosistema</p>
                  <p className="mt-1 text-xs text-muted-foreground/75">Reemplazar con imagen personalizada</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-muted ring-1 ring-border/60">
                <div className="flex h-full items-center justify-center text-center">
                  <p className="text-xs text-muted-foreground">Imagen 1</p>
                </div>
              </div>
              <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-muted ring-1 ring-border/60">
                <div className="flex h-full items-center justify-center text-center">
                  <p className="text-xs text-muted-foreground">Imagen 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Symmetric 2x2 Navigation Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Nuestros Productos */}
          <Link
            href="/productos"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-8 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent-foreground">
                <Smartphone className="h-6 w-6" aria-hidden="true" />
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="mt-12">
              <h3 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground">
                Nuestros Productos
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Conoce la app Yapu Aroma y los documentos académicos que sistematizan nuestros diagnosticos y modelos.
              </p>
            </div>
            <div className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <span>Explorar</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </Link>

          {/* Nuestra Historia */}
          <Link
            href="/historia"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-8 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Compass className="h-6 w-6" aria-hidden="true" />
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="mt-12">
              <h3 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground">
                Nuestra Historia
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Recorre la línea de tiempo de nuestros 10 hitos clave, desde el inicio hasta la actualidad.
              </p>
            </div>
            <div className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <span>Ver línea de tiempo</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </Link>

          {/* El Equipo */}
          <Link
            href="/quienes-somos"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-8 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" aria-hidden="true" />
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="mt-12">
              <h3 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground">
                El Equipo
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Conoce los coordinadores, las 6 disciplinas y el equipo multidisciplinario UMSA.
              </p>
            </div>
            <div className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <span>Ver equipo</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </Link>

          {/* Actividades */}
          <Link
            href="/actividades"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-8 ring-1 ring-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Mountain className="h-6 w-6" aria-hidden="true" />
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="mt-12">
              <h3 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground">
                Actividades
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Descubre nuestros viajes de campo, talleres comunitarios e iniciativas de investigación.
              </p>
            </div>
            <div className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <span>Explorar</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
