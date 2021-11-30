import { useContext } from "react";
import { ThemeContext } from "../modules/ThemeProvider";

export default function Home() {
  const { colorMode } = useContext(ThemeContext);

  return (
    <div
      className={`w-screen h-screen ${
        colorMode === "light" ? "bg__light" : "bg__dark"
      }`}
    ></div>
  );
}
