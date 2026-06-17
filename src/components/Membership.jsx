import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionTitle from "./SectionTitle";
import GlowButton from "./GlowButton";

const plans = [
  {
    name: "Basic",
    price: "999",
    period: "/month",
    popular: false,
    features: [
      { text: "Gym Access (6 AM - 10 PM)", included: true },
      { text: "Cardio & Strength Zone", included: true },
      { text: "Locker Facility", included: true },
      { text: "Diet Support", included: false },
      { text: "Personal Trainer", included: false },
      { text: "Workout Tracking", included: false },
    ],
  },
  {
    name: "Standard",
    price: "1,999",
    period: "/month",
    popular: true,
    features: [
      { text: "Unlimited Gym Access", included: true },
      { text: "Cardio & Strength Zone", included: true },
      { text: "Locker & Shower Facility", included: true },
      { text: "Diet Support", included: true },
      { text: "2 PT Sessions/Week", included: true },
      { text: "Workout Tracking", included: false },
    ],
  },
  {
    name: "Premium",
    price: "3,499",
    period: "/month",
    popular: false,
    features: [
      { text: "24/7 Premium Access", included: true },
      { text: "All Equipment & Classes", included: true },
      { text: "Premium Locker & Sauna", included: true },
      { text: "Custom Diet Plan", included: true },
      { text: "Daily Personal Trainer", included: true },
      { text: "Progress Tracking App", included: true },
    ],
  },
];

export default function Membership() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionTitle
          tag="Pricing"
          title="Membership Plans"
          subtitle="Choose a plan that fits your goals and budget. No hidden charges, flexible timings, and full access to the best fitness experience in town."
        />

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <h3>{plan.name}</h3>
              <div className="price">
                ₹{plan.price}
                <span>{plan.period}</span>
              </div>
              <div className="features">
                {plan.features.map((f, j) => (
                  <div className={`feature ${f.included ? "included" : "not-included"}`} key={j}>
                    {f.included ? <Check size={18} /> : <X size={18} />}
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
              <GlowButton
                variant={plan.popular ? "primary" : "outline"}
                onClick={scrollToContact}
                style={{ width: "100%" }}
              >
                Join Now
              </GlowButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
