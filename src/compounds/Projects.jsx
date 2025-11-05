import React, { useState } from "react";

const sampleProjects = [
  {
    id: 1,
    title: "Todo-List",
    description: "Simple and clean todo app with CRUD operations and local storage.",
    tags: ["React", "Tailwind", "CRUD"],
    image: "/Screenshot 2025-11-03 173630.png",
    link: "https://todo-list-self-seven-56.vercel.app",
    github: "https://github.com/Prakash-kalai/todo_list",
  },
    
  {
    id: 2,
    title: "Quiz-Spark",
    description: "Interactive quiz platform with score tracking and responsive UI.",
    tags: ["React", "Tailwind", "JavaScript"],
    image: "/Screenshot 2025-10-12 233913.png",
    link: "https://quiz-spark-theta.vercel.app",
    github: "https://github.com/Prakash-kalai/Quiz_Spark",
  },
  {
    id: 3,
    title: "Group-Chat",
    description: "Realtime group chat app using Socket.IO with smooth UI.",
    tags: ["React", "Socket.IO", "Node.js"],
    image: "/Screenshot 2025-10-18 180932.png",
    link: "https://group-chat-teal.vercel.app",
    github: "https://github.com/Prakash-kalai/group-chat",
  },
];

function ProjectCard({ p, onOpen }) {
  return (
    <div className="overflow-hidden border rounded-xl p-4 hover:shadow-lg transition bg-white">
      
      {/* Project Image */}
      <div className="h-40 w-full rounded-md overflow-hidden bg-gray-100">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h3 className="font-semibold mt-3">{p.title}</h3>

      {/* Description */}
      <p className="text-sm mt-2 text-gray-600">{p.description}</p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-100 rounded px-2 py-1 text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>

      {/* View Button */}
      <button
        onClick={() => onOpen(p)}
        className="mt-4 text-sm px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition"
      >
        View
      </button>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full min-h-screen flex justify-center items-start p-4">
      
      {/* ✅ Scrollable Grid Container */}
      <div
        className="
          max-w-7xl 
          w-full 
          grid 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-6 p-6 
          overflow-y-auto
        "
        style={{ maxHeight: "500px" }}  // ✅ Auto scroll height
      >
        {sampleProjects.map((p) => (
          <ProjectCard key={p.id} p={p} onOpen={setOpen} />
        ))}
      </div>

      {/* ✅ Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-xl">
            
            {/* Modal Header */}
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-gray-800">{open.title}</h3>
              <button
                onClick={() => setOpen(null)}
                className="text-sm text-gray-600 hover:text-black"
              >
                Close
              </button>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-700">{open.description}</p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {open.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-200 text-gray-700 rounded px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex gap-4">
              <a
                className="px-4 py-2 rounded border hover:bg-gray-100 transition text-gray-800"
                href={open.link}
                target="_blank"
              >
                Live Demo
              </a>

              <a
                className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white transition"
                href={open.github}
                target="_blank"
              >
                Github Code
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
