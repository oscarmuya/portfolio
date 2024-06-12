import MainContent from "./MainContent";

function page() {
  const colors = ["orange", "yellow", "pink", "violet", "green"];
  const usedColor = colors[Math.floor(Math.floor(Math.random() * 10) / 2)];

  return <MainContent usedColor={usedColor} />;
}

export default page;
