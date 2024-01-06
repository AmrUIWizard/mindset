import { styles } from "../styles";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <div className={`${styles.padd} max-w-7xl mx-auto`}>
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Posts;
