import { useDispatch } from "react-redux";
import { setDescription } from "../state/post/postSlice";

const TextArea = ({ label, ...otherProps }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setDescription(event.target.value));
  };
  return (
    <div>
      <label className="code-font block text-md leading-6 text-white mb-1">
        {label}
      </label>
      <textarea
        onChange={handleChange}
        {...otherProps}
        className="code-font block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6 p-2 focus:outline-none bg-[#222f3e] border-none"
      />
    </div>
  );
};

export default TextArea;
