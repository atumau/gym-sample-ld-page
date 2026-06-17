import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";

const schedule = {
  Monday: {
    focus: "Chest",
    difficulty: "intermediate",
    exercises: [
      { name: "Flat Bench Press", sets: "4 sets x 10 reps" },
      { name: "Incline Dumbbell Press", sets: "4 sets x 12 reps" },
      { name: "Cable Fly", sets: "3 sets x 15 reps" },
      { name: "Push Ups", sets: "3 sets x failure" },
    ],
  },
  Tuesday: {
    focus: "Back",
    difficulty: "intermediate",
    exercises: [
      { name: "Lat Pulldown", sets: "4 sets x 12 reps" },
      { name: "Seated Cable Row", sets: "4 sets x 12 reps" },
      { name: "Deadlift", sets: "3 sets x 8 reps" },
      { name: "Pull Ups", sets: "3 sets x failure" },
    ],
  },
  Wednesday: {
    focus: "Shoulder",
    difficulty: "beginner",
    exercises: [
      { name: "Overhead Press", sets: "4 sets x 10 reps" },
      { name: "Lateral Raises", sets: "4 sets x 15 reps" },
      { name: "Face Pulls", sets: "3 sets x 15 reps" },
      { name: "Shrugs", sets: "3 sets x 12 reps" },
    ],
  },
  Thursday: {
    focus: "Arms",
    difficulty: "intermediate",
    exercises: [
      { name: "Barbell Curls", sets: "4 sets x 12 reps" },
      { name: "Hammer Curls", sets: "3 sets x 12 reps" },
      { name: "Tricep Pushdown", sets: "4 sets x 15 reps" },
      { name: "Skull Crushers", sets: "3 sets x 12 reps" },
    ],
  },
  Friday: {
    focus: "Legs",
    difficulty: "advanced",
    exercises: [
      { name: "Squats", sets: "4 sets x 10 reps" },
      { name: "Leg Press", sets: "4 sets x 12 reps" },
      { name: "Leg Curls", sets: "3 sets x 15 reps" },
      { name: "Calf Raises", sets: "4 sets x 20 reps" },
    ],
  },
  Saturday: {
    focus: "Cardio + Core",
    difficulty: "beginner",
    exercises: [
      { name: "Treadmill / Cycle", sets: "20 mins" },
      { name: "Plank", sets: "3 sets x 1 min" },
      { name: "Leg Raises", sets: "3 sets x 20 reps" },
      { name: "Russian Twists", sets: "3 sets x 30 reps" },
    ],
  },
  Sunday: {
    focus: "Recovery",
    difficulty: "beginner",
    exercises: [
      { name: "Stretching", sets: "15 mins" },
      { name: "Foam Rolling", sets: "10 mins" },
      { name: "Light Walk", sets: "20 mins" },
      { name: "Yoga & Mobility", sets: "15 mins" },
    ],
  },
};

const days = Object.keys(schedule);

export default function WorkoutPlan() {
  const [active, setActive] = useState("Monday");
  const current = schedule[active];

  return (
    <section className="section" id="workout">
      <div className="container">
        <SectionTitle
          tag="Weekly Schedule"
          title="Day Wise Workout Plan"
          subtitle="Har din ek nayi takat. Follow our science-backed split designed for muscle growth, fat loss, and peak endurance."
        />

        <div className="workout-tabs">
          {days.map((day) => (
            <button
              key={day}
              className={`workout-tab ${active === day ? "active" : ""}`}
              onClick={() => setActive(day)}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="workout-content"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            <div className="workout-header">
              <h3>
                {active} <span>— {current.focus}</span>
              </h3>
              <span className={`difficulty ${current.difficulty}`}>{current.difficulty}</span>
            </div>

            <div className="exercise-grid">
              {current.exercises.map((ex, i) => (
                <motion.div
                  key={ex.name}
                  className="exercise-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <h4>{ex.name}</h4>
                  <p>Target: {current.focus}</p>
                  <span className="sets">{ex.sets}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
