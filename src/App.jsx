import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Routeing from "./Routers/Routeing";
import "./App.css";
import { Toaster, toast } from "react-hot-toast";


const App = () => {
  const [clicked, setClicked] = useState(false);
  const li = ["Home", "About Me", "Skills", "Education", "Projects", "Contacts"];
  const [show, setShow] = useState(0);

  const handleClick = () => {
    if (!clicked) {
      toast.success("Message sent successfully!\n Thanks for opportunity");
      setClicked(true);
    }
  };

  return (
    <BrowserRouter>
      <div className="w-full min-h-screen  p-4 relative">

        
        <div className="w-full max-w-[1200px] sticky top-0 flex justify-between items-center p-4 bg-white shadow rounded-xl mx-auto z-50">
          <h2 className="text-2xl font-bold text-gray-800 select-none">Prakash K</h2>

          
          <ul className="flex items-center gap-6">
            {li.map((item, index) => {
              const path = index === 0 ? "/" : `/${item.toLowerCase().replace(" ", "")}`;
              return (
                <li key={index}>
                  <Link
                    to={path}
                    onClick={() => setShow(index)}
                    className={`p-2 font-bold rounded-xl select-none ${
                      show === index ? "bg-green-500 text-white" : ""
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            className={`bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg select-none ${clicked ? "cursor-not-allowed" : ""}`}
            onClick={handleClick}
            disabled={clicked}
          >
            Hire Me
          </button>
        </div>

        
        <div className="w-full max-w-[1200px]  mx-auto mt-3 p-4 bg-white shadow rounded-xl ">
          <Routeing />
        </div>

        <Toaster />

        
        
      </div>
    </BrowserRouter>
  );
};

export default App;
