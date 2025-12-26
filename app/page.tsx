import Image from "next/image";
import About from "./pages/about-me";
import Projects from "./pages/projects";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <div className="snap-start min-h-screen"><About /></div>
      <div className="snap-start min-h-screen"><Projects /></div>
    </div>
  );
}
