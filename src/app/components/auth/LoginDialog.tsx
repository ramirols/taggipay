"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { supabase } from "@/app/lib/supabase/client";
import { z } from "zod";
import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z.string().email("Ingresa un correo válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type LoginFormData = {
  email: string;
  password: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function LoginDialog({ open, onOpenChange }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError: setFormError,
    formState: { errors },
  } = useForm<LoginFormData>();
  const loading = false;

  const onSubmit = async (data: LoginFormData) => {
    const validation = loginSchema.safeParse(data);
    if (!validation.success) {
      const formErrors = validation.error.flatten().fieldErrors;
      if (formErrors.email) {
        setFormError("email", { message: formErrors.email[0] });
      }
      if (formErrors.password) {
        setFormError("password", { message: formErrors.password[0] });
      }
      toast.error("Por favor corrige los campos marcados.");
      return;
    }

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (authError) {
      toast.error(authError.message || "Error al iniciar sesión");
      return;
    }

    toast.success("Sesión iniciada correctamente");
    onOpenChange(false); // cerrar modal
    router.push("/dashboard");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Iniciar Sesión</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              className={`w-full border px-4 py-2 rounded ${
                errors.email ? "border-red-500" : "focus:border-primary"
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Contraseña"
              className={`w-full border px-4 py-2 rounded ${
                errors.password ? "border-red-500" : "focus:border-primary"
              }`}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Iniciar Sesión
          </motion.button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;