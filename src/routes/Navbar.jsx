import logo from "../../logo.svg";
import { styles } from "../styles";
import { Outlet, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useEffect } from "react";
import { GuestMode, UserMode } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../state/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        dispatch(setUserName(userInfo.name));
      });
    });
  });
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

              <p className="text-[18px] font-bold "> Mindset</p>
            </div>
          </Link>

          <ul className="list-none flex gap-6 items-center">
            <li className="flex items-center justify-center gap-2 border-2 py-1 px-5 rounded-2xl border-[var(--primary-color)] min-w-32">
              <FaUser />
              <span> {userName ? userName : "Guest"}</span>
            </li>
            {userName ? <UserMode /> : <GuestMode />}
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
