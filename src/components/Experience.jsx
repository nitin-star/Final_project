import React from "react";

import cplusplus from "../assets/cplusplus.png";
import python from "../assets/python.png";
import matlab from "../assets/matlab.png";
import numpy from "../assets/numpy.png";
import opencv from "../assets/opencv.png";
import scikit from "../assets/scikit.png";
import github from "../assets/github.png";
import arduino from "../assets/arduino.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: cplusplus,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: matlab,
      title: "Matlab",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: numpy,
      title: "Numpy",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: opencv,
      title: "OpenCV",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: scikit,
      title: "Scikit-learn",
      style: "shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: arduino,
      title: "Arduino",
      style: "shadow-blue-300",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
