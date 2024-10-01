import localFont from "next/font/local";
import { Fugaz_One, Open_Sans } from 'next/font/google';

import "./globals.css";

const opensans  = Open_Sans ({ subsets: ["latin"], weight: ["400"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });


export const metadata = {
  title: "MoodCheck",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={"text-base  sm:text-lg textGradient " + fugaz.className}> MoodCheck </h1>
      <div className="flex items-center justify-between "> PlaceHolder </div>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={"text-indigo-500 "}> Created with ❤️ </p>
    </footer>
  )

  return (
    <html lang="en">
      <body
        className={` w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ${opensans.className} antialiased`}
      >
        {header} 
        {children}
        {footer}
      </body>
    </html>
  );
}
