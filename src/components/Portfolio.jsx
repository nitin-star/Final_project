import React from "react";
import project1 from "../assets/project1.png"; // Replace with actual image paths
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      title: "Cross Connection PUF",
      description: "Achieved a remarkable accuracy of 98.27% with a runtime of 27.44 sec for 10000 challenge-response pairs.",
      link: "https://github.com/iamcentered/CS_771-assignments"
    },
    {
      id: 2,
      src: project2,
      title: "Computer Vision Library",
      description: "Successfully created a robust library with 15+ functions for efficient performance and high-quality output.",
      link: "https://github.com/iamcentered/computer_vision.git"
    },
    {
      id: 3,
      src: project3,
      title: "Intro to Information Security",
      description: "Successfully exploited multiple security vulnerabilities, enhancing understanding of cybersecurity principles.",
      link: "https://github.com/iamcentered/Infosec"
    },
    {
      id: 4,
      src: project4,
      title: "Hand Gesture-Controlled Car Development",
      description: "Successfully controlled the car using hand gestures with high accuracy and responsiveness.",
      link: "https://github.com/iamcentered/Hand_gestured_car/tree/main"
    },
    {
      id: 5,
      src: project5,
      title: "CodeCraft: Mastering DSA and WebDev",
      description: "Successfully deployed a functional web application, demonstrating strong frontend skills and DSA knowledge.",
    },
    {
      id: 6,
      src: project6,
      title: "Handwriting Digit Recognition Web Application",
      description: "Successfully developed a web application that accurately predicts the drawn digit with real-time responsiveness.",
      link: "https://github.com/iamcentered/Handwriting_Digit_Recognition"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, description, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-400">{description}</p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
