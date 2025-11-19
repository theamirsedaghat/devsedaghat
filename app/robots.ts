import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // همه crawlers
        allow: "/",
        disallow: ["/admin/", "/private/"], // صفحات حساس رو بلاک کن
      },
      {
        userAgent: ["Googlebot", "Bingbot", "YandexBot"], // crawlers خاص
        allow: "/",
      },
    ],
    sitemap: "https://devsedaghat.com/sitemap.xml",
    host: "https://devsedaghat.com", // برای جلوگیری از mirroring
  };
}
