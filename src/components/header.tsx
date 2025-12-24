"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, User, Moon, Sun } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function Header() {
    const { theme, toggleTheme } = useTheme()
    const pathname = typeof window !== "undefined" ? window.location.pathname : ""

    const isActive = (href: string) => {
        if (href === "/" && pathname === "/") return true
        if (href !== "/" && pathname.startsWith(href)) return true
        return false
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="w-full px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <span className="text-xl font-bold text-primary-foreground">PT</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold leading-none">PromoTrip AI</span>
                            <span className="text-xs text-muted-foreground">Viajes Estudiantiles</span>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-6 md:flex">
                        <Link
                            href="/"
                            className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                                }`}
                        >
                            Inicio
                        </Link>
                        <Link
                            href="/paquetes"
                            className={`text-sm font-medium transition-colors ${isActive("/paquetes") ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                                }`}
                        >
                            Paquetes
                        </Link>
                        <Link
                            href="/nosotros"
                            className={`text-sm font-medium transition-colors ${isActive("/nosotros") ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                                }`}
                        >
                            Nosotros
                        </Link>
                        <Link
                            href="/contacto"
                            className={`text-sm font-medium transition-colors ${isActive("/contacto") ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                                }`}
                        >
                            Contacto
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={toggleTheme} title="Cambiar tema">
                            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <User className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <Link href="/login">Iniciar Sesión</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/registro">Registrarse</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/proveedor">Portal Proveedor</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/admin">Portal Admin</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem asChild>
                                    <Link href="/">Inicio</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/paquetes">Paquetes</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/nosotros">Nosotros</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/contacto">Contacto</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}
