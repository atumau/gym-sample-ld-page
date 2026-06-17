import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../data/images";
import SectionTitle from "./SectionTitle";

const diets = {
  "Weight Gain": {
    title: "Weight Gain Diet",
    desc: "Calorie surplus plan packed with desi proteins to help you build size and strength naturally.",
    meals: [
      { name: "Banana Peanut Butter Shake", cal: "450 cal" },
      { name: "4 Eggs + 2 Paratha", cal: "600 cal" },
      { name: "Rice + Dal + Paneer Sabzi", cal: "750 cal" },
      { name: "Chicken Breast + Roti + Salad", cal: "650 cal" },
    ],
    macros: { protein: 28, carbs: 50, fats: 22 },
  },
  "Fat Loss": {
    title: "Fat Loss Diet",
    desc: "High-protein, low-calorie Indian meals that keep you full while burning stubborn fat.",
    meals: [
      { name: "Oats + Boiled Eggs", cal: "320 cal" },
      { name: "Grilled Paneer Salad", cal: "280 cal" },
      { name: "Dal + Roti + Veg Sabzi", cal: "420 cal" },
      { name: "Chicken Soup + Green Veggies", cal: "250 cal" },
    ],
    macros: { protein: 40, carbs: 30, fats: 18 },
  },
  "Lean Muscle": {
    title: "Lean Muscle Diet",
    desc: "Clean bulking plan to gain muscle without excess fat — perfect for a defined physique.",
    meals: [
      { name: "Egg Whites + Oats", cal: "380 cal" },
      { name: "Grilled Chicken + Brown Rice", cal: "520 cal" },
      { name: "Paneer Bhurji + Roti", cal: "480 cal" },
      { name: "Whey Shake + Peanut Butter", cal: "350 cal" },
    ],
    macros: { protein: 45, carbs: 35, fats: 20 },
  },
};

const tabs = Object.keys(diets);

export default function DietPlans() {
  const [active, setActive] = useState("Weight Gain");
  const plan = diets[active];

  return (
    <section className="section" id="diet">
      <div className="container">
        <SectionTitle
          tag="Nutrition"
          title="Desi Diet Plans That Actually Work"
          subtitle="Gym sirf 30% hai — baki 70% aapki plate decide karti hai. Get Indian meal plans made for real taste and real results."
        />

        <div className="diet-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`diet-tab ${active === tab ? "active" : ""}`}
              onClick={() => setActive(tab)}
            >
              {tab} Diet
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="diet-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="diet-image">
              <img src={IMAGES.diet} alt={plan.title} loading="lazy" />
            </div>

            <div className="diet-info">
              <h3 className="red-gradient-text">{plan.title}</h3>
              <p>{plan.desc}</p>

              <div className="meal-list">
                {plan.meals.map((meal, i) => (
                  <div className="meal-item" key={i}>
                    <span>{meal.name}</span>
                    <span>{meal.cal}</span>
                  </div>
                ))}
              </div>

              <div className="macro-bars">
                {Object.entries(plan.macros).map(([key, value]) => (
                  <div className="macro" key={key}>
                    <div className="macro-header">
                      <span>{key}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="macro-bar">
                      <motion.div
                        className="macro-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
