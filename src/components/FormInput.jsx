const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label className="code-font block text-md leading-6 text-white text">
        {label}
      </label>
      <div className="mt-2">
        <input
          {...otherProps}
          className="code-font block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6 p-2 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default FormInput;
