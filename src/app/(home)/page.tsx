import MainContent from "./MainContent";

function page() {
  const colors = ["blue"];
  const usedColor = colors[Math.floor(Math.floor(Math.random() * 10) / 2)];

  return <MainContent usedColor={"blue"} />;
}

export default page;
