import { styles } from "../styles";
import { FormInput } from "../components";
import { PostEditor, TextArea, Button, ImageInput } from "../components";
const NewPost = () => {
  return (
    <div className={`${styles.paddingX} w-full py-5`}>
      <div className="max-w-7xl mx-auto flex flex-col gap-5 ">
        <FormInput type="text" label="Title" />
        <TextArea label="Description" />
        <ImageInput />
        <PostEditor />
        <Button value="Create Post" />
      </div>
    </div>
  );
};

export default NewPost;
