import React from "react";
import ProjectCardSec from "./ProjectCardSec";

export const ProjectSec = () => {
  return (
    <div className="p-10 md:p-24 text-white shadow-xl ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Project</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCardSec
          title="My Cord"
          main="My Cord project includes links to my social media profiles"
          imgSrc="/assets/cord.png"
          demoLink="https://senthilcord.netlify.app/"
          sourceCodeLink="https://github.com/SenthilL13/Ractsenthilcord"
        />
        <ProjectCardSec
          title="First Portfolio"
          main="My first portfolio showcases my skills, projects, and contact information, along with details about myself"
          imgSrc="/assets/portfolio.png"
          demoLink="https://senthil-port.netlify.app/"
          sourceCodeLink="https://github.com/SenthilL13/portfolio"
        />
        <ProjectCardSec
          title="Student Portal"
          main="This Django Student Dashboard project is a study portal with eight sections: Notes, Homework, ToDo, YouTube, Wikipedia, Dictionary, Book, and Conversion."
          imgSrc="/assets/portal.png"
          // demoLink="https://password-genarator-react.vercel.app/"
          sourceCodeLink="https://github.com/SenthilL13/Student-Stdy-Portel"
        />
        <ProjectCardSec
          title="Student database"
          main="A database management system using Python Flask to create, insert, update, delete, and fetch records"
          imgSrc="/assets/studdatabase.png"
          // demoLink="https://react-website-orcin-eight.vercel.app/"
          sourceCodeLink="https://github.com/SenthilL13/student-database-management-master"
        />
        <ProjectCardSec
          title="Hate Speech Prediction"
          main="identifying whether text image contains hate or incites violence toward"
          imgSrc="/assets/headspch.png"
          // demoLink="https://gourabofficial.github.io/Tic-Tac-Toe-Game/"
          sourceCodeLink="https://github.com/SenthilL13/HATE_SPEECH_PREDICTION"
        />
        <ProjectCardSec
          title="Road Vehicle analysis"
          main="Vehicle detection and classification are vital for traffic surveillance and safety, enabling speed, color, and type estimation"
          imgSrc="/assets/VehicleAnl.png"
          // demoLink="https://gourabofficial.github.io/Tic-Tac-Toe-Game/"
          sourceCodeLink="https://github.com/SenthilL13/Road_Vehicle_analysis"
        />
         <ProjectCardSec
          title="Billing System"
          main="Create a new invoice bill and integrate it into the dashboard screen, allowing users to filter by date to extract the data into an Excel file. The bill should include features such as adding items, calculating totals, applying GST, updating, deleting, and more options for better management."
          imgSrc="https://ibb.co/Nd2kp92S"
          demoLink="https://billssystem.netlify.app/"
          sourceCodeLink="https://github.com/SenthilL13/Billingsystem"
        />
      </div>
    </div>
  );
};

export default ProjectSec;
