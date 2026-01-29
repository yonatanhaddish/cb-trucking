export default function sitemap() {
  const baseUrl = "https://www.cbtransportationcanada.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
