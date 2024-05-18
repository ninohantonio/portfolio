import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antonino | portfolio",
  description: "Antonino portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Cursor/>
         {children}
      </body>
    </html>
  );
}
