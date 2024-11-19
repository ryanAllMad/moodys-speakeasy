import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Italiana = localFont({
  src: "./fonts/Italiana-Regular.ttf",
  variable: "--font-italiana-reg",
  weight: "100 900",
});
const Lexend = localFont({
  src: "./fonts/LexendZetta-VariableFont_wght.ttf",
  variable: "--font-lexend-reg",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Moody's Speakeasy",
  description: "This app was developed from figma mood board to figma design to a Next app by Ryan Duer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Italiana.variable} ${Lexend.variable}`}>
        {children}
      </body>
    </html>
  );
}
