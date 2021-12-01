import { useState } from "react";
import { DISCORD_ID } from "../../constants";
import { Alert } from "../ui/Alert";
import { Button } from "../ui/Button";

export const DmMeButton = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function clickHandler() {
    // copy DISCORD_ID to clipboard
    try {
      if ("clipboard" in navigator) {
        await navigator.clipboard.writeText(DISCORD_ID);
      } else {
        document.execCommand("copy", true, DISCORD_ID);
      }

      console.log("Copied to clipboard");
      setError(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
      setCopied(false);
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  }

  return (
    <>
      {/* success alert */}
      <Alert
        show={copied}
        message="Copied Discord Tag To Clipboard!"
        type="success"
      />

      {/* error alert */}
      <Alert
        show={error}
        message="An error occurred while copying to clipboard"
        type="error"
      />

      {/* DM Me Button */}
      <Button
        clickHandler={clickHandler}
        curvature="low"
        bg="accent"
        fg="light"
        size="h-[2.7rem] w-[8rem] lg:h-[3rem] lg:w-[10rem]"
      >
        {"DM Me!"}
      </Button>
    </>
  );
};
