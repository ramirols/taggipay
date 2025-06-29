"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoginDialog } from "../../components/auth/LoginDialog";
import { RegisterDialog } from "../../components/auth/RegisterDialog";
import { Menu, X } from "lucide-react";

export function Header() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 w-full bg-white shadow z-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl font-bold text-primary">TaggiPay</h1>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => setLoginOpen(true)}
                            className="text-primary font-medium hover:underline transition"
                        >
                            Iniciar Sesión
                        </button>
                        <button
                            onClick={() => setRegisterOpen(true)}
                            className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primary/80 transition"
                        >
                            Regístrate
                        </button>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="md:hidden text-primary focus:outline-none"
                        aria-label="Menú móvil"
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile dropdown (limpio y elegante) */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden px-4 pb-4"
                        >
                            <div className="bg-white shadow-lg rounded-2xl p-4 space-y-3">
                                <button
                                    onClick={() => {
                                        setLoginOpen(true);
                                        setMenuOpen(false);
                                    }}
                                    className="block w-full text-left text-primary font-medium py-2 hover:underline"
                                >
                                    Iniciar Sesión
                                </button>
                                <button
                                    onClick={() => {
                                        setRegisterOpen(true);
                                        setMenuOpen(false);
                                    }}
                                    className="block w-full text-center bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-primary/80 transition"
                                >
                                    Regístrate
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
            <RegisterDialog open={registerOpen} onOpenChange={setRegisterOpen} />
        </>
    );
}

export default Header;