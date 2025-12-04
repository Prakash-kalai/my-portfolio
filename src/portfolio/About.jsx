import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { Element } from 'react-scroll';
export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Redux Toolkit",
  ];

  const backend = ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"];

  return (
    <Element name="about" className="w-full min-h-screen bg-black text-white px-10 py-10 flex justify-center items-center overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* ---------------- LEFT SIDE ---------------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col justify-center"
        >
          {/* Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute w-[350px] h-[350px] bg-blue-600 blur-[140px] rounded-full -top-10 -left-10"
          />

          {/* Image */}
          <motion.img
            src="https://via.placeholder.com/350x400"
            alt="profile"
            className="rounded-2xl relative z-10 shadow-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          />

          {/* Hello text */}
          <motion.p
            className="text-lg mt-5 opacity-80"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hello, I am
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl font-bold tracking-wide mt-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Praksah k
          </motion.h1>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 mt-6 text-xl"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delay: 0.5 },
              },
            }}
          >
            {[FaLinkedin, FaGithub, FaEnvelope, FaInstagram].map(
              (Icon, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.2 }}
                  className="cursor-pointer"
                >
                  <Icon className="hover:text-blue-400 transition" />
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <div className="space-y-12">

          {/* ABOUT SECTION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-2">About Me</h2>
            <motion.p className="opacity-80 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
            >
              Hello! I'm PRAKASH K a dedicated Full Stack Developer specializing
              in building responsive UIs, scalable APIs, secure backends, and
              optimized databases. My goal is to create meaningful digital
              experiences that solve real-world problems.
            </motion.p>
          </motion.div>

          {/* EDUCATION SECTION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-3">Education</h2>

            <div className="space-y-4">
              {/* PG */}
              <div>
                <p className="font-semibold text-lg">Post Graduate</p>
                <p className="opacity-80">Karpagam Academy of Higher Education</p>
                <p className="opacity-60 text-sm">
                  Master of Computer Application (2024–2026)
                </p>
              </div>

              {/* UG */}
              <div>
                <p className="font-semibold text-lg">Under Graduate</p>
                <p className="opacity-80">
                  A Veeraiya Vandaiyar Memorial Sri Pushpam College
                </p>
                <p className="opacity-60 text-sm">
                  Bachelor of Computer Application (2021–2024)
                </p>
              </div>
            </div>
          </motion.div>

          {/* SKILLS SECTION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-3">Skills</h2>

            <motion.div className="flex gap-3 text-sm flex-wrap">
              {[...skills, ...backend].map((skill, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
                  
                  className="bg-gray-800 px-3 py-1 rounded-lg"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </Element>
  );
}
