"use client";

import { useState } from "react";
import { User, Mail, Lock, Phone, Building2, School, FileText, Eye, EyeOff, AlertCircle } from "lucide-react";
import Link from "next/link";

export const RegisterForm = () => {
  const [regType, setRegType] = useState<"user" | "provider">("user");
  const [showPsw, setShowPsw] = useState(false);
  const [showConfirmPsw, setShowConfirmPsw] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    representativeName: "",
    companyName: "",
    ruc: "",
    email: "",
    phone: "",
    school: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="space-y-5"> {/* Reducido de space-y-6 a 5 */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-foreground">Crea tu cuenta en PromoTrip</h2>
        <p className="text-sm text-muted-foreground mt-1">Únete a la plataforma líder en viajes de promoción.</p>
      </div>

      {/* Selector de Tipo de Cuenta */}
      <div className="flex p-1 bg-muted rounded-lg border border-border">
        <button
          type="button"
          onClick={() => setRegType("user")}
          className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${regType === "user" ? "bg-background shadow text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          Público General
        </button>
        <button
          type="button"
          onClick={() => setRegType("provider")}
          className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${regType === "provider" ? "bg-background shadow text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          Proveedor
        </button>
      </div>

      <form className="space-y-3 text-left"> {/* Reducido espacio entre campos de 4 a 3 */}
        
        {regType === "user" ? (
          <>
            <div className="space-y-1">
              <label className="text-sm font-medium">Nombre Completo</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input name="fullName" onChange={handleInputChange} className="flex h-11 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Ej. Juan Pérez" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Institución Educativa (Opcional)</label>
              <div className="relative">
                <School className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input name="school" onChange={handleInputChange} className="flex h-11 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Nombre de tu colegio" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3"> {/* Grid para aprovechar la anchura en desktop */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Representante</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input name="representativeName" onChange={handleInputChange} className="flex h-11 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Nombre legal" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">RUC</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input name="ruc" onChange={handleInputChange} className="flex h-11 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="11 dígitos" maxLength={11} />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Nombre de la Empresa</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input name="companyName" onChange={handleInputChange} className="flex h-11 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Razón social" />
              </div>
            </div>
          </>
        )}

        {/* --- CAMPOS COMUNES EN GRID PARA APROVECHAR ESPACIO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input name="email" type="email" onChange={handleInputChange} className="flex h-11 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="correo@ejemplo.com" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Teléfono</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input name="phone" type="tel" onChange={handleInputChange} className="flex h-11 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="987654321" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-sm font-medium">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input name="password" type={showPsw ? "text" : "password"} onChange={handleInputChange} className="flex h-11 w-full rounded-md border border-input bg-background pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="••••••••" />
              <button type="button" onClick={() => setShowPsw(!showPsw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showPsw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Confirmar Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input name="confirmPassword" type={showConfirmPsw ? "text" : "password"} onChange={handleInputChange} className="flex h-11 w-full rounded-md border border-input bg-background pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="••••••••" />
              <button type="button" onClick={() => setShowConfirmPsw(!showConfirmPsw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showConfirmPsw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground">Mínimo 8 caracteres, 1 mayúscula y 1 número</p>

        {regType === "provider" && (
          <div className="flex gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 text-blue-700 dark:text-blue-300">
            <AlertCircle size={18} className="shrink-0" />
            <p className="text-[11px] leading-snug">Tu RUC será verificado. El proceso toma entre 24 y 48 horas.</p>
          </div>
        )}

        <div className="flex items-start gap-2 pt-2">
          <input name="acceptTerms" type="checkbox" id="terms" onChange={handleInputChange} className="mt-1 h-4 w-4 rounded border-gray-300 text-primary" />
          <label htmlFor="terms" className="text-xs text-muted-foreground leading-tight cursor-pointer">
            Acepto los <span className="text-primary hover:underline font-medium">términos y condiciones</span> y la <span className="text-primary hover:underline font-medium">política de privacidad</span>
          </label>
        </div>

        <button type="submit" className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all mt-2">
          {regType === "user" ? "Crear Cuenta" : "Crear Cuenta de Proveedor"}
        </button>

        <div className="text-center pt-4 border-t border-border mt-4">
          <p className="text-sm text-muted-foreground">
            ¿Ya tienes cuenta? <Link href="/login" className="text-primary font-bold hover:underline">Inicia sesión aquí</Link>
          </p>
        </div>
      </form>
    </div>
  );
};