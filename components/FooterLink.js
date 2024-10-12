import { Fugaz_One } from 'next/font/google';
import Link from 'next/link'
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function FooterLink(props) {
    const { text, link } = props

  return (
    <div className='text-xs md:text-sm lg:text-base footerLink '>
        <Link href={link} >
            <i className="fa-solid fa-chevron-right"></i>
            <span className={'text-sm footerLink ' + fugaz.className}> {text} </span> 
        </Link>
    </div>
  )
}