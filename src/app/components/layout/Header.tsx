"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LoginDialog } from "../../components/auth/LoginDialog";
import { RegisterDialog } from "../../components/auth/RegisterDialog";

export function Header() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);

    return (
        <>
            {/* Header visual con botones personalizados */}
            <motion.header
                className="w-full py-6 px-8 bg-white shadow fixed top-0 z-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-primary">TaggiPay</h1>
                    <nav className="space-x-4">
                        <button
                            onClick={() => setLoginOpen(true)}
                            className="text-primary font-medium hover:underline"
                        >
                            Iniciar Sesión
                        </button>
                        <button
                            onClick={() => setRegisterOpen(true)}
                            className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-primary/80"
                        >
                            Regístrate
                        </button>
                    </nav>
                </div>
            </motion.header>

            <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
            <RegisterDialog open={registerOpen} onOpenChange={setRegisterOpen} />
        </>
    );
}

export default Header;