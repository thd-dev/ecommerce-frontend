import clsx from "clsx";
import React from "react";
import { Link } from "react-router";

const FormOutlet = ({ children, className }) => {
  return (
    <div
      className={clsx(
        `rounded-sm px-16 py-10 h-full w-full md:w-96 md:h-fit flex items-center justify-center flex-col gap-2 bg-emerald-100/25 backdrop-blur ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default FormOutlet;

export const ImageArea = ({ image }) => {
  return <img src={image} className="" />;
};

export const SignInHeading = ({ children }) => {
  return (
    <h2 className="font-semibold self-start -translate-y-1">
      {children} for the best experience
    </h2>
  );
};
export const SignInPara = ({ children, className }) => {
  return <p className={clsx("", className)}>{children}</p>;
};

export const SignInLink = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={clsx(
        "text-blue-800 hover:text-blue-500 hover:underline underline-offset-4 transition-all duration-300",
        className
      )}
    >
      {children}
    </Link>
  );
};

export const FormArea = ({ onSubmit, children }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full flex-col justify-center items-center max-w-xl gap-6 w-full"
    >
      {children}
    </form>
  );
};
