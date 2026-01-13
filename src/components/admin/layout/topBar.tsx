"use client";

import { Bell } from "lucide-react";
import ThemeToggle from "@/components/shared/themeToggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const titles: Record<string, string> = {
    "/admin": "Dashboard",
    "/admin/packages": "Paquetes",
    "/admin/providers": "Proveedores",
    "/admin/bookings": "Reservas",
    "/admin/users": "Usuarios",
    "/admin/payments": "Pagos",
    "/admin/settings": "Configuración",
};

export default function TopBar() {
    const pathname = usePathname();

    const title = titles[pathname] ?? "Admin";

    return (
        <header className="h-16 px-6 bg-card border-b border-border flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">{title}</h1>

            <div className="flex items-center gap-4">
                <ThemeToggle />

                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
                </Button>

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        A
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-medium">Admin</p>
                        <p className="text-xs text-muted-foreground">
                            admin@promotrip.pe
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
