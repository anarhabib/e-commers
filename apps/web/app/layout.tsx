import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flame Lenses",
  description: "Tail lights, headlights and side markers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
