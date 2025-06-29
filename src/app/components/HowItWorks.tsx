"use client";

import AnimatedContainer from "./AnimatedContainer";

export function HowItWorks() {
    const steps = [
        { title: "Regístrate", description: "Crea tu cuenta en segundos." },
        { title: "Configura tu página", description: "Personaliza colores, imágenes y links de pago." },
        { title: "Empieza a vender", description: "Comparte tu link o QR y recibe pagos al instante." }
    ];

    return (
        <section className="py-10 px-4 bg-gray-50">
            <AnimatedContainer>
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-800">
                    ¿Cómo funciona?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-md hover:shadow-lg transition p-6 rounded-2xl text-center"
                        >
                            <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </AnimatedContainer>
        </section>
    );
}

export default HowItWorks;