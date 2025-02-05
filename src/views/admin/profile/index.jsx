import React, { useState } from "react";
import {
  Certifications,
  Education,
  Position,
  Projects,
  Skill,
  WorkExperience,
} from "./components/export";

const Card = () => {
  const [selectedSection, setSelectedSection] = useState("Education");

  const renderSelectedSection = () => {
    switch (selectedSection) {
      case "Education":
        return (
          <Education
            title={"Add Education detail"}
            description={"Your school / college details"}
          />
        );
      case "Projects":
        return (
          <Projects
            title={"Add project details"}
            description={"Projects that you have worked on before"}
          />
        );
      case "Position":
        return (
          <Position
            title={"Add Position of Responsibility"}
            description={
              "Add any PORs like college clubs, social service, community head, fest organized, etc."
            }
          />
        );
      case "Work Experience":
        return (
          <WorkExperience
            title={"Add work Experience"}
            description={"Your previous internship / full time experiences"}
          />
        );
      case "Skill":
        return (
          <Skill
            title={"Add Skill/ Extracurricular Activity"}
            description={
              "Add your Skill of Hackathons, NGO services, Exam ranks, Clubs, etc."
            }
          />
        );
      case "Certifications":
        return (
          <Certifications
            title={"Add Certificate/Course Details"}
            description={"All Certifications/Courses you have done"}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="m-4">
        collab section Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quod placeat quam cupiditate quos omnis eveniet sit soluta voluptatum,
        magnam adipisci necessitatibus aperiam non alias, pariatur odio harum
        provident blanditiis nostrum excepturi autem, vero tempora saepe.
        Debitis natus consectetur tempora, at dolorum temporibus amet nulla
        ipsam. Atque quaerat illum numquam unde, explicabo necessitatibus
        possimus quia beatae ex totam doloremque dolorem quam esse ipsa
        molestias fugiat, ad neque sit?
      </div>
      <div className=" mx-auto mt-10 overflow-hidden rounded-lg bg-white shadow-md">
        <div className="bg-gray-200 p-6">
          <div className=" justify-end">
            {/* Header and buttons */}
            <div className="flex items-center ">
              <div className="text-black mr-4 mt-4 h-32 w-32 overflow-hidden rounded-full bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold">
                  {
                    JSON.parse(localStorage.getItem("userData"))?.data?.User
                      ?.fullName
                  }
                </h2>
                <p className="text-sm">
                  {
                    JSON.parse(localStorage.getItem("userData"))?.data?.User
                      ?.collegeName
                  }
                </p>
                <p className="text-sm">
                  {
                    JSON.parse(localStorage.getItem("userData"))?.data?.User
                      ?.role
                  }
                </p>
              </div>
            </div>
            <div className=" flex justify-end">
              <button className="mx-2 rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 px-6 py-4">
          {/* Section buttons */}
          <div className="mb-4 flex justify-between">
            <button
              onClick={() => setSelectedSection("Education")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Education
            </button>
            <button
              onClick={() => setSelectedSection("Skill")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Skill
            </button>
            <button
              onClick={() => setSelectedSection("Projects")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Projects
            </button>
            <button
              onClick={() => setSelectedSection("Position")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Position
            </button>
            <button
              onClick={() => setSelectedSection("Work Experience")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Work Experience
            </button>

            <button
              onClick={() => setSelectedSection("Certifications")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Certifications
            </button>
          </div>

          {/* Render selected section */}
        </div>
        {renderSelectedSection()}
      </div>
    </>
  );
};

export default Card;
