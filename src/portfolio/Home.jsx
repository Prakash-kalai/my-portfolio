import React from "react";
import { motion } from "framer-motion";
import { Link,Element } from 'react-scroll';

// This layout recreates the section-based grid style shown in the screenshot.
// Replace images, colors, and gradient shapes as needed.

export default function Home() {
  const [selected, setSelected] = React.useState(0); 
  const fadeUp = {
    hidden: { opacity: 0, y: 40, fontSize: "30px" },
    visible: { opacity: 1, y: 0, fontSize: "60px" },
  };

  const nav=["Home","About","Projects","Contact"]

  return (
    <Element name="home" className="min-h-screen w-full bg-black text-white px-6 py-10">
      <nav className="w-full fixed top-0 left-0 px-10 py-5  text-white shadow-lg z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
  <motion.h1
  className="text-2xl font-bold"
>
  Portfolio
</motion.h1>


    <ul className="hidden md:flex gap-8 text-lg">
            {nav.map((item, index)=>(
              <Link 
              key={index} 
              className={`cursor-pointer bg-white/10 p-2 border border-gray-700  rounded-xl hover:bg-white/20 transition ${selected===index?"bg-white/20":""}`} 
              to={item.toLowerCase()} 
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              onClick={()=>setSelected(index)}
              >
                {item}
              </Link>
            ))}
    </ul>
  </div>
</nav>

      
      <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
{/* Soft Blue Glow Background */}
<div className="absolute w-[500px] h-[500px] bg-blue-500/30 blur-[180px] rounded-full -right-20 -top-10" />
<div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full -left-10 -bottom-10" />


{/* Title */}
<motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay:0.1 }}
  className="text-5xl font-extrabold leading-tight text-white"
>
  Portfolio
</motion.h1>
</div>


    </Element>
  );
}
