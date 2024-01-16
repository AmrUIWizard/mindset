/* eslint-disable react/prop-types */
import image from "../assets/postImage.webp";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

const PostCard = ({ title, description, imageUrl, author, createdAt }) => {
  return (
    <div className="max-w-3xl rounded overflow-hidden shadow-lg flex gap-5 mb-8 max-sm:flex-col max-sm:items-center ">
      <div className="h-60 flex items-center justify-center">
        <img
          className="w-full max-w-60 rounded-md"
          src={"http://localhost:3000/" + imageUrl}
          alt="Post Image"
        />
      </div>

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
