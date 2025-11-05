import { TiSocialLinkedin } from "react-icons/ti";
import { FaXTwitter, FaGithub, FaFacebook } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="max-w-7xl w-full flex justify-center items-start gap-10 p-6">

        <div className="w-[25%] h-[70%] bg-white shadow-lg text-gray-800 flex flex-col items-center p-6 rounded-2xl">
          <img
            src="public/5204ecd6-8127-442f-8f57-31f91ca59a29.jpg"
            alt="Prakash K"
            className="w-32 h-32 rounded-full border-2 border-gray-600 object-cover border-dashed p-2"
          />

          <h2 className="mt-4 text-2xl font-bold">Prakash K</h2>
          <p className="text-gray-600">Full Stack Developer</p>

          
          <div className="flex mt-4 space-x-3">
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer text-xl border rounded p-2">
              <FaFacebook />
            </p>
            <p className="text-gray-600 hover:text-gray-800 cursor-pointer text-xl border rounded p-2">
              <a href="https://github.com/Prakash-kalai">
                <FaGithub />
              </a>
            </p>
            <p className="text-gray-600 hover:text-blue-400 cursor-pointer text-xl border rounded p-2">
              <FaXTwitter />
            </p>
            <p className="text-gray-600 hover:text-blue-700 cursor-pointer text-xl border rounded p-2">
              <TiSocialLinkedin />
            </p>
          </div>
        </div>
        
        <div className="w-[55%] flex flex-col gap-6">

          
          <div className="bg-white shadow-lg flex flex-col gap-3 p-6 rounded-2xl">
            <h1 className="text-xl font-semibold text-gray-700">Hello There!</h1>

            <h1 className="text-2xl  leading-snug text-gray-900">
              <span>Hello!
I'm <span className="text-blue-500">PRAKASH K</span> a dedicated Full Stack Developer specializing in building responsive UIs, scalable APIs, secure backends, and optimized databases.
My goal is to create meaningful digital experiences that solve real-world problems.</span>              
            </h1>

            
            <div className="flex gap-4 mt-4">
              <button className="w-40 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg">
                <a 
  href="public/resume (4).pdf" 
  target="_blank" 
  download="Prakash-K-Resume.pdf"
>
  View Resume
</a>
              </button>

              <Link
                to="/projects"
                className="w-40 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg text-center"
              >
                See my work
              </Link>
            </div>
          </div>

          
          <div className="w-full bg-white shadow-lg p-6 rounded-2xl text-center">
            <Marquee speed={80} gradient={false}>
              <span className="text-xl font-bold text-blue-500">
                Hi! Welcome to my portfolio — Keep Scrolling! 
              </span>
            </Marquee>
          </div>

        </div>
      </div>
    </div>
  );
}
