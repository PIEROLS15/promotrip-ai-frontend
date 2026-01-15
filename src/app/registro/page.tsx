import { RegisterForm } from "@/components/auth/register-form-container";
import Header from "@/components/home/layout/header";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12 flex items-center justify-center p-4">
        {/* Cambiado de max-w-md a max-w-xl para más anchura */}
        <div className="w-full max-w-xl"> 
          <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10">
            
            <RegisterForm />

          </div>
        </div>
      </main>
    </div>
  );
}