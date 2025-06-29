"use client";

import { useState } from "react";
import AnimatedContainer from "./AnimatedContainer";
import { RegisterDialog } from "../components/auth/RegisterDialog";

export function CTA() {
    const [registerOpen, setRegisterOpen] = useState(false);

    return (
        <section className="py-10 px-4 bg-primary text-white text-center">
            <AnimatedContainer>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    ¿Listo para empezar a vender?
                </h2>
                <p className="mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                    Crea tu cuenta gratuita hoy mismo y recibe pagos sin complicaciones.
                </p>
                <button
                    onClick={() => setRegisterOpen(true)}
                    className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition cursor-pointer"
                >
                    Regístrate Gratis
                </button>
            </AnimatedContainer>

            <RegisterDialog open={registerOpen} onOpenChange={setRegisterOpen} />
        </section>
    );
}

export default CTA;