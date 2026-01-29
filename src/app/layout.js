import "./globals.css";
import "@fontsource/oswald";

export const metadata = {
  metadataBase: new URL("https://www.cbtransportationcanada.com"),
  alternates: {
    canonical: "/",
  },
  title: "CB Transportation | Refrigerated & Dry Van Trucking Toronto",
  description:
    "Reliable FTL & LTL trucking services in Toronto & GTA. Specializing in temperature-controlled reefers, storage trailer rentals, and logistics solutions.",
};

export default function RootLayout({ children }) {
  // 3. PRO SCHEMA: This tells Google you are a physical Trucking Business.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TruckingCompany",
    name: "CB Transportation",
    image: "https://www.cbtransportationcanada.com/images/logo.png",
    url: "https://www.cbtransportationcanada.com",
    telephone: "+1-416-919-3149",
    email: "cb@cbtransportation.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1646 Victoria Park Ave",
      addressLocality: "North York",
      addressRegion: "ON",
      postalCode: "M1R 1P7",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.733,
      longitude: -79.313,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "$$",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
