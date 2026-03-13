import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.identity.fullName,
    short_name: siteConfig.identity.name,
    description: siteConfig.identity.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDF9",
    theme_color: siteConfig.identity.themeColor,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
