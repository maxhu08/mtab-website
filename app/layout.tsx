import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "~/components/navbar";

export const metadata: Metadata = {
  title: "mtab",
  description: "the modern new tab extension"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="ltr" className="antialiased bg-neutral-900 font-jetbrains-mono">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
