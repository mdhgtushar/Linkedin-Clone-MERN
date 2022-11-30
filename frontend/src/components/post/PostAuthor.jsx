import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../features/users/userSlice";
import TimeAgo from "./TimeAgo";

const PostAuthor = ({ userId, postDate }) => {
  const { user: author } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data, isLoading }) => ({
      user: data?.entities[userId],
    }),
  });

  return (
    <div className="pl-5">
      <h1 className="text-lg">
        <Link to="/profile">
          <b>
            {author ? (
              <Link to={`/user/${userId}`}>{author.name}</Link>
            ) : (
              "Unknown author"
            )}
          </b>
        </Link>
        -
        <span className="text-sm">
          <TimeAgo timestamp={postDate} />
        </span>
      </h1>
      <p className="text-sm">Full-Stack MERN Developer || JavaScript</p>
    </div>
  );
};
export default PostAuthor;
