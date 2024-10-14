'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'
import Loading from './Loading';
import Login from './Login';
import Button from './Button';
import { Fugaz_One, Open_Sans } from 'next/font/google';
import Link from 'next/link';
import GetInTouchElement from './GetInTouchElement';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const opensans  = Open_Sans ({ subsets: ["latin"], weight: ["400"] });

export default function ContactUs() {
    const [contactName, setContactName] = useState("")
    const [contactEmail, setContactEmail ] = useState("")
    const [contactSubject, setContactSubject ] = useState("")
    const [contactText, setContactText ] = useState("")
    const { currentUser, loading } = useAuth()

    function handleContactSubmit() {
        console.log(`Name: ${contactName}`)
        console.log("Email: ", contactEmail)
        console.log("Subject: ", contactSubject)
        console.log("Text: ", contactText)

        
    }

    if(loading) {
        return <Loading />
    }

    if (!currentUser) {
        return <Login />
    }

    return (
    <div className=''>
        <section className='w-full bg-indigo-200 p-4 min-h-[500px]'>
            {/* GET IN TOUCH SECTION */}
            <h1 className={'text-center p-6 sm:text-lg md:text-xl lg:text-2xl ' + fugaz.className }> Get in touch </h1>
            <div className='flex flex-row justify-evenly mt-4 '>
                <GetInTouchElement 
                    title="ADDRESS"
                    icon={<i className="fa-solid fa-location-dot text-red-500 text-2xl "></i>}
                    contentOne="SS"
                    contentTwo="S2"
                />

                <GetInTouchElement 
                    title="Phone"
                    icon={<i className="fa-solid fa-phone text-red-500 text-2xl "></i>}
                    contentOne="SS"
                    contentTwo="S2"
                />


                <GetInTouchElement 
                    title="Email"
                    icon={<i className="fa-solid fa-envelope text-red-500 text-2xl "></i>}
                    contentOne="SS"
                    contentTwo="S2"
                />
            </div>
        </section>


        <hr className='my-[40px] border-indigo-500 '/>

        <div className='max-w-[600px] mx-auto w-full'>
            <Link href={'/dashboard'}>
                <Button dark full text='Go to dashboard' />
            </Link>
        </div>

        <h1 className={'my-[40px] sm:text-xl md:text-2xl lg:text-3xl text-center ' + fugaz.className} >
             We <span className='textGradient '> Value </span> Your Feedback 
        <i className="fa-regular fa-comment-dots ml-2 textGradient"></i></h1>

        <div className='w-full flex justify-center p-4 '>
            
            <div className='bg-indigo-100 flex flex-col items-center gap-4 p-6 h-[500px] w-[400px] rounded-lg border border-black '>

            <input className={'border border-black mt-4 rounded-sm p-[2px] ' + opensans.className }
                placeholder='Name'
                type='text' 
                value={contactName}
                onChange={(e) => {
                    setContactName(e.target.value)
                }}
                />

                <input className={'border border-black rounded-sm p-[2px] ' + opensans.className }
                placeholder='Email'
                type='text' 
                value={contactEmail}
                onChange={(e) => {
                    setContactEmail(e.target.value)
                }}
                />
                
                <select
                    className={"border border-black px-6 py-1 rounded-sm " + opensans.className}
                    defaultValue=""
                    value={contactSubject}
                    onChange={(e) => {
                        setContactSubject(e.target.value)
                    }}
                >
                    <option value="" disabled>Select a subject</option>
                    <option value="bugs">Bugs</option>
                    <option value="ideas">Ideas</option>
                    <option value="features">Features</option>
                    <option value="improvements">Improvements</option>
                    <option value="other">Other</option>
                </select>

                <textarea className={'border border-black max-h-[215px] min-h-[30px] rounded-sm ' + opensans.className }
                placeholder='Context ' 
                value={contactText}
                onChange={(e) => {
                    setContactText(e.target.value)
                }}
                />
                <Button 
                icon={<i className="fa-regular fa-paper-plane mr-2 "></i>}
                dark 
                text="Submit" 
                clickHandler={handleContactSubmit}
                />    
            </div>
        </div>
    </div>
    
    )
}
