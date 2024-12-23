import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/util";
import GrainEffect from "@/components/visualEffects/GrainEffect";
import Cursor from "@/components/cursor/Cursor";


const MainFront = Bricolage_Grotesque({
  subsets: ["latin"],
});

const OswaldFront = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const PixelFont = localFont({
  src: "../public/assets/fonts/pixel-font-7.ttf",
  variable: "--font-pixel",
});


export const metadata: Metadata = {
  title: "Mark's Portfolio",
  description: "Mark Official Portfolio Website",
  keywords: ["Mark", "Portfolio", "Website", "Next.js", "Mingxiang Zhang"],
  authors: [{ name: "Mingxiang Zhang" }],
  creator: "Mingxiang Zhang",
  publisher: "Mingxiang Zhang",
  formatDetection:{
    telephone: true,
    email: true,
    address: true
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" >
     
      <head>
        <link rel="icon" href="/icons8-computer-windows-11-color-96.png" />
        <meta charSet="UTF-8" />
      </head>
      <body
        className={cn(MainFront.className, OswaldFront.variable, PixelFont.variable)}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
