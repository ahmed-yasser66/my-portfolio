export default function robots() {
  const base = "https://www.webdevultra.com";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}