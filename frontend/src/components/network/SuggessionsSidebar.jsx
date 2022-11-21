import React from "react";
import { Link } from "react-router-dom";
import SuggessionProfileCard from "./SuggessionProfileCard";

const SuggessionsSidebar = () => {
  return (
    <div className="border border-gray-200 p-4 bg-white">
      <h2 className="text-lg">Suggessions</h2>
      <hr />
      <SuggessionProfileCard />
      <SuggessionProfileCard />
      <SuggessionProfileCard />
      <SuggessionProfileCard />
      <SuggessionProfileCard />
    </div>
  );
};

export default SuggessionsSidebar;
