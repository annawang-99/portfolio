import About from "./pages/about-me";
import Projects from "./pages/projects";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="scroll-bar" />
        <About />
        <Projects />
    </div>
  );
}
