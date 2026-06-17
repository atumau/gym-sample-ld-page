import { motion } from "framer-motion";

export default function SectionTitle({ tag, title, subtitle }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <span className="tag">{tag}</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </motion.div>
  );
}
