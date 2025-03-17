import { Link } from "react-router";

export default function NavLinkComp({
  link,
  children,
  className = "",
  border = "",
}) {
  return (
    <li
      className={`group relative px-2 hover:text-gray-50 md:hover:text-emerald-950 cursor-pointer list-none ${className}`}
    >
      <Link to={link}>{children}</Link>
      <div
        className={`bg-gray-50 md:bg-emerald-950 h-[2px] group-hover:w-full absolute left-0 -bottom-2 w-0 transition-all duration-500 ${border}`}
      ></div>
    </li>
  );
}
