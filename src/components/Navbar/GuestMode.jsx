import { Link } from "react-router-dom";

const GuestMode = () => {
  return (
    <>
      <Link to="/login">
        <li className="cursor-pointer hover:text-[var(--primary-color)]">
          {" "}
          Login
        </li>
      </Link>
      <Link to="/register">
        <li className="cursor-pointer hover:text-[var(--primary-color)]">
          {" "}
          Register
        </li>
      </Link>
    </>
  );
};

export default GuestMode;
