"use client";

import AnimatedContainer from "./AnimatedContainer";

export function Features() {
    const features = [
        { title: "QR Animado", description: "Genera un QR único y descárgalo." },
        { title: "Reseñas Públicas", description: "Recibe comentarios y gana confianza." },
        { title: "Links de Pago", description: "Acepta Yape, Plin o MercadoPago fácilmente." },
        { title: "Página Personal", description: "Tu mini sitio sin necesidad de apps ni hosting." }
    ];

    return (
        <section className="py-10 px-4 bg-gray-50">
            <AnimatedContainer>
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-800">
                    Características Clave
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center"
                        >
                            <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </AnimatedContainer>
        </section>
    );
}

export default Features;