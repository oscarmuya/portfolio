import { MetadataRoute } from "next";

const BASE_URL = "https://theoscar.xyz";
const PAGES = [
  { url: "", priority: 1 },
  { url: "/linkinbio", priority: 1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((item) => {
    return {
      url: BASE_URL + item.url,
      lastModified: new Date(),
      priority: item.priority,
    };
  });
}
