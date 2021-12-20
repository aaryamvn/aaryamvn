import React from "react";
import { Navbar } from "../ui/Navbar";

export const Layout: React.FC<{ pageTitle: string }> = ({
  children,
  pageTitle,
}) => {
  return (
    <div className="flex">
      <Navbar width="w-[14.5rem]" />
      <div
        className={`h-screen absolute left-[14.5rem] w-[calc(100vw-14.5rem)] flex justify-center`}
      >
        <div className="mt-7 mx-auto px-10 lg:px-0 lg:w-[40rem]">
          <h1 className="font-bold text-[1.5rem] pb-2 border-b-2 border-black1">
            {pageTitle}
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
};
