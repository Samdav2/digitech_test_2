import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "City Sunny Services | Your Trusted Everyday Service Partner",
  description: "We take your stress away so you can focus on what matters most. Professional Cleaning, Sneaker Wash, Laundry, Nanny, Room Finder, Outdoor Cleaning, and Private Chef services in Tembisa, Clayville, Kempton Park, and Midrand.",
  keywords: "cleaning services, sneaker wash, laundry, nanny, room finder, outdoor cleaning, private chef, Tembisa, Clayville, Kempton Park, Midrand, South Africa",
  openGraph: {
    title: "City Sunny Services",
    description: "Professional everyday services to make your life easier.",
    type: "website",
    locale: "en_ZA",
    siteName: "City Sunny Services",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen font-sans bg-crisp-white text-deep-black`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
