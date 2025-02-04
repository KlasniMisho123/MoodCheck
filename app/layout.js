import localFont from "next/font/local";
import { Fugaz_One, Open_Sans, Poppins } from 'next/font/google';
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import Link from "next/link";
import Head from "./head";
import Logout from "@/components/Logout";
import Footer from "@/components/Footer";


const opensans  = Open_Sans ({ subsets: ["latin"], weight: ["400"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });


export const metadata = {
  title: "MoodCheck",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}> MoodCheck </h1>
      </Link>
      <div className="flex flex-row items-center gap-4 ">
        <div className="flex flex-row min-w-[300px] justify-evenly gap-4 ">
          <Link href={'/dashboard'}>
            <p className={"text-indigo-500 text-base overflow-hidden whitespace-nowrap navSection " + fugaz.className}> Dashboard </p>
          </Link>
          <Link href={'/contactus'}>
            <p className={"text-indigo-500 text-base overflow-hidden whitespace-nowrap navSection " + fugaz.className}> Contact Us</p>
          </Link>
          <Link href={'/aboutus'}>
            <p className={"text-indigo-500 text-base overflow-hidden whitespace-nowrap navSection " + fugaz.className }> About Us</p>
          </Link>
        </div>
          <Logout /> 
      </div>
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
