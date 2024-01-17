import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserName } from "../../state/user/userSlice";

const UserMode = () => {
  const dispatch = useDispatch();

  const logout = () => {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "POST",
    });
    dispatch(setUserName(null));
  };

  return (
    <>
      <Link to={`/newpost`}>
        <li className="cursor-pointer hover:text-[var(--primary-color)]">
          {" "}
          New Post
        </li>
      </Link>

      <li
        onClick={logout}
        className="cursor-pointer hover:text-[var(--primary-color)]"
      >
        {" "}
        Logout
      </li>
    </>
  );
};

export default UserMode;
