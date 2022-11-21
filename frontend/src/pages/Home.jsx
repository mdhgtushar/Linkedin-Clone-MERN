import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../inc/components.jsx/Loading";
import Post from "../inc/components.jsx/Post";
import SidebarHome from "../inc/components.jsx/SidebarHome";
import HomeCreatePostCard from "../components/post/HomeCreatePostCard";
import SuggessionsSidebar from "../components/network/SuggessionsSidebar";
import SideAd from "../components/sidebar/SideAd";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setPosts([
        {
          id: 1,
          title:
            "If you're a new dev without a lot of coding experience, you should focus on building up your portfolio.",
          image:
            "https://media-exp1.licdn.com/dms/image/sync/D5634AQFvdXsiQ0lN8g/ugc-proxy-shrink_800/0/1668880861311?e=1669510800&v=beta&t=w7IWUF8UAQTqSH4hxi54WQeHrgOQbWt-6LS3tVNi_V0",
        },
        {
          id: 2,
          title:
            "Smart work is not a concept for me, there is only one thing that can pay back which is Work Hard!",
          image:
            "https://media-exp1.licdn.com/dms/image/C4D22AQHW6YthtBIQPA/feedshare-shrink_800/0/1668852560607?e=1671667200&v=beta&t=JqDEFVWPySdN_Du3k0NZ8YCxfVdmz6gFSFJ3vK0Whiw",
        },
      ]);
    }, 100);
  });
  return loading ? (
    <Loading />
  ) : (
    <>
      <SidebarHome />
      <div className="flex-1">
        <HomeCreatePostCard />
        <hr />
        <br />

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className="w-64 ml-4">
        <SideAd />
        <br />
        <SuggessionsSidebar />
      </div>
    </>
  );
};

export default Home;
