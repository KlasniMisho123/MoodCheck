import React from 'react'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="p-4 sm:p-8 grid place-items-center bg-green-500 w-full">
      {/* <p className={"text-indigo-500 "}> Created with ❤️ </p> */}
        <div className='bg-red-500 rounded-[32px] p-6 flex flex-col gap-4 gap-6:md gap-8:lg '>
            <div>
                <h1>Ready? Start your own business</h1>
                <p>
                    We are here to start your new project and finish it soon
                </p>
            </div>
            <div className='flex justify-center'>
                <Button text="Contact Us" dark />
            </div>
        </div>
    </footer>
  )
}
