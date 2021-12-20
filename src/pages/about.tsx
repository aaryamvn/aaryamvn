import React from "react";
import { Layout } from "~/components/hoc/Layout";

export default function About() {
  return (
    <Layout pageTitle="About Me">
      <div className="flex flex-col gap-1 mt-[2rem]">
        <h2 className="font-bold text-[1.2rem]">Who Am I?</h2>
        <p className="ml-3 text-[0.9rem] text-black1 dark:text-white1 mt-2">
          I’m a 13-year-old innovator that loves forming new connections and
          talking to like-minded folks. I’ve always had a deep love for software
          and entered the world of tech at the age of 7. I’m passionate about
          clean, practical, and performant code and love designing rich UI’s.
          You can find me lurking around on Twitter in my free time, expanding
          my network, writing, or catching up on tech-twitter updates.
        </p>
      </div>

      <div className="flex flex-col gap-1 mt-[2rem]">
        <h2 className="font-bold text-[1.2rem]">What I’m Building</h2>
        <p className="ml-3 text-[0.9rem] text-black1 dark:text-white1 mt-2">
          I’m working on a few consumer services and communites at the moment.
          <ul className="list-disc ml-6 mt-2 flex flex-col gap-2">
            <li>
              Firstly, I’m building{" "}
              <ProjectLink href="https://triffle.co" name="Triffle" />. It’s a
              seamless interface for individuals to obtain tech guidance from
              credible advisors, in real-time.
            </li>

            <li>
              I’m also working on{" "}
              <ProjectLink href="https://polenhq.com" name="Polen" />. The lack
              of a powerful PM system for OSS led to the start of Polen. We’re
              recreating how open-source-software is planned and managed.
            </li>
            <li>
              As a side venture, I’m co-founding{" "}
              <ProjectLink
                href="https://buildergroop.com"
                name="Buildergroop"
              />
              . It’s a community built specifically for young pioneers, aspiring
              to be an enouraging hub for progress and dream chasing.
            </li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}

const ProjectLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <a href={href} className="text-blue" target="_blank">
      {name}
    </a>
  );
};
