import React from "react";
import {
  FaCss3,
  FaBootstrap,
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase, // SQL icon
} from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiDjango, SiPowerbi } from "react-icons/si";

const SkillsSec = () => {
  return (
    <div
      id="Skills"
      className="p-10 md:p-24 shadow-xl bg-opacity-30 fade-in-animation slide-in"
      // style={{ marginTop: "-80px" }} // Adjusts the top margin instead of position
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold text-left">
        Skills
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
              <FaHtml5 color="#E34F26" size={50} />
            </span>
            <p className="text-white mt-2">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
              <FaCss3 color="#1572B6" size={50} />
            </span>
            <p className="text-white mt-2">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
              <FaBootstrap color="#7952B3" size={50} />
            </span>
            <p className="text-white mt-2">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
              <FaJs color="#F7DF1E" size={50} />
            </span>
            <p className="text-white mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
              <FaDatabase color="#00758F" size={50} />{" "}
              {/* Replace with your preferred SQL icon */}
            </span>
            <p className="text-white mt-2">SQL</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
              <DiJava color="#007396" size={50} />
            </span>
            <p className="text-white mt-2">Java</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
              <FaPython color="#3776AB" size={50} />
            </span>
            <p className="text-white mt-2">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
              <SiDjango color="#092E20" size={50} />
            </span>
            <p className="text-white mt-2">Django</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
              <FaReact color="#61DAFB" size={50} />
            </span>
            <p className="text-white mt-2">React.js</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
              <SiPowerbi color="#F2C811" size={50} />
            </span>
            <p className="text-white mt-2">Power BI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSec;
