import React from "react";
import { Link } from "react-router-dom";
import like from "../../assets/icons/like.svg";
import comment from "../../assets/icons/comment.svg";

const HomeCreatePostCard = () => {
  return (
    <div className="border border-gray-200 mb-3 bg-white">
      <div className="flex flex-row justify-start p-4">
        <Link to="/profile">
          <img
            className="rounded-full h-12 w-12 overflow-hidden"
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt=""
          />
        </Link>
        <input
          type="text"
          className="flex-1 border-2 border-gray-200 outline-0 rounded w-full ml-4 px-4"
          placeholder="Start a Post"
        />
      </div>
      <div className="pt-2 px-4 py-1 border-t  border-gray-200 ">
        <div className="flex flex-row">
          <div className="flex flex-1 flex-row items-center justify-center p-2">
            <img src={like} alt="" className="h-5" />
            <span className="text-sm pl-2"> Photo</span>
          </div>
          <div className="flex flex-1 flex-row items-center justify-center p-2">
            <img src={like} alt="" className="h-5" />
            <span className="text-sm pl-2"> Video</span>
          </div>
          <div className="flex flex-1 flex-row items-center justify-center p-2">
            <img src={like} alt="" className="h-5" />
            <span className="text-sm pl-2"> Job</span>
          </div>
          <div className="flex flex-row flex-1 items-center justify-center p-2">
            <img src={comment} alt="" className="h-5" />
            <span className="text-sm pl-2">Article</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCreatePostCard;
