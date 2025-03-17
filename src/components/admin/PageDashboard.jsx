import React from "react";
import { Outlet } from "react-router";
import NavLinkComp from "../UiComponents/NavLinkComp";

const Dashboard = () => {
  return (
    <>
      <div className="pt-20">
        <nav className="w-full p-8">
          <ul className="flex w-full justify-around">
            <NavLinkComp
              link="/dashboard"
              className="hover:text-gray-950 text-gray-500"
              border="bg-gray-950"
            >
              Dashboard
            </NavLinkComp>
            <NavLinkComp
              link="add+product"
              className="hover:text-gray-950 text-gray-500"
              border="bg-gray-950"
            >
              Add Product
            </NavLinkComp>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
