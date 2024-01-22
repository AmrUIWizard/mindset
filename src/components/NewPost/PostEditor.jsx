import { Editor } from "@tinymce/tinymce-react";
import { useDispatch } from "react-redux";
import { setEditorValue } from "../../state/post/postSlice";

const PostEditor = () => {
  const dispatch = useDispatch();

  const handleEditorChange = (content) => {
    dispatch(setEditorValue(content));
  };

  return (
    <div className="min-h-[430px]">
      <label className="code-font block text-md leading-6 text-white mb-1">
        Content
      </label>
      <Editor
        apiKey="raub75ckbzvrwtdf132p0y8ic5d548gzpyopf9kmwmrkg9sx"
        onEditorChange={handleEditorChange}
        init={{
          skin: "oxide-dark",
          content_css: "dark",
          plugins:
            "codesample mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
          toolbar:
            "undo redo | bold italic underline strikethrough |codesample | blocks | link image table | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        initialValue="Your post content here"
      />
    </div>
  );
};

export default PostEditor;
