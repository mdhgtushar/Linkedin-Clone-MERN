import React, { useEffect, useState } from "react";
import Loading from "../inc/components.jsx/Loading";
import SidebarHome from "../inc/components.jsx/SidebarHome";

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
      <SidebarHome />
      <div className="flex-1">
        <div className=" border border-gray-200 p-4">No Padning Invites</div>
      </div>
    </>
  );
};

export default Network;
