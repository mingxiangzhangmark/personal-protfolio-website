import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        <link rel="icon" href="/icons8-computer-windows-11-color-96.png" type="image/png" />
        <meta charSet="UTF-8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
