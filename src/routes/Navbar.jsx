import logo from "../../logo.svg";
import { styles } from "../styles";
import { Outlet, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      credentials: "include",
    });
  });
  console.log(userName);
  return (
    <>
      <nav className={`${styles.paddingX} w-full flex items-center py-5 `}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/">
            <div className="flex justify-between items-center gap-2 cursor-pointer max-sm:justify-center">
              <img
                src={logo}
                alt="logo"
                className="w-8 h-8 object-contain mb-1"
              />

              <p className="text-[18px] font-bold "> {userName}</p>
            </div>
          </Link>

          <ul className="list-none flex gap-6 items-center">
            {/* <li className="flex items-center gap-2 border-2 py-1 px-5 rounded-2xl border-[#eaa327]">
              <FaUser />
              <span> Guest</span>
            </li> */}
            <Link to="/login">
              <li className="cursor-pointer hover:text-[#eaa327]"> Login</li>
            </Link>
            <Link to="/register">
              <li className="cursor-pointer hover:text-[#eaa327]"> Register</li>
            </Link>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
