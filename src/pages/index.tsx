import { useContext } from "react";
import { DmMeButton } from "../components/Home/DmMeButton";
import { ThemeContext } from "../modules/ThemeProvider";

export default function Home() {
  const { colorMode } = useContext(ThemeContext);

  return (
    <div
      className={`w-screen h-screen grid place-items-center ${
        colorMode === "light" ? "bg__light" : "bg__dark"
      }`}
    >
      <div className="flex flex-col gap-7 container mx-auto w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[40rem]">
        {/* Socials */}

        {/* Heading */}
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font__poppins font-extrabold text-left">
          Hey, I'm <span className="text-accent">Aaryaman</span>
        </h1>

        {/* Body */}
        <p className="sm:text-lg md:text-[0.5rem] lg:text-xl xl:text-2xl font-medium text-left">
          I’m a middle-schooler aspiring to build products that{" "}
          <strong>make an impact</strong>. I design and implement elegant
          software with the help of modern tools.
        </p>

        {/* DM Me Button */}
        <DmMeButton />
      </div>
    </div>
  );
}
