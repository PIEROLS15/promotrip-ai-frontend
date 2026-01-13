import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, ShieldCheck } from "lucide-react"
import type { TravelPackage } from "@/lib/mock-data"

interface PackageCardProps {
    package: TravelPackage
}

export function PackageCard({ package: pkg }: PackageCardProps) {
    const categoryColors = {
        aventura: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
        educativo: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
        cultural: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
        relajacion: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    }

    const levelLabels = {
        primaria: "Primaria",
        secundaria: "Secundaria",
        superior: "Superior",
    }

    return (
        <Card className="group overflow-hidden transition-all hover:shadow-lg flex flex-col">
            <div className="relative aspect-4/3 overflow-hidden">
                <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 flex flex-col gap-2">
                    <Badge className={categoryColors[pkg.category]}>
                        {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}
                    </Badge>
                    {pkg.provider.verified && (
                        <Badge className="bg-primary text-primary-foreground">
                            <ShieldCheck className="mr-1 h-3 w-3" />
                            Verificado
                        </Badge>
                    )}
                </div>
            </div>

            <CardContent className="p-4 flex-1">
                <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold leading-tight text-balance">{pkg.name}</h3>
                    <div className="flex flex-col items-end">
                        <span className="text-2xl font-bold text-primary">S/{pkg.price}</span>
                        <span className="text-xs text-muted-foreground">por persona</span>
                    </div>
                </div>

                <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{pkg.description}</p>

                <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{pkg.destination}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{levelLabels[pkg.level]}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full" size="lg">
                    <Link href={`/paquete/${pkg.id}`}>Ver Detalles</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
