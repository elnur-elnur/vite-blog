import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Input({ type, className = "", ...props }) {
  if (props.icon)
    return (
      <div className="flex border border-gray-300 rounded">
        <input type={type} className={`${className} px-2 py-1 bg-gray-50`} {...props} />
        <button className="inline-flex items-center justify-center px-3 text-gray-400">
          <AiOutlineSearch />
        </button>
      </div>
    );
  else {
    return (
      <input
        type={type}
        className={`${className} border border-gray-300 rounded px-3 py-1 bg-gray-50`}
        {...props}
      />
    );
  }
}
