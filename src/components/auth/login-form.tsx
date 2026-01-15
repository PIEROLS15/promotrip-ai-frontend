// src/components/auth/login-form.tsx
"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button"; // Asumo que este sí lo tienes, si no, usa <button>
import { Input } from "@/components/ui/input";   // Asumo que este sí lo tienes, si no, usa <input>

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!loginForm.email.includes("@")) newErrors.email = "Email inválido";
    if (loginForm.password.length < 1) newErrors.password = "Contraseña requerida";
    return newErrors;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    // Simulación de login sin Supabase
    console.log("Intentando login con:", loginForm);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      {/* Campo Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={loginForm.email}
            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
            className="pl-10 h-12"
          />
        </div>
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

          {/* Campo Password */}
      <div className="space-y-2 text-left">
        {/* Eliminamos name="password" de aquí abajo */}
        <label htmlFor="password" className="text-sm font-medium text-foreground">
          Contraseña
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            id="password"
            name="password" // El atributo name VA AQUÍ, en el input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={loginForm.password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            className="flex h-12 w-full rounded-md border border-input bg-background px-10 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
      </div>

      {/* Checkbox con HTML estándar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input 
            type="checkbox" 
            id="remember" 
            className="h-4 w-4 rounded border-gray-300"
          />
          <label htmlFor="remember" className="text-sm cursor-pointer">Recuérdame</label>
        </div>
        <button type="button" className="text-sm text-blue-600 hover:underline">
          ¿Olvidaste tu contraseña?
        </button>
      </div>

      <Button type="submit" className="w-full h-12" disabled={loading}>
        {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
      </Button>
    </form>
  );
};