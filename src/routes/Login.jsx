import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../state/user/userSlice";
import { Button, FormInput } from "../components";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [redirect, setRedirect] = useState(false);

  // const loadedUser = (data) =>
  //   setLoadUser({
  //     id: data.id,
  //     name: data.name,
  //     entries: data.entries,
  //   });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onSignSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_HOSTING_URL}/login`, {
      method: "POST",
      body: JSON.stringify(formFields),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        dispatch(setUserName(userInfo.name));
        setRedirect(true);
      });
    } else {
      alert("Wrong email or password");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="flex flex-1 flex-col justify-center mt-12 px-6 lg:px-8 shadow-xl max-w-md m-auto mb-16">
      <div className="bg-primary border-[#a8751d] border-2 rounded-2xl p-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm px-6 py-6">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSignSubmit}>
            <FormInput
              label="Email adress"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />

            <FormInput
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />

            <div>
              <Button value="Sign in" />
            </div>
          </form>

          <p className="mt-10 text-center text-lg text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-zinc-100 hover:text-[#eaa327]"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
