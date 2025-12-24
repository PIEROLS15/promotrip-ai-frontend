import type React from "react"
import type { Metadata } from "next"
import { Nunito } from 'next/font/google'
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Loader } from "@/components/loader"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "PromoTrip AI - Viajes Estudiantiles en Cañete",
  description: "Plataforma inteligente de recomendación y reserva de viajes turísticos estudiantiles",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${nunito.variable} ${GeistMono.variable}`}>
        <ThemeProvider>
          <Suspense fallback={<Loader />}>
            {children}
          </Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
