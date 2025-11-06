import React from "react";

const Education = () => {
  const education = [
    {
      year: "2024-2026",
      institution: "Karpagam Academy of Higher Education",
      degree: "Master of Computer Application",
    },
    {
      year: "2021-2024",
      institution: "A Veeraiya Vandaiyar Memorial Sri Pushpam College",
      degree: "Bachelor of Computer Application",
    },
    {
      year: "2020-2021",
      institution: "Government Boys Higher Secondary School Orathanadu",
      degree: "HSC",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center  p-6 rounded-2xl ">
      <div className="max-w-5xl flex flex-wrap justify-center gap-10">
        {education.map((e, index) => (
          <div
            key={index}
            className="relative flex items-center bg-white shadow-lg p-5 rounded-2xl w-[400px] h-[140px] border-green-600 border-1"
          >            
            <div className="w-20 h-20 flex-shrink-0 mr-4">
              <img
                src="5204ecd6-8127-442f-8f57-31f91ca59a29.jpg"
                alt="Prakash K"
                className="w-full h-full rounded-full border-2 border-gray-600 object-cover border-dashed p-2"
              />
            </div>
            
            <div>
              <h1 className="text-lg font-semibold text-gray-800">{e.institution}</h1>
              <p className="text-sm text-gray-600">{e.degree}</p>
              <span className="text-xs text-gray-500">{e.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
