import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cooperacion Agropecuaria a Familias Productoras | Proyecto UMSA en Sica Sica y Patacamaya, Bolivia",
  description:
    "Proyecto universitario UMSA aplicado en las comunidades productoras de Sica Sica y Patacamaya, Bolivia.",
  keywords: [
    "Quinua",
    "Hortalizas",
    "Bolivia",
    "Sica Sica",
    "Patacamaya",
    "UMSA",
    "Desarrollo Comunitario",
    "Cooperacion Agropecuaria a Familias Productoras",
    "Agro",
  ],
}

export const viewport = {
  themeColor: "#3a5a3a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased flex min-h-screen flex-col">
        <SiteNavbar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
