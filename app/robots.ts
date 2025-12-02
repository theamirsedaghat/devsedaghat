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
    sitemap: "https://amirsedaghat.com/sitemap.xml",
    host: "https://amirsedaghat.com", // برای جلوگیری از mirroring
  };
}
