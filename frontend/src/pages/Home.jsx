import React, { useEffect, useState } from "react";
import Loading from "../inc/components.jsx/Loading";
import SidebarHome from "../inc/components.jsx/SidebarHome";
import HomeCreatePostCard from "../components/post/HomeCreatePostCard";
import SuggessionsSidebar from "../components/network/SuggessionsSidebar";
import SideAd from "../components/sidebar/SideAd";
import PostList from "../components/post/PostList";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  });
  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="w-64 mr-4">
        <SidebarHome />
      </div>
      <div className="flex-1">
        <HomeCreatePostCard />
        <hr />
        <br />
        <PostList />
      </div>
      <div className="w-64 ml-4">
        <div className="fixed z-0 w-64  overflow-scroll h-100">
          <SideAd />
          <br />
          <SuggessionsSidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
