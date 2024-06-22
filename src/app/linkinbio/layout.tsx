import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link In Bio",
  description: "get links listed in my socials",
  openGraph: {
    type: "article",
    url: "https://theoscar.xyz",
    title: "Link In Bio",
    description: "get links listed in my socials",
    siteName: "Link In Bio",
    locale: "en",
    images: "/icon.png",
    tags: [],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
