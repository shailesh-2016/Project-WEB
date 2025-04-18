// src/components/CourseDetail.js
import React from "react";
import CourseDetailData from "../Layout/Details";

const CourseDetail = () => {
  const { title, price, description, includes, video } = CourseDetailData;

  return (
    <div className="bg-[#022525] text-white px-4 py-10 min-h-screen mt-15 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 p-5 gap-6">
        <div className="md:col-span-2 p-5">
          <video
            controls
            controlsList="nodownload noplaybackrate"
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-[300px] object-cover rounded-xl mb-6"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-300 mb-4">{description}</p>
          <p className="text-gray-300 mb-4">{description}</p>
          <p className="text-gray-300 mb-4">{description}</p>
        </div>

        <div className="space-y-6 col-span-2 p-5">
          <div className="bg-[#001c1c] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Buy Course</h3>
            <p className="text-3xl font-bold text-teal-400 mb-2">${price}</p>
            <p className="text-gray-400 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <button className="bg-teal-500 w-full text-white py-2 px-4 rounded-full hover:bg-teal-600">
              Enroll Now →
            </button>
          </div>

          <div className="bg-[#001c1c] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Course Include</h3>
            <p className="text-gray-400 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <ul className="space-y-2">
              {includes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm text-gray-300"
                >
                  <span className="text-xl mr-2">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
