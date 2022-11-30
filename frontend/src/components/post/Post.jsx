import React from "react";
import { Link } from "react-router-dom";
import like from "../..//assets/icons/like.svg";
import comment from "../../assets/icons/comment.svg";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const Post = ({ post }) => {
  return (
    <div className="border border-gray-200 mb-5 bg-white">
      <div className="flex flex-row justify-start pb-2  px-4 py-4">
        <Link to="/profile">
          <img
            className="rounded-full h-12 w-12 overflow-hidden"
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt=""
          />
        </Link>
        <PostAuthor userId={post.userId} postDate={post.date} />
      </div>
      <hr />
      <p className="pb-2  px-4 py-4">{post.title}</p>
      <img src="https://picsum.photos/200/100" alt="" className="w-full" />
      <div className="pt-2 px-4 py-1">
        <p className="pb-1 text-sm font-thin">5 likes, 0 comments</p>
        <hr />
        <div className="flex flex-row pt-1">
          <div className="flex flex-1 flex-col items-center justify-center">
            <img src={like} alt="" className="h-5" />
            <span className="text-sm"> Like</span>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center">
            <img src={comment} alt="" className="h-5" />
            <span className="text-sm">Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
