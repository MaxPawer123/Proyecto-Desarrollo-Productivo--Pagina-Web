import Link from "next/link"
import { ArrowDown, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-quinoa.jpg"
          alt="Campos de quinua dorada en el altiplano boliviano al atardecer"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/40 to-background"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Sica Sica · Patacamaya · Bolivia</span>
          </div>

          <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
             Cooperacion Agropecuaria a <span className="text-primary">Familias Productoras</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Desarrollo Comunitario Productivo en el corazón de{" "}
            <span className="font-medium text-foreground">Sica Sica</span> y{" "}
            <span className="font-medium text-foreground">Patacamaya</span>. Una iniciativa universitaria que une
            ciencia, tecnología y conocimiento ancestral.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-7 text-base shadow-md">
              <Link href="/proyecto" className="inline-flex items-center gap-2">
                Conoce el Proyecto
                <ArrowDown className="h-4 w-4 -rotate-45" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border/70 bg-background/70 px-7 text-base backdrop-blur"
            >
              <Link href="/productos">Conoce Yapu Aroma</Link>
            </Button>
          </div>

          {/* Stats */}
          <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border/50 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Comunidades</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold text-foreground">2+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Disciplinas</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold text-foreground">5</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Entregables</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold text-foreground">3</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
