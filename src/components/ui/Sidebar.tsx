import { AGE, LOCATION } from "~/constants";
import { useEffect, useState } from "react";
import Sound from "react-sound";
import { useRouter } from "next/router";

export const Sidebar = ({ width }: { width: string }) => {
  return (
    <div
      className={`hidden lg:block fixed left-0 border-r-2 border-black1 ${width} h-screen`}
    >
      <div className="flex flex-col gap-3 p-7">
        <h1 className="font-extrabold text-[1.5rem]">Aaryaman M.</h1>
        <p className="font-normal text-[0.8rem] text-white2">
          {AGE}-year-old developer, designer, and entrepreneur based out of{" "}
          {LOCATION}
        </p>
      </div>

      <div className="mt-[1rem] flex flex-col relative pl-7">
        <SidebarElement title="about me" path="/about" />
        <SidebarElement title="technologies" path="/technologies" />
        <SidebarElement title="projects" path="/projects" />
        <SidebarElement title="thoughts and opinions" path="/thoughts" />
        <SidebarElement title="articles and threads" path="/writing" />
        <SidebarElement title="socials and extra" path="/extra" />
      </div>
    </div>
  );
};

const SidebarElement = ({ title, path }: { title: string; path: string }) => {
  const router = useRouter();

  const [playStatus, setPlayStatus] = useState<
    "PLAYING" | "STOPPED" | "PAUSED"
  >("STOPPED");
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
          active ? "font-bold bg-black1 rounded-[7px] mb-0" : "font-normal"
        } 
        cursor-pointer
        hover:bg-black1 hover:rounded-[7px]
        py-[0.5rem] pl-3 -ml-3 mr-3 mb-[0.5rem]
        `}
        onClick={async () => {
          setPlayStatus("PLAYING");
          await new Promise((resolve) => setTimeout(resolve, 300));
          await router.push(path);
        }}
      >
        {title}
      </div>
      <Sound url="click_sound.wav" playStatus={playStatus} />
    </>
  );
};

// type SelectorPosition = ""

// const NavElementSelector = () => {
//   return (
//     <span className="w-[0.15rem] h-7 rounded-full bg-white cursor-pointer"></span>
//   );
// };
