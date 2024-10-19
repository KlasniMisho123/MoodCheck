import { Poppins } from 'next/font/google';
import React from 'react'

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function AboutusElement(props) {

    const { reverse, title, dsec, imgSrc } = props

  return (
    <div>
        <div className={'flex mt-[60px] gap-[30px] w-full ' + (reverse ?  "flex-row-reverse" :"flex-row")}>
        <div>
        <span className={'text-lg text-indigo-500 text-center ' + poppins.className } >{title} </span>
        <p className='w-[400px] bg-red-200 '> {dsec} </p>
        </div>
        <div>
          <img className="w-[300px] "
          src={imgSrc}/>
        </div>
      </div>

    </div>
  )
}
