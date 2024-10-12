'use client'
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import Loading from './Loading';
import Login from './Login';

export default function ContactUs() {

const { currentUser, loading } = useAuth()

    if(loading) {
        return <Loading />
    }

    if (!currentUser) {
        return <Login />
    }

    return (
    <div>
        <input placeholder='Email' />
    </div>
    )
}
