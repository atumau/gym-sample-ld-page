import { motion } from "framer-motion";
import { IMAGES } from "../data/images";
import SectionTitle from "./SectionTitle";

const bodyParts = [
  { name: "Chest", muscle: "Pectoralis Major", level: "Beginner", image: IMAGES.chest },
  { name: "Back", muscle: "Latissimus Dorsi", level: "Intermediate", image: IMAGES.back },
  { name: "Biceps", muscle: "Biceps Brachii", level: "Beginner", image: IMAGES.biceps },
  { name: "Triceps", muscle: "Triceps Brachii", level: "Intermediate", image: IMAGES.triceps },
  { name: "Shoulder", muscle: "Deltoids", level: "Beginner", image: IMAGES.shoulder },
  { name: "Legs", muscle: "Quads, Hamstrings, Glutes", level: "Advanced", image: IMAGES.legs },
  { name: "Abs", muscle: "Rectus Abdominis", level: "Beginner", image: IMAGES.abs },
];

export default function BodyPartGuide() {
  return (
    <section className="section section-alt" id="exercises">
      <div className="container">
        <SectionTitle
          tag="Exercise Library"
          title="Body Part Wise Exercise Guide"
          subtitle="Har muscle group ko sahi tarike se train karo. Expert-curated exercises with proper form, target muscles, and difficulty levels."
        />

        <div className="body-grid">
          {bodyParts.map((part, i) => (
            <motion.div
              key={part.name}
              className="body-card card-3d"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ rotateY: -8, rotateX: 6, scale: 1.02 }}
            >
              <img src={part.image} alt={part.name} loading="lazy" />
              <div className="body-card-overlay">
                <h3>{part.name}</h3>
                <p>Target: {part.muscle}</p>
                <span className="level">{part.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
