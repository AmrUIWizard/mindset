import postImage from "../assets/postImage.webp";

const PostCard = () => {
  return (
    <div className="max-w-3xl rounded overflow-hidden shadow-lg flex justify-between  gap-5 mb-8 max-sm:flex-col max-sm:items-center">
      {/* Image section (if needed) */}
      <img
        className="w-full max-w-60 rounded-md"
        src={postImage}
        alt="Post Image"
      />

      <div className="sm:px-6 max-sm:py-4">
        {/* Title */}
        <div className="font-bold text-xl mb-2">How to be more productive</div>

        {/* Subtitle */}
        <p className="text-gray-400 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Additional sections (if needed) */}
      {/* <div className="px-6 py-4">Additional content goes here</div> */}
    </div>
  );
};

export default PostCard;
