const PostCard = ({ title, subtitle, img, author, publishDate }) => {
  return (
    <div className="max-w-3xl rounded overflow-hidden shadow-lg flex justify-between  gap-5 mb-8 max-sm:flex-col max-sm:items-center">
      <img className="w-full max-w-60 rounded-md" src={img} alt="Post Image" />

      <div className="sm:px-6 max-sm:py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex gap-3 mb-2 text-sm text-gray-500">
          <p>{author} |</p>
          <p>{publishDate}</p>
        </div>

        <p className="text-gray-300 text-base">{subtitle}</p>
      </div>
    </div>
  );
};

export default PostCard;
