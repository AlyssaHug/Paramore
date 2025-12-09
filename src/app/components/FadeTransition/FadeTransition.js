// components/PageTransition.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const heavyPages = ["/band", "/band/hayley", "/band/taylor", "/band/zac"]; // add your paths

export default function PageTransition({ children }) {
    const pathname = usePathname();
    const isHeavy = heavyPages.some((p) => pathname.startsWith(p));

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: isHeavy ? 0.25 : 0.5, // ← band pages = super fast fade
                    ease: "easeInOut",
                }}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
