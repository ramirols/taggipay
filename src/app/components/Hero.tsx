"use client"

import AnimatedContainer from "./AnimatedContainer"
import Link from "next/link";

export function Hero() {
    return (
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-40 text-center">
            <AnimatedContainer>
                <h1 className="text-5xl font-bold mb-4">Vende Online en Minutos con TaggiPay</h1>
                <p className="text-xl mb-8">Tu página personal, links de pago, QR y reseñas. Todo sin apps ni complicaciones.</p>
                <Link
                    href="/auth/register"
                    className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
                >
                    Empieza Gratis
                </Link>
            </AnimatedContainer>
        </section>
    )
}

export default Hero;