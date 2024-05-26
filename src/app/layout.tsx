import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/cursor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ToastContainer/>
          <Cursor/>
         {children}
      </body>
    </html>
  );
}
