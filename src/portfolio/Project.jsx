import React from "react";
import { motion } from "framer-motion";
import { Element } from 'react-scroll';
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Todo-List",
      desc: "A simple and efficient task management app with add, edit, delete and local storage support.",
      img: "public/Screenshot 2025-11-03 173630.png",
    },
    {
      id: 2,
      title: "Group-Chat",
      desc: "A real-time group chat application built using React, Node.js, and MongoDB with instant messaging.",
      img: "public/Screenshot 2025-10-18 180932.png",
    },
    {
      id: 3,
      title: "Quiz-Spark",
      desc: "An interactive quiz platform featuring timed questions, instant scoring, and smooth UI animations.",
      img: "public/Screenshot 2025-10-12 233913.png",
    },
  ];
  

  return (
    <Element name="projects" className="relative w-full min-h-screen bg-black text-white px-6 py-16 overflow-hidden">

      {/* GLOW BACKGROUND SHAPES */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600 blur-[180px] opacity-30 top-0 left-0"></div>
      <div className="absolute w-[450px] h-[450px] bg-blue-500 blur-[160px] opacity-20 bottom-10 right-10"></div>

      {/* PAGE TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold tracking-wide text-center mb-12 z-10 relative"
      >
        Projects<span className="text-blue-400">.</span>
      </motion.h1>

      {/* PROJECT GRID */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
             className="border border-gray-400 rounded-xl p-6 bg-white/5 backdrop-blur-2xl w-[300px] shadow-md"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover opacity-90"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold tracking-wide">
                {project.title}
              </h3>
              <p className="opacity-70 text-sm mt-2">{project.desc}</p>

              <button className="mt-4 bg-blue-600 hover:bg-blue-700 py-2 px-5 rounded-xl text-sm font-medium">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </Element>
  );
}
