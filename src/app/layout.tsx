import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";


const montserrat = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pé na Lapa",
  description: "O Melhor restaurante da Lapa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br"  className={montserrat.className}>
      <body className="w-full h-full flex flex-col bg-[#0e1317]">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
