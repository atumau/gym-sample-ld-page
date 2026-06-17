import { motion } from "framer-motion";
import { Award, Wallet, Dumbbell, ClipboardList, Apple, HandHeart } from "lucide-react";
import SectionTitle from "./SectionTitle";

const reasons = [
  {
    icon: Award,
    title: "Certified Trainers",
    desc: "Train under nationally certified fitness experts who understand Indian body types and design safe, effective workouts.",
  },
  {
    icon: Wallet,
    title: "Affordable Membership",
    desc: "Premium facilities at local-friendly prices. No hidden charges — fitness should fit your budget, not break it.",
  },
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    desc: "Imported machines, free weights, cardio zone, and functional training area maintained to global standards.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Workout Plans",
    desc: "Every body is different. Get custom workout charts based on your goal, stamina, and fitness level.",
  },
  {
    icon: Apple,
    title: "Diet Guidance",
    desc: "Desi diet charts with paneer, dal, roti, eggs & chicken — designed by nutrition experts for real results.",
  },
  {
    icon: HandHeart,
    title: "Beginner Assistance",
    desc: "First time in a gym? Our trainers hold your hand through every rep until you feel confident and strong.",
  },
];

export default function WhyJoin() {
  return (
    <section className="section section-alt" id="why">
      <div className="container">
        <SectionTitle
          tag="Why Aarambh Gym"
          title="Why Aarambh Gym is Different?"
          subtitle="Yahan sirf exercise nahi, ek nayi zindagi ki shuruaat hoti hai. We combine Indian values with world-class training to deliver results you can see and feel."
        />

        <div className="why-grid">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              className="why-card card-3d"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ rotateX: 4, rotateY: -4, translateY: -10 }}
            >
              <div className="why-icon">
                <item.icon size={28} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
