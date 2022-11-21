import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="border border-gray-200 p-4 mb-5 bg-white">
      <h2 className="text-xl pb-4">Experience</h2>
      <div className="flex flex-row justify-start pb-4">
        <Link to="/profile">
          <img
            className="h-12 w-12 overflow-hidden"
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt=""
          />
        </Link>
        <div className="pl-5">
          <h1 className="text-lg">
            <Link to="/profile">Game Developer</Link> -
            <span className="text-sm"> Feb 2008 - Present · 14 yrs 10 mos</span>
          </h1>
          <p className="text-sm">5AGame Information Technology · Full-time</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
