import { Link } from "react-router-dom";

const GuestMode = () => {
  return (
    <>
      <Link to="/login">
        <li className="cursor-pointer hover:text-[#eaa327]"> Login</li>
      </Link>
      <Link to="/register">
        <li className="cursor-pointer hover:text-[#eaa327]"> Register</li>
      </Link>
    </>
  );
};

export default GuestMode;
