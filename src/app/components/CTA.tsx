"use client"

import AnimatedContainer from "./AnimatedContainer"

export function CTA() {
    return (
        <section className="py-20 bg-primary text-white text-center">
            <AnimatedContainer>
                <h2 className="text-3xl font-bold mb-4">¿Listo para empezar a vender?</h2>
                <p className="mb-8 text-lg">Crea tu cuenta gratuita hoy mismo y recibe pagos sin complicaciones.</p>
                <a href="/auth/register" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
                    Regístrate Gratis
                </a>
            </AnimatedContainer>
        </section>
    )
}

export default CTA;