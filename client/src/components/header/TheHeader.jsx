import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import Button from "../ui/Button";
import { IoMdMenu } from "react-icons/io";
import Input from "../ui/Input";

export default function TheHeader() {
  const [isCollapse, setIsCollapse] = useState(false);
  const toggleCollapseMethod = () => setIsCollapse(!isCollapse);

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
        {/* TODO: -UI- if don't need label, remove */}
        <label htmlFor="search" className="hidden lg:inline-flex items-center">
          <Input type="text" id="search" placeholder="Search" icon="search" />
        </label>
      </form>

      <button className="w-12 h-10 inline-flex items-center justify-center lg:hidden border border-gray-300 rounded-xl px-3 py-1">
        <AiOutlineSearch />
      </button>

      <nav className="hidden lg:flex">
        <ul className="flex items-center gap-x-5">
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
        <Button className="inline-flex items-center justify-center w-12 h-10 bg-cyan-700 text-white rounded-md">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button className="border-2 border-gradient-to-r from-indigo-500 to-pink-500 py-2 px-4 rounded">
            sign in
          </Button>
        </Link>
        <div className="lg:hidden">
          <div
            onClick={toggleCollapseMethod}
            className="border border-gray-500 px-4 py-3 rounded cursor-pointer"
          >
            <IoMdMenu />
          </div>

          {/* TODO: -Func- when changed root, close nav */}
          <nav
            className={`${
              !isCollapse ? "-top-full" : ""
            } lg:hidden bg-white border-b-2 border-gray-200 absolute left-0 right-0 p-4 z-20`}
          >
            <ul className="flex flex-col gap-x-3 gap-y-2">
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
        </div>
      </div>
    </div>
  );
}
