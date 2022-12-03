import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import network from "../assets/icons/network.svg";
import SuggessionsSidebar from "../components/network/SuggessionsSidebar";
import NetworkList from "../components/network/NetworkList";

const Network = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="w-64 mr-4">
        <div className="border border-gray-200 px-4 py-8 bg-white">
          <p>Manage my network</p>
          <Link
            to="/feed/network/my"
            className="text-left p-1 px-5 mt-3 bg-gray-100 w-full block flex items-center"
          >
            <img src={network} alt="non" className="h-5" />
            <p className="pl-3">My Network</p>
          </Link>
        </div>
        <br />
        <SuggessionsSidebar />
      </div>
      <div className="flex-1">
        <div className=" border border-gray-200 p-4 mb-3 bg-white">
          No Padning Invites
        </div>
        <NetworkList />
      </div>
    </>
  );
};

export default Network;
