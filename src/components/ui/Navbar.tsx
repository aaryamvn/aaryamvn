import { AGE, LOCATION } from "~/constants";
import Link from "next/link";

export const Navbar = ({ width }: { width: string }) => {
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

      <div className="mt-[1.3rem] flex flex-col gap-[1.5rem] relative pl-7">
        <NavElement title="about me" path="/about" />
        <NavElement title="technologies" path="/technologies" />
        <NavElement title="projects" path="/projects" />
        <NavElement title="thoughts and opinions" path="/thoughts" />
        <NavElement title="articles and threads" path="/writing" />
        <NavElement title="socials and extra" path="/extra" />
      </div>
    </div>
  );
};

const NavElement = ({ title, path }: { title: string; path: string }) => {
  const active = window.location.pathname === path ? true : false;

  return (
    <>
      <div className={`${active ? "font-bold" : "font-normal"} cursor-pointer`}>
        <Link href={path}>
          <a>{title}</a>
        </Link>
      </div>
      {active && <NavElementSelector />}
    </>
  );
};

// type SelectorPosition = ""

const NavElementSelector = () => {
  return (
    <span className="absolute right-[-2px] w-[0.15rem] h-7 rounded-full bg-white cursor-pointer"></span>
  );
};
