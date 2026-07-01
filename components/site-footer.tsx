import Link from "next/link"
import { Sprout, Heart, GraduationCap, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sprout className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="font-serif text-xl font-semibold">Cooperación Agropecuaria a Familias Productoras</p>
                <p className="text-xs uppercase tracking-wider text-background/60">UMSA · Bolivia</p>
              </div>
            </Link>
         
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-sm text-background/85">
              <Heart className="h-4 w-4 text-accent" aria-hidden="true" />
              <span className="text-balance">
                Gracias a las familias productoras de Sica Sica y Patacamaya.
              </span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-background/60">Navegación</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="/proyecto" className="text-background/85 transition-colors hover:text-accent">
                    El Proyecto
                  </Link>
                </li>
                <li>
                  <Link href="/historia" className="text-background/85 transition-colors hover:text-accent">
                    Historia
                  </Link>
                </li>
                <li>
                  <Link href="/actividades" className="text-background/85 transition-colors hover:text-accent">
                    Actividades
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="text-background/85 transition-colors hover:text-accent">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/quienes-somos" className="text-background/85 transition-colors hover:text-accent">
                    Quiénes Somos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-background/60">Créditos</h3>
              <ul className="mt-4 space-y-3 text-sm text-background/85">
                <li className="flex items-start gap-2">
                  <GraduationCap className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden="true" />
                  Universidad Mayor de San Andrés (UMSA)
                </li>
                <li className="flex items-start gap-2">
                  <GraduationCap className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden="true" />
                  Docentes tutores
                </li>
                <li className="flex items-start gap-2">
                  <GraduationCap className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden="true" />
                  Equipo desarrollador
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-background/60">Territorio</h3>
              <ul className="mt-4 space-y-3 text-sm text-background/85">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden="true" />
                  Sica Sica, La Paz
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden="true" />
                  Patacamaya, La Paz
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden="true" />
                  Altiplano boliviano
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-8 text-xs text-background/60 sm:flex-row sm:items-center">
          <p>© 2026 Cooperacion Agropecuaria a Familias Productoras · Proyecto de la UMSA. Todos los derechos reservados.</p>
          <p className="text-balance">Hecho con dedicación para el agro.</p>
        </div>
      </div>
    </footer>
  )
}
