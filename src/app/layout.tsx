import type { Metadata } from "next";
import "./globals.css";
import "./scrollbar.css";

export const metadata: Metadata = {
  title: "JP PRINTING & SIGNS | Printing, Signage & Custom Print",
  description:
    "Explore printing, business cards, flyers, brochures, custom signs and promotional print solutions from JP PRINTING & SIGNS.",
  icons: {
    icon: "/jp_logo2.png",
    apple: "/jp_logo2.png",
  },
  openGraph: {
    title: "JP PRINTING & SIGNS",
    description: "Print that makes an impression.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}