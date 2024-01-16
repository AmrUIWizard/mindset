import { useDispatch } from "react-redux";
import { setImageUrl } from "../state/post/postSlice";

const ImageInput = ({ ...otherProps }) => {
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    dispatch(setImageUrl(file));
  };

  return (
    <div>
      <label
        htmlFor="formFile"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >
        Upload Image
      </label>
      <input
        onChange={handleFileChange}
        {...otherProps}
        type="file"
        className="relative bg-[#222f3e] m-0 block w-full min-w-0 flex-auto rounded  ring-gray-300 ring-1 bg-clip-padding px-3 py-[0.32rem] text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:px-3 file:py-[0.32rem]  file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-[color:var(--primary-color)] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-white dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary cursor-pointer"
      />
    </div>
  );
};

export default ImageInput;
