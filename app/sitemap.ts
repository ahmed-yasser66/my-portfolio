
export default async function sitemap() {
  const routes = [
    "",
  ].map((route) => ({
    url: `https://www.webdevultra.com${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));


  return [...routes];
}