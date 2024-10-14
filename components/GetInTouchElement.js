import React from 'react'

export default function GetInTouchElement(props) {
    const {title, icon, contentOne, contentTwo} = props
  return (
    <div>
        <div className='flex flex-col gap-4 text-center '>
            <div className='flex items-center justify-center w-16 h-16 py-5 bg-white rounded-full '>  {icon} </div>
            <h1>{title}</h1>
            <div className='flex flex-col gap-6 '>
                <span>{contentOne}</span>
                <span>{contentTwo}</span>
            </div>
        </div>
    </div>
  )
}
