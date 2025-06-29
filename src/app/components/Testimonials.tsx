"use client"

import AnimatedContainer from "./AnimatedContainer"

export function Testimonials() {
    const testimonials = [
        {
            name: "María López",
            quote: "TaggiPay me permitió vender mis postres desde casa y recibir pagos por Yape. ¡Lo recomiendo!"
        },
        {
            name: "José Pérez",
            quote: "En minutos configuré mi página, compartí el QR y empecé a recibir pedidos sin complicaciones."
        }
    ]

    return (
        <section className="">
            <AnimatedContainer>
                <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white shadow p-6 rounded-lg text-center">
                            <p className="italic text-lg mb-4">"{t.quote}"</p>
                            <p className="font-bold">{t.name}</p>
                        </div>
                    ))}
                </div>
            </AnimatedContainer>
        </section>
    )
}

export default Testimonials;