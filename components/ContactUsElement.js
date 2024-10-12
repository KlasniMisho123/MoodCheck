import React from 'react'
import Button from './Button'
import Link from 'next/link'
import { Fugaz_One } from 'next/font/google'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function ContactUsElement() {
  return (
    <div className='bg-white border border-black shadow rounded-[32px] p-6 mb-4 flex flex-col gap-4 gap-6:md gap-8:lg '>
        <div>
            <h1 className={"flex gap-1 text-lg sm:text-xl md:text-1xl lg:text-2xl "+ fugaz.className}> <span className={'text-indigo-400 '}> Ready? </span> Start your own business</h1>
            <p className='text-gray-400 text-xs sm:text-xs md:text-sm lg:text-base '>We are here to start your new project and finish it soon </p>     
        </div>
        <div className='flex justify-center'>
            <Link href={'/contactus'}> 
                <Button text={"Contact Us"} icon={<i className="fa-regular fa-clipboard"></i>} dark/>
            </Link>
        </div>
    </div>
  )
}
