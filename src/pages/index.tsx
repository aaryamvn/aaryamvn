import { useContext } from "react";
import { ThemeContext } from "~/modules/ThemeProvider";
import { SocialRow } from "~/components/ui/SocialRow";
import { SocialType } from "~/types";
import { AGE } from "~/constants";

export default function Home() {
  const { colorMode } = useContext(ThemeContext);

  return (
    <div
      className={`relative w-screen h-screen grid place-items-center ${
        colorMode === "light" ? "home__bg-light" : "home__bg-dark"
      }`}
    >
      <div className="flex flex-col container mx-auto w-[90%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50rem]">
        {/* Heading */}
        <h1 className="text-black2 dark:text-white2 font__mono text-[1.6rem] sm:text-[1.7rem] md:text-[2.3rem] lg:text-[3rem] font-extrabold text-left !leading-[1.2] mb-[1.3rem]">
          {AGE}-year-old pioneer aspiring to bring about change via innovation.
        </h1>

        {/* Body */}
        <p className="text-black2 dark:text-white2 text-md sm:text-lg lg:text-xl text-left tracking-wider !leading-[1.5] mb-[1.7rem]">
          I’m Aaryaman: A middle-school engineer and entrepreneur building{" "}
          <strong>impactful</strong> products on a daily basis. I design and
          implement elegant software with the help of modern tools.
        </p>

        {/* Socials */}

        <div className="flex gap-3 md:gap-4 mb-[1.5rem]">
          <SocialRow Social={Social} />
        </div>
      </div>
    </div>
  );
}

const Social: SocialType = ({ Icon, href, title }) => {
  return (
    <a href={href} title={title} target="_blank">
      <Icon className="hover:opacity-[0.6] duration-100 ease-in h-[1.4rem] w-[1.4rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[1.7rem] md:w-[1.7rem]" />
    </a>
  );
};
