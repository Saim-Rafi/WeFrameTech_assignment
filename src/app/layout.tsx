import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeFrameTech Assignment",
  description:
    "This is a blog website built using Next.js as an assignment from WeFrameTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
