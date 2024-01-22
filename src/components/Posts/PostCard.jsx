/* eslint-disable react/prop-types */
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { Link } from "react-router-dom";

const PostCard = ({ _id, title, description, imageUrl, author, createdAt }) => {
  return (
    <div className="bg-primary max-w-3xl rounded-xl overflow-hidden shadow-lg flex gap-5 mt-8 max-sm:flex-col max-sm:items-center min-w-full border-[1px] border-[var(--primary-color)] p-4">
      <Link to={`/post/${_id}`}>
        <div className=" flex items-center justify-center w-60 h-60">
          <img
            className=" max-w-60 max-h-60 rounded-md"
            src={`${import.meta.env.VITE_HOSTING_URL}/${imageUrl}`}
            alt="Post Image"
          />
        </div>
      </Link>
      <div className="sm:px-6 max-sm:py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex gap-3 mb-2 text-sm text-gray-500">
          <p>{author.name} |</p>
          <p>{format(new Date(createdAt), "MMM d, yyyy")}</p>
        </div>

        <p className="text-gray-300 text-base">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
