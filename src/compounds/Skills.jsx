import React from "react";

const skillsData = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Redux Toolkit",
  ],

  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
  ],

  database: [
    "MongoDB",
    "MySQL",
    
  ],

  programming: [
    "JavaScript",
    "Python",
        
  ],
};

export default function Skills() {
  return (
    <div className="w-full  flex justify-center p-6 overflow-auto">
      <div className="max-w-6xl w-full">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          My Skill Set
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600">Frontend</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              {skillsData.frontend.map((skill, i) => (
                <li key={i} className="bg-gray-100 px-3 py-2 rounded-md">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-600">Backend</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              {skillsData.backend.map((skill, i) => (
                <li key={i} className="bg-gray-100 px-3 py-2 rounded-md">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-600">Database</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              {skillsData.database.map((skill, i) => (
                <li key={i} className="bg-gray-100 px-3 py-2 rounded-md">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-orange-600">
              Programming Languages
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              {skillsData.programming.map((skill, i) => (
                <li key={i} className="bg-gray-100 px-3 py-2 rounded-md">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
