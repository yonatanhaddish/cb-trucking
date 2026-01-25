import "./globals.css";
import "@fontsource/oswald";

export const metadata = {
  title: "CB Trucking",
  description: "CB Trucking and Logistic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CB Trucking",
              url: "https://www.cbtransportationcanada.com",
              logo: "https://www.cbtransportationcanada.com/images/logo.png",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
