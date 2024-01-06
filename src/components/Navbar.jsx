import logo from "../../logo.svg";
import { styles } from "../styles";

const Navbar = () => {
  return (
    <nav className={`${styles.padding}w-full flex items-center py-5 `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <div className="flex justify-between items-center gap-2 cursor-pointer">
          <img src={logo} alt="logo" className="w-8 h-8 object-contain mb-1" />

          <p className="text-[18px] font-bold "> Mindset</p>
        </div>

        <ul className="list-none flex gap-10">
          <li className="cursor-pointer hover:text-[#eaa327]"> Login</li>
          <li className="cursor-pointer hover:text-[#eaa327]"> Register</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
