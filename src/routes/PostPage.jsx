import { useEffect, useState } from "react";
import { styles } from "../styles";
import { Link, useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import Loading from "./Loading";
import { format } from "date-fns";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  return (
    <div className={`${styles.paddingX}`}>
      <div className="max-w-7xl mx-auto mb-16">
        {!postInfo ? (
          <Loading />
        ) : (
          <>
            <h1 className="font-bold text-5xl max-sm:text-4xl text-center mt-8 mb-5">
              {postInfo.title}
            </h1>
            <div className="flex gap-3 items-center justify-between text-gray-300">
              <div className="flex items-center my-1 ">
                <FaUser className="w-10" />
                <p className="">{postInfo.author.name}</p>
              </div>
              <p className="">
                Created At:{" "}
                {format(new Date(postInfo.createdAt), "MMM d, yyyy")}
              </p>
            </div>
            <hr className="bg-[var(--primary-color)] h-[2px]" />

            <img
              className="bg-cover mt-8 mx-auto max-h-[450px] rounded-lg"
              src={`${import.meta.env.VITE_HOSTING_URL}/${postInfo.imageUrl}`}
            />

            <div
              dangerouslySetInnerHTML={{ __html: postInfo.editorValue }}
              className="mt-8 p-4 text-xl bg-primary rounded-xl"
            />

            <hr className="bg-slate-600 h-[2px]" />
            <div className="flex items-center gap-2 hover:text-[var(--primary-color)] mt-2">
              <FaArrowLeft />
              <Link to="/">Back To Home</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostPage;
