import React, { useState } from "react";
import {
  FaBarsStaggered,
  FaBucket,
  FaChevronLeft,
  FaQq,
} from "react-icons/fa6";
import Button from "./Button";
import NavLinkComp from "./NavLinkComp";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../../contexts/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { role } = useAuthContext();
  const { isLoggedIn } = useAuthContext();
  const [menuState, setMenuState] = useState(false);
  const handleHam = () => {
    setMenuState(true);
  };
  const handleslide = () => {
    setMenuState(false);
  };

  const handleSignIn = () => {
    navigate("/account/login");
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-999 bg-emerald-50/25 backdrop-blur">
      <header className="py-1 text-gray-200 md:text-gray-900 px-4 justify-between items-center flex w-full relative">
        <div className="flex jutify-center items-center gap-2 cursor-pointer">
          <FaBarsStaggered
            className={`text-lg text-gray-700 hover:text-emerald-500 transform duration-600 md:hidden`}
            onClick={handleHam}
          />
          <Link to="/" className="text-xl text-black">
            <span className="font-medium">Hand</span>{" "}
            <span className="font-thin">It</span>
          </Link>
        </div>

        <nav
          className={`flex-1 flex justify-end md:justify-center fixed h-screen top-0 left-0 bg-gray-950 py-4 pr-6 transform transition-transform duration-600 ease-in overflow-hidden w-1/2 md:static md:h-full md:w-full md:bg-transparent z-50 md:translate-x-0 ${
            menuState ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <FaChevronLeft
            className={`text-lg absolute hover:text-emerald-700  cursor-pointer transform duration-600 delay-900 md:hidden ${
              !menuState ? "translate-x-10" : "translate-x-0"
            }`}
            onClick={handleslide}
          />

          <ul
            className={` h-full flex justify-top flex-col gap-10 pt-4 pb-4 md:flex-row md:pt-4`}
          >
            <NavLinkComp link="/product">Product</NavLinkComp>
            <NavLinkComp link="/">Female</NavLinkComp>
            <NavLinkComp link="/">Male</NavLinkComp>
            {role === "Admin" ? (
              <NavLinkComp link="/dashboard">Dashboard</NavLinkComp>
            ) : null}
          </ul>
        </nav>

        <div className="flex items-center gap-8 pl-4">
          <LinkNav to="/user">
            <FaQq />
          </LinkNav>
          <LinkNav to="/cart">
            <FaBucket />
          </LinkNav>
          <Button
            className={`border-[1px] text-gray-700 ${
              isLoggedIn ? "hidden" : "block"
            }`}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

function LinkNav({ to, children }) {
  return (
    <Link
      to={to}
      className="text-xl text-gray-900 hover:text-emerald-950 cursor-pointer transition-all duration-500 hover:text-2xl md:hidde"
    >
      {children}
    </Link>
  );
}
