import React from "react";
import { clsx } from "clsx";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        `py-4 px-6 rounded-3xl flex justify-center items-center min-w-40 cursor-pointer 
         text-emerald-900  gap-2 leading-none text-lg relative hover:border-transparent backdrop-opacity-0 group overflow-clip hover:text-cyan-50 transition-all ease-in-out duration-300`,
        className
      )}
      {...props}
    >
      <div className="transition-all ease-in-out duration-300 absolute bg-emerald-900 h-0 w-5 group-hover:h-[200%] group-hover:w-[101%] top-full left-1/3 group-hover:-top-[50%] group-hover:left-0 rounded-full -z-1"></div>
      {children}
    </button>
  );
};

export default Button;
