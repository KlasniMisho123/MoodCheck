import React from 'react'
import Button from './Button'
import { Fugaz_One } from 'next/font/google';
import Link from 'next/link';


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <footer className="py-4 sm:py-8 grid place-items-center border w-full ">
        <div className='bg-white border border-black shadow rounded-[32px] p-6 mb-4 flex flex-col gap-4 gap-6:md gap-8:lg '>
            <div>
                <h1 className={"flex gap-1 text-lg sm:text-xl md:text-1xl lg:text-2xl "+ fugaz.className}> <span className={'text-indigo-400 '}> Ready? </span> Start your own business</h1>
                <p className='text-gray-400 text-xs sm:text-xs md:text-sm lg:text-base '>We are here to start your new project and finish it soon </p>     
            </div>
            <div className='flex justify-center'>
                <Button text={"Contact Us"} icon={<i className="fa-regular fa-clipboard"></i>} dark />
            </div>
        </div>
        <div className='bg-green-100 w-full py-4 p-4 flex justify-center '>
          <div className='flex flex-col gap-6 p-6 max-w-md '>
          <Link href={'/'}>
            <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}> MoodCheck </h1>
          </Link>
          <p className="text-sm break-words text-gray-500 text-xs md:text-base lg:text-base">
            An intuitive web platform that allows you to effortlessly monitor and reflect on your moods and daily experience.
          </p>
          <div className='flex gap-4'>
            <Link href={'https://www.linkedin.com/in/misho-silagava-9829aa292/'}> 
              <i className="fa-brands fa-linkedin-in text-blue-600 "></i>
            </Link>
            <Link href={'https://github.com/KlasniMisho123'}> 
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link href={'/'}> 
              ...
            </Link>
            </div>
          </div>

          <div className='flex flex-row gap-12 mx-auto py-8 '>

            <div className='flex flex-col gap-3 '>
              <h4 className={'text-gray-500 ' + fugaz.className}> Usefull Links
              <div className='border border-black'/>
              </h4>
              <div className='text-xs  md:text-sm lg:text-base '> <i className="fa-solid fa-chevron-right"></i> <span className={'text-sm ' + fugaz.className}> Privacy Policy</span> </div>
              <div className='text-xs  md:text-sm lg:text-base '> <i className="fa-solid fa-chevron-right"></i> <span className={'text-sm ' + fugaz.className}> Privacy Policy</span> </div>
              <div className='text-xs  md:text-sm lg:text-base '> <i className="fa-solid fa-chevron-right"></i> <span className={'text-sm ' + fugaz.className}> Privacy Policy</span> </div>
            </div>

            <div className='flex flex-col gap-3 '>
            <h4 className={'text-gray-500 ' + fugaz.className}> More Info
            <div className='border border-black'/>
            </h4>
            <div className='text-xs md:text-sm lg:text-base '> <i className="fa-solid fa-chevron-right"></i> <span className={'text-sm ' + fugaz.className}> About Us </span> </div>
            <div className='text-xs md:text-sm lg:text-base '> <i className="fa-solid fa-chevron-right"></i> <span className={'text-sm ' + fugaz.className}> Contact Us </span> </div>
            <div className='text-xs md:text-sm lg:text-base '> <i className="fa-solid fa-chevron-right"></i> <span className={'text-sm ' + fugaz.className}> Support </span> </div>
            </div>

          </div>

        </div>
    </footer>
  )
}
