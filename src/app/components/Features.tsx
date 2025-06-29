"use client"

import AnimatedContainer from "./AnimatedContainer"

export function Features() {
    const features = [
        { title: "QR Animado", description: "Genera un QR único y descárgalo." },
        { title: "Reseñas Públicas", description: "Recibe comentarios y gana confianza." },
        { title: "Links de Pago", description: "Acepta Yape, Plin o MercadoPago fácilmente." },
        { title: "Página Personal", description: "Tu mini sitio sin necesidad de apps ni hosting." }
    ]

    return (
        <section className="py-20 px-4 bg-gray-50">
            <AnimatedContainer>
                <h2 className="text-3xl font-bold text-center mb-12">Características Clave</h2>
                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white shadow p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </AnimatedContainer>
        </section>
    )
}

export default Features;