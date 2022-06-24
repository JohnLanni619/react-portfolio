import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 }
};

export default function AnimatedPage({ children }) {
    return (
        <motion.div
            variants={animations}
            transition={{ duration: .2 }}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );  
};