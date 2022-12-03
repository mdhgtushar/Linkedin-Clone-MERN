import React from "react";
import Post from "./Post";
import { useGetPostsQuery } from "../../features/posts/PostSlice";
import Loading from "../Loading";

const PostList = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery("getPosts");
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    content = posts.ids.map((postId) => (
      <Post key={postId} post={posts.entities[postId]} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <>{content}</>;
};

export default PostList;
