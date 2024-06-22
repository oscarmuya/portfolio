import About from "../_components/about/About";
import Footer from "../_components/footer/Footer";
import Header from "../_components/header/Header";
import Projects from "../_components/projects/Projects";
import MainContent from "./MainContent";

export const dynamic = "force-dynamic";

function page() {
  const colors = ["blue"];
  const usedColor = colors[Math.floor(Math.floor(Math.random() * 10) / 2)];

  return (
    <div className="body">
      <MainContent />
      <div id="scrollContent">
        <Header color={usedColor} />
        <Projects />
        <About />
      </div>

      <div className="z-30 pointer-events-auto">
        <Footer theme={"light"} />
      </div>
    </div>
  );
}

export default page;
