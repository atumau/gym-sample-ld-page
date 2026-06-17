import ScrollProgress from "./components/ScrollProgress";
import FloatingParticles from "./components/FloatingParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyJoin from "./components/WhyJoin";
import WorkoutPlan from "./components/WorkoutPlan";
import BodyPartGuide from "./components/BodyPartGuide";
import DietPlans from "./components/DietPlans";
import Transformations from "./components/Transformations";
import Membership from "./components/Membership";
import Contact from "./components/Contact";

import "./styles/global.css";
import "./styles/components.css";
import "./styles/sections.css";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <FloatingParticles />
      <Navbar />
      <main>
        <Hero />
        <WhyJoin />
        <WorkoutPlan />
        <BodyPartGuide />
        <DietPlans />
        <Transformations />
        <Membership />
        <Contact />
      </main>
    </>
  );
}
