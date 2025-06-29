
"use client"

import { motion } from "framer-motion"

export function Header() {
    return (
        <motion.header
            className="w-full py-6 px-8 bg-white shadow fixed top-0 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex justify-between items-center">
                <h1 className="text-2xl font-bold text-primary">TaggiPay</h1>
                <nav className="space-x-4">
                    <a href="/auth/login" className="text-primary font-medium hover:underline">Iniciar Sesión</a>
                    <a href="/auth/register" className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-primary/80">Regístrate</a>
                </nav>
            </div>
        </motion.header>
    )
}

export default Header;