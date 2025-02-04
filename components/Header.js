'use client'
import React from 'react'
import { useState } from "react";
import Logout from "@/components/Logout";
import Link from "next/link";
import { Fugaz_One, Open_Sans, Poppins } from 'next/font/google';

const opensans  = Open_Sans ({ subsets: ["latin"], weight: ["400"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });


export default function Header() {
    const [isDay, setIsDay] = useState(true)

    function handleThemeChange() {
        setIsDay(!isDay)
        document.body.classList.toggle("dark-theme", !isDay);
    }
  return (
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
       
      <button className='theme-btn'
      onClick={()=>{
        handleThemeChange()
      }}
      >
        {isDay? 
        (
            <i className="fa-solid fa-sun theme-icon day"></i>
        ):(
            <i className="fa-solid fa-moon theme-icon night"></i>
        )}
        
      </button>
      <Logout /> 
    </div>
  </header>
  )
}
