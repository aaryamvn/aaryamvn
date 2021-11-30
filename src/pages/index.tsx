import { useContext } from "react";
import { ThemeContext } from "../modules/ThemeProvider";

export default function Home() {
  const {} = useContext(ThemeContext);

  return <div className="w-screen h-screen"></div>;
}
