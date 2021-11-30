import { useState } from "react";
import { DISCORD_ID } from "../../constants";

export const DmMeButton = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean>("");

  async function clickHandler() {
    // copy DISCORD_ID to clipboard
    try {
      if ("clipboard" in navigator) {
        await navigator.clipboard.writeText(DISCORD_ID);
      } else {
        document.execCommand("copy", true, DISCORD_ID);
      }

      console.log("Copied to clipboard");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
      setError("Error copying to clipboard");
      setTimeout(() => setError(false), 2000);
    }

    console.log(error, copied);
    // notify user
  }

  return (
    <button
      className="h-[3rem] w-[10rem] bg-accent text-white rounded-full hover:opacity-[0.6] duration-100 ease-in font__poppins font-semibold"
      onClick={clickHandler}
    >
      {"DM Me!"}
    </button>
  );
};
