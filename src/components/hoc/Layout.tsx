import React from "react";
import { Navbar } from "../ui/Navbar";

export const Layout: React.FC<{ pageTitle: string }> = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <Navbar height="h-[5.4rem]" />
      <div className="h-[calc(100vh-5.4rem)] flex justify-center">
        <div className="mt-7 mx-auto px-10 lg:px-0 lg:w-[40rem]">
          {children}
        </div>
      </div>
    </div>
  );
};
