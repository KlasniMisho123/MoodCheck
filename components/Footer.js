import React from 'react'
import Button from './Button'
import { Fugaz_One } from 'next/font/google';
import Link from 'next/link';


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <footer className="py-4 sm:py-8 grid place-items-center border w-full ">
        <div className='bg-white border  border-black shadow rounded-[32px] p-6 flex flex-col gap-4 gap-6:md gap-8:lg '>
            <div>
                <h1 className={"flex gap-1 text-lg sm:text-xl md:text-1xl lg:text-2xl "+ fugaz.className}> <span className={'text-indigo-400 '}> Ready? </span> Start your own business</h1>
                <p className='text-gray-400 text-xs sm:text-xs md:text-sm lg:text-base '>We are here to start your new project and finish it soon </p>     
            </div>
            <div className='flex justify-center'>
                <Button text={"Contact Us"} icon={<i className="fa-regular fa-clipboard"></i>} dark />
            </div>
        </div>
        <div className='bg-green-100 w-full py-4 flex p-4 flex justify-evenly items-center '>
          <div className='border border-black p-4 '>
          <Link href={'/'}>
            <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}> MoodCheck </h1>
          </Link>
          <p className='text-sm '> An intuitive web platform that allows you to effortlessly monitor and reflect on your moods and daily experience </p>
          <div className='flex '>
            <Link href={'/'}> 
              <div> <i className="fa-brands fa-linkedin-in "></i> </div>
            </Link>
            <Link href={'/'}> 
              
            </Link>
            <Link href={'/'}> 
              
            </Link>
            </div>
          </div>

          <div>
            <p>ss</p>
          </div>

        </div>
    </footer>
  )
}
