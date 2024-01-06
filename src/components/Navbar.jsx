import logo from "../../logo.svg";
import { styles } from "../styles";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className={`${styles.paddingX} w-full flex items-center py-5 `}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/">
            <div className="flex justify-between items-center gap-2 cursor-pointer">
              <img
                src={logo}
                alt="logo"
                className="w-8 h-8 object-contain mb-1"
              />

              <p className="text-[18px] font-bold "> Mindset</p>
            </div>
          </Link>

          <ul className="list-none flex gap-10">
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
