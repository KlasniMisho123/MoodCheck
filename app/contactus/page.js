import React from 'react'
import Main from "@/components/Main"
import { useAuth } from "@/context/AuthContext";
import ContactUs from '@/components/ContactUs';

export const metadata = {
    title: "MoodCheck ⋅ Contact Us"
};

export default function ContactUsPage() {

    return(
        <Main>
            <ContactUs />
        </Main>
    )

}
