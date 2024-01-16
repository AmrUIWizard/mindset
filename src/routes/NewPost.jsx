import { styles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { FormInput } from "../components";
import { PostEditor, TextArea, Button, ImageInput } from "../components";
import { setTitle } from "../state/post/postSlice";

const NewPost = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.post.title);
  const description = useSelector((state) => state.post.description);
  const imageUrl = useSelector((state) => state.post.imageUrl);
  const editorValue = useSelector((state) => state.post.editorValue);

  const handleTitleChange = (event) => {
    dispatch(setTitle(event.target.value));
  };

  const createNewPost = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("description", description);
    data.set("imageUrl", imageUrl);
    data.set("editorValue", editorValue);
    console.log(data);
    fetch("http:/localhost:5173/post", {
      method: "POST",
      body: data,
    });
  };
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
