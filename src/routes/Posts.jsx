import { styles } from "../styles";

import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div className={`${styles.paddingX}`}>
      <div className=" max-w-7xl mx-auto">
        <h1 className="mb-1 text-4xl text-gray-300">Top Topics</h1>
        <hr className="mb-8" />
        <div>
          {posts.map((post) => {
            return <PostCard key={post.title} {...post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
