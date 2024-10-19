import { Fugaz_One, Poppins } from 'next/font/google';
import React from 'react'

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function AboutusElement(props) {

    const { reverse, title, dsec, imgSrc } = props

  return (
    <div>
        <div className={'flex flex-col mt-[60px] gap-[30px] w-full p-4 ' + (reverse ? 'md:flex-row-reverse' : 'md:flex-row')}>

        <div >
        <h1 className={'text-lg text-indigo-500 text-center ' + fugaz.className } > {title} </h1>
        <p className='w-full bg-indigo-200 p-2 mt-2 '> {dsec} </p>
        </div>
        <div>
          <img className=" min-w-[400px] w-[400px] h-[400px] object-cover "
          src={imgSrc}/>
        </div>
      </div>

    </div>
  )
}
