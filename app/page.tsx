import Image from "next/image";
import About from "./pages/about-me";
import Projects from "./pages/projects";

export default function Home() {
  return (
    <div className="justify-center bg-black font-sans">
      <About></About>
      <Projects></Projects>
    </div>
  );
}
