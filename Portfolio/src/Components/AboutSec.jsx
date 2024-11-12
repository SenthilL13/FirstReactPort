import React from "react";

export const AboutSec = () => {
  return (
    <div
      id="About"
      className="flex flex-col md:flex-row items-center md:items-start md:justify-between
      p-10 md:p-20 bg-black text-white rounded-lg shadow-xl bg-opacity-30 fade-in-animation "
    >
      <div className="flex flex-col items-center md:items-start md:pr-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-11 text-center">
          About Me
        </h2>

        <img
          className="md:h-64 md:w-80  rounded-lg shadow-md mb-8 hover:scale-105 transition 
      duration-300 ease-in-out "
          src="/assets/about.jpg"
          alt="About"
        />
        <p className="text-md font-bold md:text-lg leading-snug text-center">
          I’m a BE student in Computer Science and Engineering, passionate about
          self-motivation and programming.
        </p>
      </div>

      <div className="mt-8 md:mt-0 md:pl-10 flex flex-col space-y-8  ">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-orange-500 mb-2">
            Web Developer
          </h3>
          <p className="text-sm md:text-md font-extrabold leading-tight shadow-xl">
            I am a web developer with skills in both frontend and backend
            technologies, with a foundational understanding of backend
            development. Proficient in Java, Python django, React.js, HTML,
            Bootstrap CSS, and JavaScript, I enjoy crafting responsive, dynamic
            websites. From building seamless user interfaces to exploring
            backend integration, I bring projects to life with a focus on modern
            web technologies and a clean, user-centric design approach.
          </p>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-orange-500 mb-2 ">
          Proficiency in Programming Languages
        </h3>
        <p className="text-sm md:text-md font-extrabold leading-tight shadow-xl">
          Proficient in multiple programming languages including C, JavaScript,
          and a good foundation of Core Java and Python. Strong expertise in
          algorithm design, data structures, and complex problem-solving. Focus
          on writing clean, optimized code for software development, project
          creation, and competitive programming.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-orange-500 mb-2">
          Self-Motivated
        </h3>
        <p className="text-sm md:text-md font-extrabold leading-tight shadow-xl">
          I’m driven by my own inner fire, constantly seeking to grow and
          evolve. Every challenge I face is an opportunity to learn and become
          stronger. I believe in the power of perseverance and the importance of
          maintaining a positive mindset. My dedication to self-improvement
          keeps me focused, energized, and inspired to achieve my goals. No
          matter the obstacles, I trust in my abilities and am committed to
          making progress every day. I am my own greatest motivator, and I
          strive to bring my best self to everything I do.
        </p>
      </div>
    </div>
  );
};

export default AboutSec;
