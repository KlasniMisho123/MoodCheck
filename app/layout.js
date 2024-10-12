import localFont from "next/font/local";
import { Fugaz_One, Open_Sans } from 'next/font/google';
import { AuthProvider } from "@/context/AuthContext";
// import { AuthProvider } from "../context/AuthContext";
import "./globals.css";
import Link from "next/link";
import Head from "./head";
import Logout from "@/components/Logout";
import Footer from "@/components/Footer";


const opensans  = Open_Sans ({ subsets: ["latin"], weight: ["400"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });


export const metadata = {
  title: "MoodCheck",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={"text-base  sm:text-lg textGradient " + fugaz.className}> MoodCheck </h1>
      </Link>
      <Logout /> 
    </header>
  )

  const footer = (
    <Footer />
  )

  return (
    <html lang="en">
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
