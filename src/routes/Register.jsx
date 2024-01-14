import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password } = formFields;

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onRegisterSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify(formFields),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration successful");
    } else {
      alert("Registerion faild");
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-center mt-12 px-6 lg:px-8 shadow-xl max-w-md m-auto ">
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm px-6 py-6">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
            Register a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onRegisterSubmit}>
            <FormInput
              label="Username"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={handleChange}
              required
            />

            <FormInput
              label="Email adress"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleChange}
              required
            />

            <FormInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={handleChange}
              required
            />

            <div>
              <button
                onClick={onRegisterSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#bc8628] hover:bg-[#a8751d] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300 ease-in-out"
              >
                Rigster
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-lg text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-zinc-100 hover:text-[#eaa327]"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
