import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Choudhary | Software Developer",
  description:
    "Portfolio of Shubham Choudhary, Software Developer building scalable, modern, and intelligent digital experiences.",
  icons: {
    icon: "/shubham-logo.png",
    shortcut: "/shubham-logo.png",
    apple: "/shubham-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
