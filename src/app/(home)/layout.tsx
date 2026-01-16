import { Suspense } from "react"
import Header from "@/components/home/layout/header"
import { Loader } from "@/components/loader"
import Footer from "@/components/home/layout/footer"
import { Chatbot } from "@/components/home/layout/chatbot"

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Suspense fallback={<Loader />}>
            <Header />
            {children}
            <Footer />

             {/* Chatbot global */}
            <Chatbot />
        </Suspense>
    )
}
