import "./globals.css";

import { Poppins } from "next/font/google";

import smd from "@/content/data/siteMetaData";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const base = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-base",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: smd.title,
    template: "%s | " + smd.title,
  },
  description: smd.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={smd.language} className={`${base.variable} `}>
      <body>
        <Header id="1" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
