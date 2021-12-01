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
      <div className="flex flex-col container mx-auto w-[90%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40rem]">
        {/* Socials */}
        <div className="flex gap-3 md:gap-4 mb-[1.5rem]">
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
        <h1 className="text-black2 dark:text-white2 text-3xl sm:text-4xl md:text-5xl font__poppins font-extrabold text-left !leading-[1.2] mb-[1.3rem]">
          Hey, I'm <span className="text-accent">Aaryaman!</span>
        </h1>

        {/* Body */}
        <p className="text-black2 dark:text-white2 text-md sm:text-lg lg:text-xl text-left tracking-wider !leading-[1.5] mb-[1.7rem]">
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
      <Icon className="fill-[#070A0E] dark:fill-[#FFFFFF] hover:opacity-[0.6] duration-100 ease-in h-[1.4rem] w-[1.4rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[1.7rem] md:w-[1.7rem]" />
    </a>
  );
};
