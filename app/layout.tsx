import type { Metadata } from "next";
import { Open_Sans, Arizonia } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const arizonia = Arizonia({
  variable: "--font-arizonia",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chrissy Weems Scholarship",
  description:
    "The Chrissy Weems Scholarship was created to help the future entrepreneurs and small business owners of our world. Apply for this $1,000 award today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${arizonia.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
