import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Youtube, Map } from "lucide-react";
import SectionTitle from "./SectionTitle";
import GlowButton from "./GlowButton";

const info = [
  {
    icon: MapPin,
    title: "Visit Us",
    text: "123 Fitness Lane, Near City Center, Your City, India - 400001",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "+91 98765 43210",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    text: "Mon - Sat: 5:00 AM - 11:00 PM | Sunday: 7:00 AM - 9:00 PM",
  },
  {
    icon: Mail,
    title: "Email",
    text: "info@aarambhgym.in",
  },
];

const socials = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", plan: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Aarambh Gym team will contact you soon. 💪");
    setForm({ name: "", phone: "", plan: "", message: "" });
  };

  return (
    <footer className="section section-alt" id="contact">
      <div className="container">
        <SectionTitle
          tag="Get In Touch"
          title="Your Transformation Starts Here"
          subtitle="Ab waqt hai apne sapno ko haqiqat banane ka. Fill the form, visit us, or call now — your new beginning is just one step away."
        />

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>
              Join Now & <span className="red-gradient-text">Begin Your Aarambh</span>
            </h2>
            <p>
              Aaj se shuru karo, kal ko mat chhodo. Hamari team aapki fitness journey mein har kadam par saath degi.
            </p>

            <div className="info-cards">
              {info.map((item, i) => (
                <div className="info-card" key={i}>
                  <div className="icon">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              {socials.map((s, i) => (
                <a href={s.href} key={i} aria-label="social">
                  <s.icon size={20} />
                </a>
              ))}
            </div>

            <div className="map-placeholder">
              <Map size={32} />
              <span>Google Map Location</span>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Interested Plan</label>
              <select name="plan" value={form.plan} onChange={handleChange} required>
                <option value="">Select a plan</option>
                <option value="basic">Basic — ₹999/month</option>
                <option value="standard">Standard — ₹1,999/month</option>
                <option value="premium">Premium — ₹3,499/month</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your fitness goal..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <GlowButton variant="primary" type="submit" style={{ width: "100%" }}>
              Join Now & Begin Your Aarambh
            </GlowButton>
          </motion.form>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Aarambh Gym. All rights reserved. Built with passion for Indian fitness.
        </div>
      </div>
    </footer>
  );
}
