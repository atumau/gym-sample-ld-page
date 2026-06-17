import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";
import { IMAGES } from "../data/images";
import SectionTitle from "./SectionTitle";
import AnimatedCounter from "./AnimatedCounter";

const testimonials = [
  {
    text: "Main pehle bohot conscious tha apni body ko leke. Aarambh Gym ne meri zindagi badal di — 18 kg weight loss in 5 months!",
    name: "Atul Maurya",
    role: "Lost 18 kg",
    image: IMAGES.trainer1,
    rating: 5,
  },
  {
    text: "Trainer bohot supportive hain. Diet bhi Indian style mein diya gaya jo follow karna asaan tha. Ab muscle gain ho raha hai.",
    name: "Akash Maurya",
    role: "Gained 8 kg Muscle",
    image: IMAGES.trainer2,
    rating: 5,
  },
  {
    text: "Best local gym experience. Equipment new hai, atmosphere energetic hai, aur sabse important — results dikhte hain.",
    name: "Gaurav Singh",
    role: "Member since 2023",
    image: IMAGES.community,
    rating: 5,
  },
  {
    text: "Free trial ke baad maine immediately membership li. Yahan beginners ko bilkul comfortable feel karaya jaata hai.",
    name: "Deepak Pal",
    role: "Beginner to Fit",
    image: IMAGES.trainer1,
    rating: 5,
  },
];

export default function Transformations() {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="section section-alt" id="results">
      <div className="container">
        <SectionTitle
          tag="Real Results"
          title="Transformation & Testimonials"
          subtitle="Yeh sirf photos nahi — yeh mehnat, dedication aur Aarambh Gym ki family ki kahani hai. Agar woh kar sakte hain, toh aap bhi kar sakte ho."
        />

        <div className="transform-layout">
          <motion.div
            className="transform-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={IMAGES.transformation} alt="Transformation" loading="lazy" />
            <div className="badge">
              <TrendingUp size={14} /> Real Member
            </div>
          </motion.div>

          <motion.div
            className="transform-quote"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>"If They Can Transform, I Can Too"</h3>
            <p>
              Har transformation ke peeche hoti hai mehnat, sahi guidance aur ek supportive gym family. 
              Aarambh Gym mein aapki journey sirf aapki nahi, hum sabki responsibility ban jaati hai.
            </p>
            <div className="results-stats">
              <div className="results-stat">
                <div className="num">
                  <AnimatedCounter target={800} suffix="+" />
                </div>
                <div className="txt">Transformations</div>
              </div>
              <div className="results-stat">
                <div className="num">
                  <AnimatedCounter target={95} suffix="%" />
                </div>
                <div className="txt">Success Rate</div>
              </div>
              <div className="results-stat">
                <div className="num">
                  <AnimatedCounter target={4.9} suffix="" />
                </div>
                <div className="txt">Google Rating</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="testimonials">
          <div className="testimonials-track">
            {duplicated.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>"{t.text}"</p>
                <div className="testimonial-author">
                  <img src={t.image} alt={t.name} />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
