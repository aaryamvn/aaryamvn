import React from "react";
import { SocialType } from "~/types";

import { FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export const SocialRow: React.FC<{
  Social: SocialType;
}> = ({ Social }) => {
  return (
    <>
      <Social
        Icon={FiGithub}
        href="https://github.com/fullstackslayer"
        title="Github"
      />

      <Social
        Icon={FiTwitter}
        href="https://twitter.com/fullstackslayer"
        title="Twitter"
      />

      <Social
        Icon={FiInstagram}
        href="https://instagram.com/fullstackslayer"
        title="Instagram"
      />

      <Social Icon={FaDiscord} href="" title="Discord" />
    </>
  );
};
