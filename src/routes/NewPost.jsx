import { styles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { FormInput } from "../components";
import { PostEditor, TextArea, Button, ImageInput } from "../components";
import { setTitle } from "../state/post/postSlice";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import errorImage from "../assets/error.png";

const NewPost = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.post.title);
  const description = useSelector((state) => state.post.description);
  const imageUrl = useSelector((state) => state.post.imageUrl);
  const editorValue = useSelector((state) => state.post.editorValue);

  const [redirect, setRedicret] = useState(false);

  const handleTitleChange = (event) => {
    dispatch(setTitle(event.target.value));
  };

  const createNewPost = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("description", description);
    data.set("editorValue", editorValue);
    data.set("imageUrl", imageUrl[0]);
    const response = await fetch(`${import.meta.env.VITE_HOSTING_URL}/post`, {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedicret(true);
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className={`${styles.paddingX} w-full py-5`}>
      <div className="max-w-7xl mx-auto ">
        <form className="flex flex-col gap-5" onSubmit={createNewPost}>
          <FormInput
            type="text"
            label="Title"
            onChange={handleTitleChange}
            required
          />
          <TextArea label="Description" required />
          <ImageInput />
          <PostEditor />
          <Button value="Create Post" disabled />
        </form>
        <div className="flex items-center gap-2 text-red-600 mt-2">
          <img src={errorImage} alt="errorImage" width={25} height={25} />
          <p>
            Regrettably, we are unable to generate posts due to a subscription
            limit associated with the TinyMCE editor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
