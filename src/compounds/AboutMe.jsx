import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-start">
      {/* ✅ Main Wrapper */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10 p-6">

        {/* ✅ Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="5204ecd6-8127-442f-8f57-31f91ca59a29.jpg"
            alt="Prakash K"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full border-2 border-gray-600 object-cover border-dashed p-2"
          />
        </div>

        {/* ✅ Content Section */}
        <div className="w-full md:w-2/3 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>

          <p className="text-gray-600 mt-3 text-lg leading-relaxed">
            Hi, I'm <span className="text-blue-500 font-semibold">Prakash K</span>, 
            a passionate <strong>Full Stack Developer</strong> specializing in 
            crafting stunning, user-friendly, and efficient web experiences.
          </p>

          {/* ✅ Skills */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-gray-700">Skills & Expertise</h3>

            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Frontend Development (React, Tailwind CSS)</li>
              <li>Backend Development (Node.js, Express.js, MySQL, MongoDB)</li>
              <li>Responsive Web Design & UI/UX Implementation</li>
            </ul>
          </div>

          {/* ✅ Button */}
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg">
            Download CV
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
