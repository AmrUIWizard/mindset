import { styles } from "../styles";
import { posts } from "../posts";

import PostCard from "../components/PostCard";

const Posts = () => {
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
