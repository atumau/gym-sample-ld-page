import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Flame, ArrowRight, Play } from "lucide-react";
import { IMAGES } from "../data/images";
import GlowButton from "./GlowButton";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { label: "Members Joined", value: 2500, suffix: "+" },
  { label: "Transformations", value: 800, suffix: "+" },
  { label: "Expert Trainers", value: 12, suffix: "" },
  { label: "Success Rate", value: 95, suffix: "%" },
];

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 220]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % IMAGES.hero.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <motion.div className="hero-bg" style={{ y }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={slide}
            src={IMAGES.hero[slide]}
            alt="Aarambh Gym"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
      </motion.div>
      <div className="hero-overlay" />

      <motion.div className="container" style={{ opacity }}>
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Flame size={16} />
            India's Premium Local Fitness Destination
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="line">Start Your Fitness</span>
            <span className="line red-gradient-text">Journey at Aarambh Gym</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Badlav Aaj Se, <span>Aarambh Yahin Se</span> 💪
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlowButton variant="primary" icon={ArrowRight} onClick={() => scrollTo("#pricing")}>
              Join Now
            </GlowButton>
            <GlowButton variant="outline" icon={Play} onClick={() => scrollTo("#contact")}>
              Free Trial
            </GlowButton>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">
                  <AnimatedCounter target={s.value} suffix={s.suffix} duration={2.2} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="calorie-ring">
            <div className="calorie-inner">
              <div className="number">
                <AnimatedCounter target={780} suffix="" duration={2.5} />
              </div>
              <div className="label">Calories Burned</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="scroll-indicator">
        <div className="mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
