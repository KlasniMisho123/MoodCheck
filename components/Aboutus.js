import { Poppins } from 'next/font/google';
import React from 'react'
import AboutusElement from './AboutusElement';

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

// TOTAL USERS, TOTAL EMOTIONS.
export default function Aboutus() {
  return (
    <section className='w-full flex flex-col gap-6 '>
      <div className='aboutUsBackground min-h-[300px]'>
        <h1 className={'text-xl text-center mt-[60px] text-gray-100 ' + poppins.className} > About Us </h1>
      </div>
        <AboutusElement 
        title= "Our Mission "
        dsec = "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
        imgSrc = 'https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
      <AboutusElement 
        title= "Our Mission "
        dsec = "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
        imgSrc = 'https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        reverse
        />
    </section>
  )
}
