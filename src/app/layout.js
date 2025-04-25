import "./globals.css";

export const metadata = {
  title: "CB Trucking",
  description: "CB Trucking and Logistic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
