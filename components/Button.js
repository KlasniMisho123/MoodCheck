import React from 'react'
import { Fugaz_One, Open_Sans } from 'next/font/google';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Button(props) {
  const { text, dark, full, clickHandler, icon } = props
  
  return (
    <button onClick={clickHandler} className={' rounded-full overflow-hidden border-2 duration-200 hover:opacity-60 border border-solid border-indigo-600 ' + (dark ? 'text-white bg-indigo-600 ': 'text-indigo-600 ') + (full ? ' grid place-items-center w-full ' : ' ')}>  
        <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + fugaz.className}>{icon} {text}</p>
    </button>
  )
}
