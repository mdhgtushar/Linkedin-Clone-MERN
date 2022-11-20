import React, { useEffect, useState } from "react";
import Loading from "../inc/components.jsx/Loading";
import Post from "../inc/components.jsx/Post";
import SidebarHome from "../inc/components.jsx/SidebarHome";

const Home = () => {
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
        <Post />
      </div>
      <div className="w-64 ml-4">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt="no magic"
        />
      </div>
    </>
  );
};

export default Home;
