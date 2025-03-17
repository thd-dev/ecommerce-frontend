import clsx from "clsx";
import { Link } from "react-router";
import NavLinkComp from "./NavLinkComp";

const Image = ({ src, alt, className, to, text }) => {
  return (
    <div
      className={clsx(
        `w-full h-full relative flex items-end group ${className}`
      )}
    >
      <img src={src} alt={alt} className={clsx(`h-full w-full object-cover`)} />
      <NavLinkComp
        link={to}
        className={`group-[.leftside]:right-4 bottom-6 !absolute group-[.rightside]:left-4`}
      >
        {text}
      </NavLinkComp>
    </div>
  );
};

export default Image;
