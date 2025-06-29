"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/app/lib/supabase/client"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { z } from "zod"

const loginSchema = z.object({
    email: z.string().email("Ingresa un correo válido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginPage() {
    const router = useRouter()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>()

    const onSubmit = async (data: LoginFormData) => {
        setLoading(true)
        setError("")

        const { error: authError } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password
        })

        if (authError) {
            setError(authError.message)
            setLoading(false)
            return
        }

        router.push("/dashboard")
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
                    Iniciar Sesión
                </motion.h1>

                <div className="space-y-1">
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className={`w-full border px-4 py-2 rounded transition-colors ${errors.email ? 'border-red-500' : 'focus:border-primary'
                            }`}
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
                        className={`w-full border px-4 py-2 rounded transition-colors ${errors.password ? 'border-red-500' : 'focus:border-primary'
                            }`}
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
                    {loading ? "Ingresando..." : "Iniciar Sesión"}
                </motion.button>
            </motion.form>
        </motion.main>
    )
}

export default LoginPage;