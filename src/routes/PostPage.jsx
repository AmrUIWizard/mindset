import { useEffect, useState } from "react";
import { styles } from "../styles";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import postImage from "../assets/postImage.webp";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  // console.log(process.env.HOSTING_URL);
  return (
    <div className={`${styles.paddingX}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-5xl max-sm:text-4xl text-center mt-8 mb-5">
          Stop Using localStorage!
        </h1>
        <div className="flex gap-3 items-center justify-between text-gray-300">
          <div className="flex items-center my-1 ">
            <FaUser className="w-10" />
            <p className="">Amr</p>
          </div>
          <p className="">Created At: Dec 22, 2023</p>
        </div>
        <hr className="bg-[var(--primary-color)] h-[2px]" />

        <img
          className="max-w-sm max-sm:max-w-72 mt-8 mx-auto"
          src={postImage}
        />

        <p className="mt-8 text-xl leading-9 p-4">
          localStorage came onto the scene around 2009 as a 5MB string based
          storage. It was never designed to be the definitive way to store
          things in the browser. Let’s cut to the chase with some bullet points
          since our attention spans are in disarray these days: One data type:
          You can only store strings. If you want to store anything else you
          have to serialize it to a string and deserialize to retrieve.
          Historically slow: localStorage is somewhat slow at storing and
          retrieving data, which makes it undesirable for applications that
          require frequent transactions. Limited storage: localStorage has a 5MB
          cap Serialization gotchas: If you are not familiar with the gotchas
          when storing data in localStorage you may be creating bugs in your
          application. These type-errors are not always obvious, especially for
          new developers. Blocking operations: localStorage is not asynchronous
          and will block your application. It may even make your animations
          choppy in the right conditions. Asynchronicity is fundamental to
          creating fluid applications, especially for mobile devices
        </p>
      </div>
    </div>
  );
};

export default PostPage;
