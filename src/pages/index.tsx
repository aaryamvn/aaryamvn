import { useContext } from "react";
import { Github } from "../components/icons/Github";
import { Instagram } from "../components/icons/Instagram";
import { Twitter } from "../components/icons/Twitter";
import { DmMeButton } from "../components/parts/DmMeButton";
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
        <div className="flex gap-4">
          <Social
            Icon={Github}
            href="https://github.com/fullstackslayer"
            title="Github"
          />

          <Social
            Icon={Twitter}
            href="https://twitter.com/fullstackslayer"
            title="Twitter"
          />

          <Social
            Icon={Instagram}
            href="https://instagram.com/fullstackslayer"
            title="Instagram"
          />
        </div>

        {/* Heading */}
        <h1 className="text-black2 dark:text-white2 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font__poppins font-extrabold text-left">
          Hey, I'm <span className="text-accent">Aaryaman</span>
        </h1>

        {/* Body */}
        <p className="text-black2 dark:text-white2 sm:text-lg md:text-[0.5rem] lg:text-xl xl:text-2xl font-medium text-left tracking-wider !leading-[1.5]">
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

const Social = ({
  Icon,
  href,
  title,
}: {
  Icon: any;
  href: string;
  title: string;
}) => {
  return (
    <a href={href} title={title} target="_blank">
      <Icon className="fill-[#070A0E] dark:fill-[#FFFFFF] hover:opacity-[0.6] duration-100 ease-in h-[1.7rem] w-[1.7rem]" />
    </a>
  );
};
