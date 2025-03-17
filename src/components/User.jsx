import React, { useState } from "react";
import useAuthContext from "../contexts/AuthContext";
import clsx from "clsx";
import { Button } from "./UiComponents/Dbutton";

const User = () => {
  // const {fname, } = useAuthContext()
  const [section, setSection] = useState("information");
  const { fname, lname, email, phoneNo, handleLogout } = useAuthContext();
  return (
    <div className="p-40 flex w-full justify-center items-center ">
      <div className="flex w-full flex-col md:flex-row gap-10">
        <div className="w-full h-fit md:w-96 bg-gray-200 p-10">
          <Button onClick={handleLogout}>Log Out</Button>
        </div>
        <div className="w-full">
          <Section
            section={section}
            fname={fname}
            lname={lname}
            email={email}
            phoneNo={phoneNo}
          />
        </div>
      </div>
    </div>
  );
};

export default User;

function Section({ section, fname, lname, email, phoneNo }) {
  switch (section) {
    case "information":
      return (
        <Information
          fname={fname}
          lname={lname}
          email={email}
          phoneNo={phoneNo}
        />
      );
  }
}

function Information({ fname, lname, email, phoneNo }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="capitalize text-4xl font-semibold">Hello, {fname}</h2>
      <div>
        <h2 className="text-xl">My Information</h2>
        <p className="text-sm text-gray-400">Find your information here</p>
      </div>
      <InfoSection>
        <InfoHeading>Name</InfoHeading>
        <InfoPara>{fname}</InfoPara>
        <InfoHeading>Surname</InfoHeading>
        <InfoPara>{lname}</InfoPara>
        <InfoHeading>Email</InfoHeading>
        <InfoPara className="normal-case">{email}</InfoPara>
        <InfoHeading>Phone No</InfoHeading>
        <InfoPara className="normal-case">{phoneNo ? phoneNo : "--"}</InfoPara>
      </InfoSection>

      <div className="flex gap-4">
        <Button>Edit Info</Button>
        <Button>Edit Password</Button>
      </div>
    </div>
  );
}

function InfoSection({ children }) {
  return (
    <div className="grid grid-cols-3 gap-1 border-[0.5px] py-10 px-5">
      {children}
    </div>
  );
}
function InfoHeading({ children }) {
  return (
    <h3 className="text-sm font-medium translate-y-[2px] text-gray-700">
      {children}
    </h3>
  );
}
function InfoPara({ children, className }) {
  return (
    <p className={clsx("capitalize col-span-2 w-full", className)}>
      {children}
    </p>
  );
}
