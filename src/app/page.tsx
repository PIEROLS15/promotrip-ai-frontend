"use client"

import { useState } from "react"
import { PackageCard } from "@/components/package-card"
import { Chatbot } from "@/components/chatbot"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { mockPackages } from "@/lib/mock-data"
import { Search } from 'lucide-react'
import Image from "next/image"
import Footer from "@/components/footer"
import FeaturesSection from "@/components/featuresSection"
import PartnersSection from "@/components/partnersSection"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showSearchResults, setShowSearchResults] = useState(false)

  const categories = [
    { id: "aventura", label: "Aventura", icon: "🏔️" },
    { id: "educativo", label: "Educativo", icon: "📚" },
    { id: "cultural", label: "Cultural", icon: "🏛️" },
    { id: "relajacion", label: "Relajación", icon: "🏖️" },
  ]

  const filteredPackages = mockPackages.filter((pkg) => {
    const matchesCategory = !selectedCategory || pkg.category === selectedCategory
    return matchesCategory
  })

  const searchResults = searchQuery.trim()
    ? mockPackages
      .filter(
        (pkg) =>
          pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .slice(0, 5)
    : []

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
                Plataforma Inteligente de Viajes Estudiantiles
              </Badge>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
                Descubre el viaje perfecto para tu grupo estudiantil
              </h1>
              <p className="mb-8 text-lg text-muted-foreground text-balance md:text-xl">
                Conectamos estudiantes de Cañete con experiencias educativas y turísticas verificadas
              </p>

              {/* Search Bar with Dropdown */}
              <div className="mx-auto mb-6 max-w-2xl">
                <div className="relative flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="¿A dónde te gustaría viajar?"
                      className="h-12 pl-10 text-base"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value)
                        setShowSearchResults(true)
                      }}
                      onFocus={() => setShowSearchResults(true)}
                    />
                    {showSearchResults && searchResults.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 rounded-lg border bg-card shadow-lg z-50 max-h-96 overflow-y-auto">
                        {searchResults.map((pkg) => (
                          <Link
                            key={pkg.id}
                            href={`/paquete/${pkg.id}`}
                            className="flex items-center gap-3 border-b p-3 hover:bg-muted transition-colors last:border-b-0"
                          >
                            <div className="relative h-12 w-12 shrink-0 rounded overflow-hidden">
                              <Image
                                src={pkg.image || "/placeholder.svg"}
                                alt={pkg.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 text-left min-w-0">
                              <p className="font-medium text-sm truncate">{pkg.name}</p>
                              <p className="text-xs text-muted-foreground truncate">{pkg.destination}</p>
                            </div>
                            <span className="text-sm font-bold text-primary shrink-0">S/{pkg.price}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Button size="lg" className="h-12 px-8">
                    Buscar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-card py-6">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className="gap-2"
              >
                Todos los viajes
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="gap-2"
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-12 md:py-16">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Paquetes Destacados</h2>
              <p className="text-lg text-muted-foreground">Experiencias verificadas y diseñadas para estudiantes</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>

            {filteredPackages.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-muted-foreground">
                  No se encontraron paquetes con los filtros seleccionados
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Partners Section - Infinite slider */}
      <PartnersSection />

      {/* Footer */}
      <Footer />

      <Chatbot />
    </div>
  )
}
