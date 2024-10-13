'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'
import Loading from './Loading';
import Login from './Login';
import Button from './Button';
import { Fugaz_One, Open_Sans } from 'next/font/google';
import Link from 'next/link';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const opensans  = Open_Sans ({ subsets: ["latin"], weight: ["400"] });

export default function ContactUs() {
    const [contactEmail, setContactEmail ] = useState("")
    const [contactSubject, setContactSubject ] = useState("")
    const [contactText, setContactText ] = useState("")

    const { currentUser, loading } = useAuth()

    function handleContactSubmit() {
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
        
        <h1 className={'my-[40px] sm:text-xl md:text-2xl lg:text-3xl text-center ' + fugaz.className} > We <span className='text-indigo-500 '> Value </span> Your Feedback </h1>

        <div className='w-full flex justify-center p-4 '>
            
            <div className='bg-indigo-100 flex flex-col items-center gap-4 p-6 h-[500px] w-[400px] rounded-lg border border-black'>
                <input className={'border border-black mt-4 rounded-sm p-[2px] ' + opensans.className }
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

        <hr className='my-[40px] border-indigo-500 '/>

        <div className='max-w-[600px] mx-auto w-full'>
            <Link href={'/dashboard'}>
                <Button dark full text='Go to dashboard' />
            </Link>
        </div>
        <hr className='my-[40px] border-indigo-500 '/>

    </div>
    
    )
}
