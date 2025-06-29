"use client";

import AnimatedContainer from "./AnimatedContainer";

export function Testimonials() {
    const testimonials = [
        {
            name: "María López",
            quote: "TaggiPay me permitió vender mis postres desde casa y recibir pagos por Yape. ¡Lo recomiendo!",
        },
        {
            name: "José Pérez",
            quote: "En minutos configuré mi página, compartí el QR y empecé a recibir pedidos sin complicaciones.",
        },
    ];

    return (
        <section className="py-10 px-4 bg-gray-50">
            <AnimatedContainer>
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-800">
                    Testimonios
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-md hover:shadow-lg transition p-6 rounded-2xl text-center"
                        >
                            <p className="italic text-base sm:text-lg text-gray-700 mb-4">
                                “{t.quote}”
                            </p>
                            <p className="font-semibold text-primary">{t.name}</p>
                        </div>
                    ))}
                </div>
            </AnimatedContainer>
        </section>
    );
}

export default Testimonials;