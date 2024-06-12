import localFont from "next/font/local";

const mr_med = localFont({
  src: "./mr-med.woff2",
  display: "swap",
  variable: "--font-med",
});
const lxe = localFont({
  src: "./lxe.woff",
  display: "swap",
  variable: "--font-lxe",
  weight: "300",
});

export { lxe, mr_med };
