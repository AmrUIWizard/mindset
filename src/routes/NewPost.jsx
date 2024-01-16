import { styles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { FormInput } from "../components";
import { PostEditor, TextArea, Button, ImageInput } from "../components";
import { setTitle } from "../state/post/postSlice";
import { useState } from "react";
import { Navigate } from "react-router-dom";

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
    const response = await fetch("http://localhost:3000/post", {
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
          <FormInput type="text" label="Title" onChange={handleTitleChange} />
          <TextArea label="Description" />
          <ImageInput />
          <PostEditor />
          <Button value="Create Post" />
        </form>
      </div>
    </div>
  );
};

export default NewPost;
