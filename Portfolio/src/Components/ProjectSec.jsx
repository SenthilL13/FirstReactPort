import React from "react";
import ProjectCardSec from "./ProjectCardSec";

export const ProjectSec = () => {
  return (
    <div className="p-10 md:p-24 text-white shadow-xl">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCardSec
          title="My Cord"
          main="My Cord project includes links to my social media profiles."
          imgSrc="/assets/cord.png"
          demoLink="https://senthilcord.netlify.app/"
          sourceCodeLink="https://github.com/SenthilL13/Ractsenthilcord"
        />
        <ProjectCardSec
          title="First Portfolio"
          main="My first portfolio showcases my skills, projects, and contact information, along with details about myself."
          imgSrc="/assets/portfolio.png"
          demoLink="https://senthil-port.netlify.app/"
          sourceCodeLink="https://github.com/SenthilL13/portfolio"
        />
        <ProjectCardSec
          title="Student Portal"
          main="This Django Student Dashboard project is a study portal with eight sections: Notes, Homework, To-Do, YouTube, Wikipedia, Dictionary, Book, and Conversion."
          imgSrc="/assets/portal.png"
          sourceCodeLink="https://github.com/SenthilL13/Student-Study-Portal"
        />
        <ProjectCardSec
          title="Student Database"
          main="A database management system using Python Flask to create, insert, update, delete, and fetch records."
          imgSrc="/assets/studdatabase.png"
          sourceCodeLink="https://github.com/SenthilL13/student-database-management-master"
        />
        <ProjectCardSec
          title="Hate Speech Prediction"
          main="Detects whether a text or image contains hate speech or incites violence."
          imgSrc="/assets/headspch.png"
          sourceCodeLink="https://github.com/SenthilL13/HATE_SPEECH_PREDICTION"
        />
        <ProjectCardSec
          title="Road Vehicle Analysis"
          main="Vehicle detection and classification for traffic surveillance, estimating speed, color, and type."
          imgSrc="/assets/VehicleAnl.png"
          sourceCodeLink="https://github.com/SenthilL13/Road_Vehicle_analysis"
        />
        <ProjectCardSec
          title="Billing System"
          main="Create invoices and manage billing with item addition, GST calculation, filtering, exporting to Excel, and more."
          imgSrc="/assets/billing.png"
          demoLink="https://billssystem.netlify.app/"
          sourceCodeLink="https://github.com/SenthilL13/Billingsystem"
        />
        <ProjectCardSec
          title="Online Food Order"
          main="An online food ordering system allowing users to browse, order, and track meals, with an admin panel for restaurants."
          imgSrc="/assets/foodorder.png"
          sourceCodeLink="https://github.com/SenthilL13/online_food_order"
        />
      </div>
    </div>
  );
};

export default ProjectSec;
