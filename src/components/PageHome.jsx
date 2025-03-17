import React from "react";
import Image from "./UiComponents/Image";

const PageHome = () => {
  return (
    <>
      <div className="flex w-full justify-center h-screen">
        <Image
          src="/assets/hero-left.jpg"
          className="hidden md:block leftside"
          alt="hell"
          to="/"
          text="Female"
        />
        <Image
          src="/assets/hero-right.jpg"
          className="rightside"
          alt="hell"
          to=""
          text="Male"
        />
      </div>
      <div className="flex w-full justify-center h-80"></div>
      <div className="flex w-full justify-center h-screen">
        <Image
          src="/assets/hero-left.jpg"
          className="hidden md:block leftside"
          alt="hell"
          to="/"
          text="Female"
        />
        <Image
          src="/assets/hero-right.jpg"
          className="rightside"
          alt="hell"
          to=""
          text="Male"
        />
      </div>
      <div className="flex w-full justify-center h-80">
        <Image src="/assets/hero-right.jpg" className="rightside" alt="hell" />
      </div>
    </>
  );
};

export default PageHome;
