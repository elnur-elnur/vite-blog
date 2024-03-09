import React from "react";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="border-t-4 border-teal-500 rounded-t p-4">
      <div>
        <Link
          to="/"
          className="self-center text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded text-white">
            V
          </span>
          Blog
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:mt-5 sm:grid-cols-3 sm:gap-6">
        <div>
          <h2 className="font-semibold text-gray-700 mt-4 uppercase text-sm">
            About
          </h2>
          <div className="flex flex-col mt-4 text-gray-500 text-xs gap-2">
            <Link to="/">Elnur's Blog</Link>
            <Link to="/">2024 Projects</Link>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-700 mt-4 uppercase text-sm">
            Follow us
          </h2>
          <div className="flex flex-col mt-4 text-gray-500 text-xs gap-2">
            <Link to="/">Facebook</Link>
            <Link to="/">Github</Link>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-700 mt-4 uppercase text-sm">
            Legal
          </h2>
          <div className="flex flex-col mt-4 text-gray-500 text-xs gap-2">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:justify-between border-t border-gray-200 mt-4 pt-4">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <FaRegCopyright />
          <span>{new Date().getFullYear()}</span>
          <span>Vblog</span>
        </div>
        <div className="flex items-center gap-3 sm:justify-center mt-3 sm:mt-0 text-gray-500">
          <Link to="/">
            <FaFacebook />
          </Link>
          <Link to="/">
            <FaTwitter />
          </Link>
          <Link to="/">
            <FaGithub />
          </Link>
          <Link to="/">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}
