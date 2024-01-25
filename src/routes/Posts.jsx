import { styles } from "../styles";

import PostCard from "../components/Posts/PostCard";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/post`).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div className={`${styles.paddingX}`}>
      <div className=" max-w-7xl mx-auto w-full mb-16">
        <h1 className="max-w-4xl mt-20 max-md:mt-12 mb-32 max-md:mb-24 text-7xl max-md:text-5xl font-bold">
          Elevate your{" "}
          <span className="text-[var(--primary-color)]"> Mindset </span> with
          empowering thoughts and{" "}
          <span className="text-[var(--primary-color)]">transformative </span>{" "}
          insights.
        </h1>
        <h2 className="mb-1 text-4xl text-gray-300">Latest Topics</h2>
        <hr className="mb-8" />
        {posts ? (
          <div>
            {posts.map((post) => {
              return <PostCard key={post._id} {...post} />;
            })}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Posts;
