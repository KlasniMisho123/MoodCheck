import localFont from "next/font/local";
import { Fugaz_One, Open_Sans, Poppins } from 'next/font/google';
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import Head from "./head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";


const opensans  = Open_Sans ({ subsets: ["latin"], weight: ["400"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export const metadata = {
  title: "MoodCheck",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {

  const header = (
    <Header />
  )

  const footer = (
    <Footer />
  )

  return (
    <html lang="ka">
      <Head />
      <AuthProvider>
        <body
          className={` w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ${opensans.className} antialiased`}
        >
          {header} 
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
