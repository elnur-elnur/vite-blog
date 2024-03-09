import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import Button from "../ui/Button";

export default function TheHeader() {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-200 p-4">
      <Link
        to="/"
        className="self-center text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded text-white">
          V
        </span>
        Blog
      </Link>
      <form>
        <label htmlFor="search" className="hidden lg:inline-flex">
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="border border-gray-300 rounded px-3 py-1 ml-4"
          />

          <span>
            <AiOutlineSearch />
          </span>
        </label>
      </form>

      <button className="w-12 h-10 inline-flex items-center justify-center lg:hidden border border-gray-300 rounded-xl px-3 py-1">
        <AiOutlineSearch />
      </button>

      <nav>
        <ul className="flex items-center gap-x-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2 ">
        <Button className="w-12 h-10 hidden sm:inline-flex items-center justify-center bg-cyan-700 text-white rounded-md">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button className="border-2 border-gradient-to-r from-indigo-500 to-pink-500 py-2 px-4 rounded">
            sign in
          </Button>
        </Link>
      </div>
    </div>
  );
}
