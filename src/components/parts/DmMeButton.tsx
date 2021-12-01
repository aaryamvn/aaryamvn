import { useState } from "react";
import { DISCORD_ID } from "../../constants";
import { Alert } from "../ui/Alert";

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

      <button
        className="h-[3rem] w-[10rem] bg-accent text-white rounded-full hover:opacity-[0.6] duration-100 ease-in font__poppins font-semibold"
        onClick={clickHandler}
      >
        {"DM Me!"}
      </button>
    </>
  );
};
