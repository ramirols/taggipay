"use client";

import { useState } from "react";
import AnimatedContainer from "./AnimatedContainer";
import { RegisterDialog } from "../components/auth/RegisterDialog";

export function Hero() {
    const [registerOpen, setRegisterOpen] = useState(false);

    return (
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-10 md:py-10 px-4">
            <AnimatedContainer>
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Vende Online en Minutos con TaggiPay
                    </h1>
                    <p className="text-lg sm:text-xl mb-8">
                        Tu página personal, links de pago, QR y reseñas. Todo sin apps ni complicaciones.
                    </p>
                    <button
                        onClick={() => setRegisterOpen(true)}
                        className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition cursor-pointer"
                    >
                        Empieza Gratis
                    </button>
                </div>
            </AnimatedContainer>

            <RegisterDialog open={registerOpen} onOpenChange={setRegisterOpen} />
        </section>
    );
}

export default Hero;