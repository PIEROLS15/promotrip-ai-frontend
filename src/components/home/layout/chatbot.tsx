"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X, Send, MessageCircle, Sparkles, Trash2 } from 'lucide-react'
import { mockPackages } from "@/lib/mock-data"
import Image from "next/image"
import Link from "next/link"

interface Message {
    id: string
    type: "bot" | "user"
    content: string
    options?: { label: string; value: string }[]
    packages?: typeof mockPackages
}

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            type: "bot",
            content:
                "Hola! Soy PromoTrip AI, tu asistente inteligente de viajes. Te ayudaré a encontrar el viaje ideal para tu grupo estudiantil.",
        },
        {
            id: "2",
            type: "bot",
            content: "¿Qué tipo de experiencia buscas?",
            options: [
                { label: "Aventura", value: "aventura" },
                { label: "Educativo", value: "educativo" },
                { label: "Cultural", value: "cultural" },
                { label: "Relajación", value: "relajacion" },
            ],
        },
    ])
    const [inputValue, setInputValue] = useState("")
    const [currentStep, setCurrentStep] = useState<"category" | "duration" | "level" | "results">("category")
    const [preferences, setPreferences] = useState<{
        category?: string
        duration?: string
        level?: string
    }>({})

    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const savedMessages = localStorage.getItem("chatbot_messages")
        const savedStep = localStorage.getItem("chatbot_step")
        const savedPreferences = localStorage.getItem("chatbot_preferences")

        if (savedMessages) {
            setMessages(JSON.parse(savedMessages))
        }
        if (savedStep) {
            setCurrentStep(JSON.parse(savedStep))
        }
        if (savedPreferences) {
            setPreferences(JSON.parse(savedPreferences))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("chatbot_messages", JSON.stringify(messages))
        localStorage.setItem("chatbot_step", JSON.stringify(currentStep))
        localStorage.setItem("chatbot_preferences", JSON.stringify(preferences))
    }, [messages, currentStep, preferences])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleOptionClick = (value: string) => {
        const newPreferences = { ...preferences }

        if (currentStep === "category") {
            newPreferences.category = value
            setPreferences(newPreferences)

            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now().toString(),
                    type: "user",
                    content: value.charAt(0).toUpperCase() + value.slice(1),
                },
                {
                    id: (Date.now() + 1).toString(),
                    type: "bot",
                    content: "Perfecto! ¿Cuánto tiempo tienen disponible?",
                    options: [
                        { label: "1 día", value: "1 día" },
                        { label: "2-3 días", value: "2-3 días" },
                        { label: "1 semana", value: "1 semana" },
                        { label: "Cualquiera", value: "cualquiera" },
                    ],
                },
            ])
            setCurrentStep("duration")
        } else if (currentStep === "duration") {
            newPreferences.duration = value
            setPreferences(newPreferences)

            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now().toString(),
                    type: "user",
                    content: value,
                },
                {
                    id: (Date.now() + 1).toString(),
                    type: "bot",
                    content: "¿Para qué nivel educativo es el viaje?",
                    options: [
                        { label: "Primaria", value: "primaria" },
                        { label: "Secundaria", value: "secundaria" },
                        { label: "Superior", value: "superior" },
                        { label: "Cualquiera", value: "cualquiera" },
                    ],
                },
            ])
            setCurrentStep("level")
        } else if (currentStep === "level") {
            newPreferences.level = value
            setPreferences(newPreferences)

            // Filter packages based on preferences
            let filtered = mockPackages.filter((pkg) => {
                if (newPreferences.category && newPreferences.category !== "cualquiera") {
                    if (pkg.category !== newPreferences.category) return false
                }
                if (newPreferences.duration && newPreferences.duration !== "cualquiera") {
                    if (newPreferences.duration === "1 día" && pkg.duration !== "1 día") return false
                    if (newPreferences.duration === "2-3 días" && !["2 días", "3 días"].includes(pkg.duration)) return false
                    if (newPreferences.duration === "1 semana" && !pkg.duration.includes("semana")) return false
                }
                if (newPreferences.level && newPreferences.level !== "cualquiera") {
                    if (pkg.level !== newPreferences.level) return false
                }
                return true
            })

            // If no exact matches, show all packages of the selected category
            if (filtered.length === 0 && newPreferences.category) {
                filtered = mockPackages.filter((pkg) => pkg.category === newPreferences.category)
            }

            // If still no matches, show all packages
            if (filtered.length === 0) {
                filtered = mockPackages
            }

            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now().toString(),
                    type: "user",
                    content: value.charAt(0).toUpperCase() + value.slice(1),
                },
                {
                    id: (Date.now() + 1).toString(),
                    type: "bot",
                    content: `Encontré ${filtered.length} paquete${filtered.length !== 1 ? "s" : ""} perfecto${filtered.length !== 1 ? "s" : ""} para ustedes:`,
                    packages: filtered,
                },
            ])
            setCurrentStep("results")
        }
    }

    const handleSendMessage = () => {
        if (!inputValue.trim()) return

        setMessages((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                type: "user",
                content: inputValue,
            },
            {
                id: (Date.now() + 1).toString(),
                type: "bot",
                content:
                    "Gracias por tu mensaje. Para ayudarte mejor, puedes usar los botones de arriba para reiniciar la búsqueda o contactar directamente con nuestro equipo.",
            },
        ])
        setInputValue("")
    }

    const handleRestart = () => {
        setMessages([
            {
                id: "1",
                type: "bot",
                content:
                    "Hola! Soy PromoTrip AI, tu asistente inteligente de viajes. Te ayudaré a encontrar el viaje ideal para tu grupo estudiantil.",
            },
            {
                id: "2",
                type: "bot",
                content: "¿Qué tipo de experiencia buscas?",
                options: [
                    { label: "Aventura", value: "aventura" },
                    { label: "Educativo", value: "educativo" },
                    { label: "Cultural", value: "cultural" },
                    { label: "Relajación", value: "relajacion" },
                ],
            },
        ])
        setCurrentStep("category")
        setPreferences({})
    }

    const handleClearChat = () => {
        handleRestart()
        localStorage.removeItem("chatbot_messages")
        localStorage.removeItem("chatbot_step")
        localStorage.removeItem("chatbot_preferences")
    }

    if (!isOpen) {
        return (
            <Button
                size="lg"
                className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg md:h-16 md:w-16"
                onClick={() => setIsOpen(true)}
            >
                <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
            </Button>
        )
    }

    return (
        <Card className="fixed bottom-6 right-6 z-50 flex h-[70vh] w-[calc(100vw-48px)] max-w-sm flex-col shadow-2xl sm:h-125 sm:w-96 md:h-137.5 md:max-w-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b bg-primary p-3 text-primary-foreground">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20">
                        <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm">PromoTrip AI</h3>
                        <p className="text-xs opacity-90">Asistente de viajes</p>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/20"
                    onClick={() => setIsOpen(false)}
                >
                    <X className="h-4 w-4" />
                </Button>
            </CardHeader>

            <CardContent className="flex-1 space-y-4 overflow-y-auto p-4">
                {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                            className={`max-w-[85%] rounded-2xl px-4 py-2 ${message.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                }`}
                        >
                            <p className="text-sm leading-relaxed">{message.content}</p>

                            {message.options && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {message.options.map((option) => (
                                        <Button
                                            key={option.value}
                                            variant="outline"
                                            size="sm"
                                            className="bg-background"
                                            onClick={() => handleOptionClick(option.value)}
                                        >
                                            {option.label}
                                        </Button>
                                    ))}
                                </div>
                            )}

                            {message.packages && (
                                <div className="mt-3 space-y-3">
                                    {message.packages.map((pkg) => (
                                        <Card key={pkg.id} className="overflow-hidden">
                                            <div className="relative aspect-video">
                                                <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                                            </div>
                                            <div className="p-3">
                                                <div className="mb-2 flex items-start justify-between gap-2">
                                                    <h4 className="text-sm font-bold leading-tight">{pkg.name}</h4>
                                                    <Badge variant="secondary" className="shrink-0 text-xs">
                                                        S/{pkg.price}
                                                    </Badge>
                                                </div>
                                                <p className="mb-2 text-xs text-muted-foreground line-clamp-2">{pkg.description}</p>
                                                <Button asChild size="sm" className="w-full">
                                                    <Link href={`/paquete/${pkg.id}`}>Ver Detalles</Link>
                                                </Button>
                                            </div>
                                        </Card>
                                    ))}
                                    <Button variant="outline" size="sm" className="w-full bg-transparent" onClick={handleRestart}>
                                        Buscar otros viajes
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </CardContent>

            <CardFooter className="border-t p-3">
                <div className="flex w-full gap-2">
                    <Input
                        placeholder="Escribe un mensaje..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        className="flex-1"
                    />
                    <Button size="icon" onClick={handleSendMessage} title="Enviar mensaje">
                        <Send className="h-4 w-4" />
                    </Button>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={handleClearChat}
                        title="Limpiar chat"
                        className="text-destructive hover:bg-destructive/10"
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
