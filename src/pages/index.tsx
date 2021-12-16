import { useContext, useState } from "react";
import { ArrowRight } from "../components/icons/ArrowRight";
import { Github } from "../components/icons/Github";
import { Instagram } from "../components/icons/Instagram";
import { Twitter } from "../components/icons/Twitter";
import { Button } from "../components/ui/Button";
import { ThemeContext } from "../modules/ThemeProvider";
import { useRouter } from "next/router";
import Sound from "react-sound";

export default function Home() {
  const { colorMode } = useContext(ThemeContext);
  const [playStatus, setPlayStatus] = useState<
    "PLAYING" | "STOPPED" | "PAUSED"
  >("STOPPED");

  const router = useRouter();

  return (
    <>
      <div
        className={`relative w-screen h-screen grid place-items-center ${
          colorMode === "light" ? "bg__light" : "bg__dark"
        }`}
      >
        <div className="flex flex-col container mx-auto w-[90%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40rem]">
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
        </div>

        {/* Proceed Button */}
        <Button
          curvature="max"
          bg="accent"
          fg="light"
          size="h-[2.5rem] w-[2.5rem] md:h-[3.4rem] md:w-[3.4rem] hover:md:h-[3.7rem] hover:md:w-[3.7rem]"
          className="absolute bottom-[3rem] right-[3rem] grid place-items-center transition-all duration-300 ease-in-out"
          clickHandler={async () => {
            setPlayStatus("PLAYING");
            await new Promise((resolve) => setTimeout(resolve, 300));
            await router.push("/about");
          }}
        >
          <ArrowRight className="fill-[#fff] h-[2rem] w-[2rem] md:h-[2.7rem] md:w-[2.7rem]" />
        </Button>
      </div>
      <Sound url="click_sound.wav" playStatus={playStatus} />
    </>
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
