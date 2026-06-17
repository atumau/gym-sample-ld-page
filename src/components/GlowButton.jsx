import { motion } from "framer-motion";

export default function GlowButton({ children, variant = "primary", icon: Icon, className = "", ...props }) {
  return (
    <motion.button
      className={`glow-button ${variant} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {Icon && <Icon className="icon" />}
      {children}
    </motion.button>
  );
}
