import { Fugaz_One, Poppins } from 'next/font/google';
import React from 'react'
import useHover from "components/customHooks/useHover";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function TeamMember(props) {
    const { name, imgSrc, position } = props
    const [hoverRef, isHovered] = useHover();

  return (
    <div className={`flex flex-col gap-4 transition-all duration-300 ${isHovered ? " scale-105" : ""}`}
    ref={hoverRef}> 
        <h1 className={'text-center p-2 text-lg whitespace-nowrap ' + fugaz.className } > {name}</h1>
        <img src={imgSrc} className='w-[200px] h-[200px] object-cover ' />
        <h3 className={'text-center p-2 text-sm ' + poppins.className }> {position} </h3>
    </div>
  )
}
