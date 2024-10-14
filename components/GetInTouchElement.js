import { Poppins } from 'next/font/google';
import React from 'react'

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function GetInTouchElement(props) {

    const {title, icon, contentOne, contentTwo} = props
  return (
    <div>
        <div className='flex flex-col gap-4 text-center items-center '>
            <div className='flex items-center justify-center w-16 h-16 py-5 bg-white rounded-full '>  {icon} </div>
            <h1 className={' ' + poppins.className }>{title}</h1>
            <div className='flex flex-col gap-6'>
                <span className='font-bold text-gray-800 text-sm bg-gray-100 p-2 rounded-md '>{contentOne}</span>
                <span className='text-gray-600 text-xs bg-gray-100 p-2 rounded-md '>{contentTwo}</span>
            </div>
        </div>
    </div>
  )
}
