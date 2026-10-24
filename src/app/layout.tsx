import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import RouteScrollReset from "@/components/layout/RouteScrollReset";
import "./globals.css";
import "./scrollbar.css";
import "./services.css";

const montserrat = Montserrat({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
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
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <RouteScrollReset />
        {children}
      </body>
    </html>
  );
}