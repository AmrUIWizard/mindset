import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import FormInput from "../components/FormInput";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const loadedUser = (data) =>
  //   setLoadUser({
  //     id: data.id,
  //     name: data.name,
  //     entries: data.entries,
  //   });

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onSignSubmit = async (event) => {
    event.preventDefault();
    // resetFormFields();

    await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(formFields),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="flex flex-1 flex-col justify-center translate-y-1/3 lg:px-8 px-6 shadow-xl max-w-md m-auto mx-auto">
      <div className="bg-gray-900 rounded-lg px-6 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
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
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#bc8628] hover:bg-[#a8751d] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300 ease-in-out"
              >
                Sign in
              </button>
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
