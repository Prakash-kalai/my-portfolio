import React from "react";
import {motion} from "framer-motion"
const Empty=()=>{
  const fadeUp = {
    hidden: { opacity: 0, y: 40, fontSize: "30px" },
    visible: { opacity: 1, y: 0, fontSize: "60px" },
  };
    return(
        <div className="relative w-full h-screen bg-black overflow-hidden flex justify-center items-center text-3xl">

  {/* BLUR SHAPE 1 */}
  <div className="absolute w-[400px] h-[400px] bg-[#2F67FF] rounded-full blur-[160px] opacity-40 top-20 left-10"></div>

  {/* BLUR SHAPE 2 */}
  <div className="absolute w-[350px] h-[350px] bg-[#69B7FF] rounded-full blur-[150px] opacity-30 bottom-10 right-20"></div>

  {/* BLUR SHAPE 3 */}
  <div className="absolute w-[300px] h-[300px] bg-[#0A2AFF] rounded-full blur-[200px] opacity-20 top-40 right-40"></div>
  <div className="z-10 flex flex-col justify-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay:0.1 }}
            className="text-5xl font-extrabold leading-tight text-white">
            SOCIAL MEDIA
          </motion.h1>
        </div>

</div>

    )
}
export default Empty;