'use client'

import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Loader() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        const theme = (savedTheme as string) || (prefersDark ? "dark" : "light")
        setIsDark(theme === "dark")
    }, [])

    return (
        <div className={`fixed inset-0 z-9999 flex flex-col items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-slate-50'
            }`}>
            <div className="flex flex-col items-center gap-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                        PT
                    </div>
                </div>

                {/* Spinner */}
                <div className="relative flex flex-col items-center">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className={`mt-4 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        Cargando...
                    </p>
                </div>
            </div>
        </div>
    )
}
