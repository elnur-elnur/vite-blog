import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function SignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl flex-col mx-auto md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link
            to="/"
            className="self-center text-3xl sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded text-white">
              V
            </span>
            Blog
          </Link>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            corporis impedit aspernatur animi blanditiis libero labore saepe
            nemo magnam dignissimos.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
            <label htmlFor="username">
              <p>Your username</p>
              <Input
                type="text"
                placeholder="Username"
                id="username"
                className="w-full"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              <p>Your email</p>
              <Input
                type="email"
                placeholder="name@company.com"
                id="email"
                className="w-full"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              <p>Your password</p>
              <Input
                type="password"
                className="w-full"
                placeholder="Password"
                id="password"
                autoComplete="on"
                onChange={handleChange}
              />
            </label>

            <div className="bg-gradient-to-r from-indigo-500 to-pink-500 p-1 rounded">
              <Button
                type="submit"
                className="bg-white text-black py-2 px-4 rounded w-full hover:bg-transparent hover:text-white hover:border-white hover:transition-all hover:duration-300"
              >
                sign up
              </Button>
            </div>
          </form>
          <div className="flex items-center gap-2 text-sm mt-5">
            <p>Have an account?</p>
            <Link className="text-blue-500 underline" to="/sign-in">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
