
import React from "react";
import CoursesData from "../Layout/Data";

const Course = () => {
  return (
    
    <div className="bg-[#022525] text-white py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Our Courses</h2>
      <p className="text-center mb-10 max-w-xl mx-auto">
        Contrary to popular belief, Contrary to popular belief, Lorem Ipsum is not simply random text.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {CoursesData.map((course) => (
          <div key={course.id} className="bg-[#001c1c] p-4 rounded-lg shadow-md">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <div className="flex items-center text-sm text-gray-300 mb-2 gap-4">
              <span>📘 {course.lessons} Lessons</span>
              <span>⏱️ {course.duration}</span>
              <span>⭐ {course.rating}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{course.description}</p>
            <a className="btn bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600" href="/detail">
              Join Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
