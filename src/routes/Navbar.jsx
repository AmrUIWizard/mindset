import logo from "../../logo.svg";
import { styles } from "../styles";
import { Outlet, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { GuestMode, UserMode } from "../components";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../state/user/userSlice";
import Particle from "../components/Particles";
import Footer from "./Footer";

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const userName = useSelector((state) => state.user.userName);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/profile`, {
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

          <ul className="list-none hidden sm:flex gap-6 items-center">
            <li className="flex items-center justify-center gap-2 border-2 py-1 px-5 rounded-2xl border-[var(--primary-color)] min-w-32">
              <FaUser />
              <span> {userName ? userName : "Guest"}</span>
            </li>
            {userName ? <UserMode /> : <GuestMode />}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-primary`}
            >
              <ul className="list-none flex justify-end items-center flex-col gap-4">
                {userName ? <UserMode /> : <GuestMode />}
                <li className="flex items-center justify-center gap-2 border-2 py-1 px-5 rounded-2xl border-[var(--primary-color)] min-w-32">
                  <FaUser />

                  <span> {userName ? userName : "Guest"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
      <Particle />
      <Footer />
    </>
  );
};

export default Navbar;
