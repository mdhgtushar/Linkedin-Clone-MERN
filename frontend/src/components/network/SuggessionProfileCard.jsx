import React from "react";
import { Link } from "react-router-dom";

const SuggessionProfileCard = ({ user }) => {
  return (
    <div className="flex flex-row justify-start pt-5">
      <Link to="/profile">
        <img
          className="rounded-full h-8 w-8 overflow-hidden mt-1"
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt=""
        />
      </Link>
      <div className="pl-2 flex-1">
        <h1>
          <Link to="/profile">{user.name}</Link>
        </h1>
        <p className="text-sm">{user.email}</p>
        <Link
          to="/profile"
          className="text-center text-sm p-1 px-5 mt-3 bg-gray-100 w-full block"
        >
          Connect +
        </Link>
      </div>
    </div>
  );
};

export default SuggessionProfileCard;
