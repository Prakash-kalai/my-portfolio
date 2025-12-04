import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import { Element } from 'react-scroll';
export default function Contact() {
  return (
    <Element name="contact" className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-6 py-10">
      
      {/* BLUE GLOW BACKGROUND */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600 blur-[180px] opacity-30 top-10 left-10"></div>
      <div className="absolute w-[450px] h-[450px] bg-blue-500 blur-[150px] opacity-20 bottom-20 right-20"></div>

      {/* CONTACT WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* LEFT SECTION */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-wider">Get in Touch</h1>
          <p className="opacity-70 text-sm leading-relaxed">
            Feel free to reach out for collaborations, freelance work, or any questions.
          </p>

          {/* CONTACT INFO CARDS */}
          <div className="bg-[#0b0b0e] p-5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-blue-400" />
              <p className="opacity-80">youremail@gmail.com</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-blue-400" />
              <p className="opacity-80">+91 9876543210</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <p className="opacity-80">Your City, India</p>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 mt-4">
            <a className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition">LinkedIn</a>
            <a className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition">Instagram</a>
            <a className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition">GitHub</a>
          </div>
        </div>

        {/* RIGHT SECTION — CONTACT FORM */}
        <div className="bg-[#0b0b0e] p-6 rounded-2xl border border-white/10 shadow-lg backdrop-blur">
          <form className="space-y-4">
            <div>
              <label className="text-sm opacity-80">Your Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="text-sm opacity-80">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="text-sm opacity-80">Message</label>
              <textarea
                className="w-full mt-1 p-3 bg-black/40 border border-white/10 rounded-xl min-h-[120px] focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>

            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </motion.div>
    </Element>
  );
}
