import type { Metadata } from "next";
import { Titan_One } from "next/font/google";
import "./globals.css";
import "./scrollbar.css";

const titanOne = Titan_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-titan-one",
});

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
    <html lang="en" className={titanOne.variable}>
      <body>{children}</body>
    </html>
  );
}