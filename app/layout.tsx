import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Eccommerce Store",
  description: "Ecommerce Store built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-stone-950">
      <body
      >
        {children}
      </body>
    </html>
  );
}
