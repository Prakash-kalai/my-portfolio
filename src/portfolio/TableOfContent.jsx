import React from "react";

export default function TableOfContent() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center px-10">
      
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* BLUE GLOW */}
        <div className="absolute w-[400px] h-[400px] bg-blue-600 blur-[160px] opacity-40 rounded-full left-0 top-10"></div>
        
        {/* LEFT SIDE TEXT */}
        <div className="z-10 flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold leading-tight">
            TABLE <br /> OF <br /> CONTENT
          </h1>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="z-10 flex flex-col justify-center gap-6">

          {/* CARD 1 */}
          <div className="border border-gray-500 rounded-xl p-6 bg-white/5 backdrop-blur-md w-[280px]">
            <p className="text-sm opacity-80 mb-1">SOCIAL MEDIA</p>
            <h2 className="text-4xl font-bold">01</h2>
          </div>

          {/* CARD 2 */}
          <div className="border border-gray-500 rounded-xl p-6 bg-white/5 backdrop-blur-md w-[280px]">
            <p className="text-sm opacity-80 mb-1">POSTER & BANNER</p>
            <h2 className="text-4xl font-bold">02</h2>
          </div>

          {/* CARD 3 */}
          <div className="border border-gray-500 rounded-xl p-6 bg-white/5 backdrop-blur-md w-[280px]">
            <p className="text-sm opacity-80 mb-1">MOTION GRAPHIC</p>
            <h2 className="text-4xl font-bold">03</h2>
          </div>

        </div>
      </div>
    </div>
  );
}
