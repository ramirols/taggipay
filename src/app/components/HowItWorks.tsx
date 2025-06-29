"use client"

import AnimatedContainer from "./AnimatedContainer"

export function HowItWorks() {
    const steps = [
        { title: "Regístrate", description: "Crea tu cuenta en segundos." },
        { title: "Configura tu página", description: "Personaliza colores, imágenes y links de pago." },
        { title: "Empieza a vender", description: "Comparte tu link o QR y recibe pagos al instante." }
    ]

    return (
        <section className="text-center max-w-5xl mx-auto">
            <AnimatedContainer>
                <h2 className="text-3xl font-bold mb-12">¿Cómo funciona?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white shadow p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </AnimatedContainer>
        </section>
    )
}

export default HowItWorks;