import React from "react";
import { Link, Outlet } from "react-router";
import FormOutlet from "./UiComponents/formOutlet";

const Account = () => {
  return (
    <div className="w-full background-image bg-[url(/assets/accout-image.jpg)] bg-center bg-cover h-screen flex items-center justify-center">
      <FormOutlet>
        <Outlet />
      </FormOutlet>
    </div>
  );
};

export default Account;
