"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { supabase } from "@/app/lib/supabase/client";
import { z } from "zod";
import toast from "react-hot-toast";

const registerSchema = z.object({
    email: z.string().email("Ingresa un correo válido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    username: z
        .string()
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .max(20, "No más de 20 caracteres")
        .regex(/^[a-zA-Z0-9_-]+$/, "Solo letras, números, guiones y guiones bajos"),
});

type RegisterFormData = {
    email: string;
    password: string;
    username: string;
};

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export function RegisterDialog({ open, onOpenChange }: Props) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<RegisterFormData>();

    const onSubmit = async (data: RegisterFormData) => {
        const validation = registerSchema.safeParse(data);
        if (!validation.success) {
            const fieldErrors = validation.error.flatten().fieldErrors;
            if (fieldErrors.email) {
                setError("email", { message: fieldErrors.email[0] });
            }
            if (fieldErrors.password) {
                setError("password", { message: fieldErrors.password[0] });
            }
            if (fieldErrors.username) {
                setError("username", { message: fieldErrors.username[0] });
            }
            toast.error("Por favor corrige los campos marcados.");
            return;
        }

        const { data: slugCheck } = await supabase
            .from("profiles")
            .select("slug")
            .eq("slug", data.username)
            .single();

        if (slugCheck) {
            toast.error("Este nombre de usuario ya está en uso");
            return;
        }

        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                emailRedirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (authError) {
            toast.error(authError.message);
            return;
        }

        const userId = authData.user?.id;
        if (userId) {
            const { error: profileError } = await supabase.from("profiles").insert({
                id: userId,
                display_name: data.username,
                slug: data.username,
            });

            if (profileError) {
                toast.error("Error al crear el perfil");
                return;
            }
        }

        toast.success("Cuenta creada con éxito");
        onOpenChange(false);
        router.push("/dashboard");
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Crear Cuenta</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Nombre de usuario"
                            className={`w-full border px-4 py-2 rounded ${errors.username ? "border-red-500" : "focus:border-primary"
                                }`}
                            {...register("username")}
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            className={`w-full border px-4 py-2 rounded ${errors.email ? "border-red-500" : "focus:border-primary"
                                }`}
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className={`w-full border px-4 py-2 rounded ${errors.password ? "border-red-500" : "focus:border-primary"
                                }`}
                            {...register("password")}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        Crear Cuenta
                    </motion.button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default RegisterDialog;