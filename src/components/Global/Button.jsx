const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="flex w-full justify-center rounded-md bg-[var(--primary-color)] hover:bg-[#a8751d] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300 ease-in-out"
    >
      {value}
    </button>
  );
};

export default Button;
