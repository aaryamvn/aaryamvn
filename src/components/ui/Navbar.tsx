import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactSound from "react-sound";

export const Navbar: React.FC<{ height: string }> = ({ height }) => {
  return (
    <div
      className={`w-screen flex items-center justify-between p-4 ${height} border-b border-black2`}
    >
      <div className="flex items-center gap-7">
        <Logo />
        <div className="flex items-center gap-4">
          <NavElement title="about me" path="/about" />
          <NavElement title="technologies" path="/technologies" />
          <NavElement title="projects" path="/projects" />
          <NavElement title="extra" path="/etc" />
        </div>
      </div>
      <div className=""></div>
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
        className={`${active && ""} cursor-pointer`}
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
      <img src="/logo.svg" className="" alt="Aaryaman Maheshwari" />
    </a>
  );
};
