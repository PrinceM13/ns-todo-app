import type { Metadata } from "next";
import { Inter, Itim } from "next/font/google";
import "./globals.css";

const itim = Itim({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NS Todo App",
  description: "neversitup todo app built by parames"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={itim.className}>{children}</body>
    </html>
  );
}
