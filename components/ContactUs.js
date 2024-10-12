'use client'
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import Loading from './Loading';
import Login from './Login';
import Button from './Button';

export default function ContactUs() {

const { currentUser, loading } = useAuth()

    if(loading) {
        return <Loading />
    }

    if (!currentUser) {
        return <Login />
    }

    return (
    <div className='w-full flex justify-center p-4 '>
        <div className='bg-indigo-100 flex flex-col items-center gap-4 p-6 h-[500px] w-[400px] rounded-lg border border-black'>
            <input className='border border-black mt-4 ' placeholder='Email' type='text'/>
            <select
                className="border border-black px-6 "
                defaultValue=""
            >
                <option value="" disabled>Select a subject</option>
                <option value="bugs">Bugs</option>
                <option value="ideas">Ideas</option>
                <option value="features">Features</option>
                <option value="improvements">Improvements</option>
                <option value="other">Other</option>
            </select>

            <textarea className='border border-black max-h-[215px] ' placeholder='Context ' />
            <Button text="Submit" icon={<i className="fa-regular fa-paper-plane mr-2 "></i>} dark />
        </div>
    </div>
    )
}
