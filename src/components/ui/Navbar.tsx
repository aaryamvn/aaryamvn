import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactSound from "react-sound";
import { SocialRow } from "./SocialRow";
import { SocialType } from "~/types";

export const Navbar: React.FC<{ height: string }> = ({ height }) => {
  return (
    <div
      className={`w-screen flex items-center justify-between p-5 ${height} border-b border-black1`}
    >
      <div className="flex items-center gap-7">
        <Logo />
        <div className="flex items-center gap-3">
          <NavElement title="about me" path="/about" />
          <NavElement title="technologies" path="/technologies" />
          <NavElement title="projects" path="/projects" />
          <NavElement title="extra" path="/etc" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <SocialRow Social={Social} />
      </div>
    </div>
  );
};

const NavElement: React.FC<{ title: string; path: string }> = ({
  title,
  path,
}) => {
  const router = useRouter();

  type playState = "PLAYING" | "STOPPED" | "PAUSED";
  const [playStatus, setPlayStatus] = useState<playState>("STOPPED");
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (window) {
      setActive(window.location.pathname === path ? true : false);
    }
  }, []);

  return (
    <>
      <div
        className={`${
          active && "bg-white1 dark:bg-black1 py-2 rounded-full font-bold"
        } 
        cursor-pointer
        px-[1rem] -ml-1 mr-1
        `}
        onClick={async () => {
          setPlayStatus("PLAYING");
          await new Promise((resolve) => setTimeout(resolve, 300));
          await router.push(path);
        }}
      >
        {title}
      </div>
      <ReactSound url="click_sound.wav" playStatus={playStatus} />
    </>
  );
};

const Logo = () => {
  return (
    <a href="/">
      <img
        src="/logo.svg"
        className="h-[2.7rem] w-[2.7rem]"
        alt="Aaryaman Maheshwari"
      />
    </a>
  );
};

const Social: SocialType = ({ Icon, href, title }) => {
  return (
    <a href={href} title={title} target="_blank">
      <Icon className="fill-[#070A0E] dark:fill-[#FFFFFF] hover:opacity-[0.6] duration-100 ease-in h-[1.2rem] w-[1.2rem]" />
    </a>
  );
};
