import React from "react";
import { Navbar } from "../ui/Navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <Navbar width="w-[15.5rem]" />
      <div
        className={`h-screen absolute left-[15.5rem] w-[calc(100vw-15.5rem)] flex justify-center`}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
};
