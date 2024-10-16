'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'
import Loading from './Loading';
import Login from './Login';
import Button from './Button';
import { Fugaz_One, Open_Sans } from 'next/font/google';
import Link from 'next/link';
import GetInTouchElement from './GetInTouchElement';
import axios from "axios";
import InputError from './InputError';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const opensans  = Open_Sans ({ subsets: ["latin"], weight: ["400"] });

export default function ContactUs() {
    const [contactName, setContactName] = useState("")
    const [contactEmail, setContactEmail ] = useState("")
    const [contactSubject, setContactSubject ] = useState("")
    const [contactText, setContactText ] = useState("")
    const [contactError, setContactError ] = useState("")
    const { currentUser, loading } = useAuth()
    
    async function handleContactSubmit(e) {
        e.preventDefault();
        
        
        setContactError("");
        
        if (checkValidEmail(contactEmail)) {
            // Reset form immediately -- no input loss?
            resetForm(); // web console warning err.
            try {
                const sendEmailResponse = await axios.post('http://localhost:5000/sendemail', {
                    contactName,
                    contactEmail,
                    contactSubject,
                    contactText
                });
                // You can handle success feedback here, if needed
                // resetForm(); -- ?? resets too late.
            } catch (error) {
                setContactError("Error sending email. Please try again.");
                console.log(error.message);
            }
        } else {
            setContactError("Invalid Email");
            console.log("ContactError: Invalid Email");
        }
    }
    
    function checkValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    function resetForm() {
        setContactName("")
        setContactEmail("")
        setContactSubject("")
        setContactText("")
    }

    if(loading) {
        return <Loading />
    }

    if (!currentUser) {
        return <Login />
    }

    return (
    <div className=''>
        <section className='w-full bg-indigo-400 p-4 min-h-[500px] rounded-lg '>
            
            <h1 className={'text-center p-6 sm:text-lg md:text-xl lg:text-2xl ' + fugaz.className }> Help us to improve  </h1>
            
            <div className='flex flex-row justify-evenly mt-4 '>
                <GetInTouchElement 
                    entryNumber={1}
                    title="ADDRESS"
                    icon={<i className="fa-solid fa-location-dot text-[#E94560] text-2xl "></i>}
                    contentOne="MoodCheck: Your Company"
                    contentTwo="123 Main St, Suite 100, Tbilisi, Georgia"
                />

                <GetInTouchElement 
                    entryNumber={2}
                    title="PHONE"
                    icon={<i className="fa-solid fa-phone text-[#E94560] text-2xl "></i>}
                    contentOne="Customer Support"
                    contentTwo="(123) 456-7890"
                />

                <GetInTouchElement 
                    entryNumber={3}
                    title="EMAIL"
                    icon={<i className="fa-solid fa-envelope text-[#E94560] text-2xl "></i>}
                    contentOne="General Inquiries"
                    contentTwo="info@Moodcheck.com"
                />
            </div>
        </section>


        <hr className='my-[40px] border-indigo-400 '/>

        <div className='max-w-[600px] mx-auto w-full'>
            <Link href={'/dashboard'}>
                <Button dark full text='Go to dashboard' />
            </Link>
        </div>

        <h1 className={'my-[40px] sm:text-xl md:text-2xl lg:text-3xl text-center ' + fugaz.className} >
             We <span className='textGradient '> Value </span> Your Feedback 
        <i className="fa-regular fa-comment-dots ml-2 textGradient"></i></h1>

        <div className='w-full flex justify-center p-4 '>
            
            <form onSubmit={handleContactSubmit} className='bg-indigo-100 flex flex-col items-center gap-4 p-6 h-[500px] w-[400px] rounded-lg border border-black '>

            <input className={'border border-black mt-4 rounded-sm p-[2px] ' + opensans.className }
                placeholder='Name'
                type='text' 
                value={contactName}
                onChange={(e) => {
                    setContactName(e.target.value)
                }}
                />

                { contactError ?  
                    (<div className='flex flex-col border-l-4 border-red-500 '>
                        <input className={'border border-0 rounded-sm p-[2px] focus:outline-none ' + opensans.className }
                        placeholder='Email'
                        required
                        type='text' 
                        value={contactEmail}
                        onChange={(e) => {
                            setContactEmail(e.target.value)
                        }}
                        />
                        <InputError errorText="Invalid Email" /> 
                    </div>)
                :   (<div className='flex flex-col '>
                        <input className={'border border-black rounded-sm p-[2px] ' + opensans.className }
                        placeholder='Email'
                        required
                        type='text' 
                        value={contactEmail}
                        onChange={(e) => {
                            setContactEmail(e.target.value)
                        }}
                        /> 
                        </div>)
                         }

                <select
                    className={"border border-black px-6 py-1 rounded-sm " + opensans.className}
                    value={contactSubject}
                    required
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
                required
                value={contactText}
                onChange={(e) => {
                    setContactText(e.target.value)
                }}

                />
                <Button 
                icon={<i className="fa-regular fa-paper-plane mr-2 "></i>}
                dark 
                text="Submit"
                type="submit" 
                />    

            </form>
        </div>
    </div>
    
    )
}
