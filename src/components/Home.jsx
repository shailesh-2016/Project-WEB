import React from "react";

const Home = () => {
  return (
    <section className="bg-[#001210] text-white min-h-screen flex items-center justify-center px-6 py-10 pt-24">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase text-sm font-semibold text-gray-300 mb-2">
            Welcome to My Coach Coding Classes
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#6EC9C5] mb-6">
            Learn Web Development <br /> with Real-World Projects
          </h1>
          <p className="text-gray-400 mb-4">
            Join our hands-on coding bootcamp and become a MERN stack developer. Start from basics and build full-stack web apps using HTML, CSS, JavaScript, React, Node.js, MongoDB and more.
          </p>
          <ul className="list-disc pl-5 text-gray-400 space-y-1 mb-6">
            <li>Live & Recorded Sessions</li>
            <li>Project-based Practical Learning</li>
            <li>Placement Support & Resume Building</li>
            <li>Internship Opportunities</li>
          </ul>
          <button className="bg-[#B7ECEC] text-[#001210] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#9ee2e2] transition">
            Book Free Demo Class <span className="text-xl">➜</span>
          </button>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
            alt="Coding"
            className="rounded-xl object-cover h-48 w-full"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop"
            alt="Project"
            className="rounded-xl object-cover h-48 w-full"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop"
            alt="Classroom"
            className="rounded-xl object-cover h-48 w-full"
          />
        </div>
      </div>
     
    </section>
  );
};

export default Home;
