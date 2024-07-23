import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, I'm Khush Gupta, a 3rd-year undergraduate student at IIT Kanpur, majoring in Aerospace Engineering. 
          I have a strong interest in programming, cybersecurity, and machine learning. 
        </p>

        <br />

        <p className="text-xl">
          I have achieved a CPI of 8.3/10 and secured an All India Rank of 7589 in JEE Advanced 2022. 
          I have participated in various projects, including developing a gesture-controlled car and a handwriting digit recognition web application.
        </p>

        <br />

        <p className="text-xl">
          I have strong technical skills in programming languages like C++, Python, and libraries such as TensorFlow and OpenCV. 
          My projects include creating a robust library for image processing and performing security vulnerability analysis.
        </p>
      </div>
    </div>
  );
};

export default About;
