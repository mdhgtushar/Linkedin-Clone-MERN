import React from "react";
import SuggessionProfileCard from "./SuggessionProfileCard";
import { useGetUsersQuery } from "../../features/users/userSlice";
import Loading from "../Loading";

const SuggessionsSidebar = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery("getUsers");

  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    content = (
      <div className="border border-gray-200 p-4 bg-white">
        <h2 className="text-lg">Suggessions</h2>
        <hr />
        {users.ids.map((userId) => {
          return <SuggessionProfileCard user={users.entities[userId]} />;
        })}
      </div>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};

export default SuggessionsSidebar;
