import type { Metadata } from "next";
import { Playfair_Display, Inter, Lato } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/common/SideNav";
import Footer from "@/components/common/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurora Luxe Travel - Where Elegance Meets Adventure",
  description: "Tailored luxury journeys to the world's most exclusive destinations. Experience unparalleled elegance and adventure with Aurora Luxe Travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${lato.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <SideNav />
        <div className="ml-20">
          <main className="min-h-screen">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
