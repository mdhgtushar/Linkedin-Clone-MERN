import React from "react";
import { Link } from "react-router-dom";
import SuggessionsSidebar from "../../components/network/SuggessionsSidebar";

const SidebarHome = () => {
  return (
    <div className="w-64 mr-4">
      <div className="text-center border border-gray-200 px-4 py-8 bg-white">
        <img
          className="rounded-full h-16 w-16 overflow-hidden mx-auto"
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt=""
        />
        <h1 className="text-lg">Hobayer Golondaz</h1>
        <p className="text-sm">Full-Stack MERN Developer || JavaScript</p>
        <Link
          to="/network"
          className="text-left text-sm p-1 px-5 mt-3 bg-gray-100 w-full block"
        >
          Connections
        </Link>
      </div>
      <br />
      <SuggessionsSidebar />
    </div>
  );
};

export default SidebarHome;
