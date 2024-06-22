import type { Metadata } from "next";
import "./globals.css";
import "./app.css";
import { mr_med, lxe } from "@/styles/fonts";
import ProgressBarWrapper from "./_wrappers/ProgressBarWrapper";

export const metadata: Metadata = {
  title: "Oscar Muya",
  description: "Just Me",
  authors: [{ name: "oscar" }, { name: "Admin" }],
  openGraph: {
    type: "article",
    url: "https://theoscar.xyz",
    title: "Oscar Muya",
    description: "Just Me",
    siteName: "Oscar Muya",
    locale: "en",
    images: "/icon.png",
    tags: [],
  },
  applicationName: "Oscar Muya",
  twitter: {
    card: "summary",
    site: "@https://theoscar.xyz",
    title: "Oscar Muya",
    description: "Just Me",
    images: [{ url: "/icon.png", width: 500, height: 500 }],
  },
  robots: "index, follow",
  icons: "/icon.png",
  other: { "revisit-after": "1 days" },
  alternates: { canonical: "https://theoscar.xyz" },
  metadataBase: new URL("https://theoscar.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mr_med.variable} ${lxe.className}  ${lxe.variable} `}>
        <ProgressBarWrapper>{children}</ProgressBarWrapper>
      </body>
    </html>
  );
}
