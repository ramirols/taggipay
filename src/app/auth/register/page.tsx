"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/app/lib/supabase/client"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { z } from "zod"

const registerSchema = z.object({
    email: z.string().email("Ingresa un correo válido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    username: z.string()
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .max(20, "El nombre de usuario no puede tener más de 20 caracteres")
        .regex(/^[a-zA-Z0-9_-]+$/, "Solo se permiten letras, números, guiones y guiones bajos")
})

type RegisterFormData = z.infer<typeof registerSchema>

export function RegisterPage() {
    const router = useRouter()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormData>()

    const onSubmit = async (data: RegisterFormData) => {
        setLoading(true)
        setError("")

        // Verificar si el slug ya existe
        const { data: slugCheck } = await supabase
            .from("profiles")
            .select("slug")
            .eq("slug", data.username)
            .single()

        if (slugCheck) {
            setError("Este nombre de usuario ya está en uso")
            setLoading(false)
            return
        }

        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                emailRedirectTo: `${window.location.origin}/auth/callback`
            }
        })

        if (authError) {
            setError(authError.message)
            setLoading(false)
            return
        }

        const userId = authData.user?.id
        if (userId) {
            const { error: profileError } = await supabase.from("profiles").insert({
                id: userId,
                display_name: data.username,
                slug: data.username
            })

            if (profileError) {
                setError("Error al crear el perfil")
                setLoading(false)
                return
            }
        }

        router.push("/dashboard")
        setLoading(false)
    }

    return (
        <motion.main
            className="min-h-screen flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 max-w-md w-full p-8 border rounded-lg bg-white shadow-lg"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <motion.h1
                    className="text-2xl font-bold text-center"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Crear Cuenta
                </motion.h1>

                <div className="space-y-1">
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        className={`w-full border px-4 py-2 rounded transition-colors ${errors.username ? 'border-red-500' : 'focus:border-primary'}`}
                        {...register("username")}
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm">{errors.username.message}</p>
                    )}
                </div>

                <div className="space-y-1">
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className={`w-full border px-4 py-2 rounded transition-colors ${errors.email ? 'border-red-500' : 'focus:border-primary'}`}
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-1">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className={`w-full border px-4 py-2 rounded transition-colors ${errors.password ? 'border-red-500' : 'focus:border-primary'}`}
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                </div>

                {error && (
                    <motion.p
                        className="text-red-500 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {error}
                    </motion.p>
                )}

                <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                >
                    {loading ? "Registrando..." : "Crear Cuenta"}
                </motion.button>
            </motion.form>
        </motion.main>
    )
}

export default RegisterPage;