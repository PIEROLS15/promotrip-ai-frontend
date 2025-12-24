const Footer = () => {
    return (
        <>
            <footer className="border-t bg-muted/30 py-8">
                <div className="w-full px-4 md:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <div className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                    <span className="text-xl font-bold text-primary-foreground">PT</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold">PromoTrip AI</span>
                                    <span className="text-xs text-muted-foreground">Viajes Estudiantiles Cañete</span>
                                </div>
                            </div>

                            <p className="text-center text-sm text-muted-foreground">
                                © 2025 PromoTrip AI. Todos los derechos reservados.
                            </p>

                            <div className="flex gap-4 text-sm">
                                <a href="#" className="text-muted-foreground hover:text-foreground">
                                    Términos
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-foreground">
                                    Privacidad
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-foreground">
                                    Contacto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
