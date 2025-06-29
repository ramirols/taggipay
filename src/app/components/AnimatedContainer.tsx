"use client"

import { motion } from "framer-motion"

export function AnimatedContainer({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            className={`container py-10 ${className}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedContainer;