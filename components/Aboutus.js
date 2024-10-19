import { Poppins } from 'next/font/google';
import React from 'react'
import AboutusElement from './AboutusElement';

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const uniSplash = "https://images.unsplash.com/"
// TOTAL USERS, TOTAL EMOTIONS.
export default function Aboutus() {

  return (
    <section className='w-full flex flex-col gap-6 '>
      <div className='aboutUsBackground min-h-[300px] min-w-[400px] w-full '>
        <h1 className={'text-xl text-center mt-[60px] text-gray-100 ' + poppins.className} > About Us </h1>
      </div>
        <AboutusElement 
        title= "Our Mission "
        imgSrc = {uniSplash + 'photo-1463438690606-f6778b8c1d10?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        dsec = {"At Moodcheck, our mission is to empower individuals to take charge of their emotional well-being." + 
           "We strive to create a safe and supportive space where users can easily monitor their moods, reflect on their feelings," +
            "and gain insights into their emotional health. Through our user-friendly platform, we aim to foster a community that promotes" +
            "self-awareness, resilience, and proactive mental health practices. Together, we can break the stigma around mental" +
            "wellness and inspire a journey toward a more balanced and fulfilling life."}
        />
      <AboutusElement 
        title= "Our Story"
        imgSrc = {uniSplash + 'photo-1506869640319-fe1a24fd76dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        dsec = {"At Moodcheck, we believe that mental wellness begins with self-awareness." +
            "Our journey started with a simple idea: help people track their emotions in a way" +
            "that's easy, insightful, and empowering. With Moodcheck, we’ve created a platform where" +
            "you can monitor your mood, identify patterns, and gain insights into your emotional well-being. Whether" +
            "you're having a great day or facing challenges, we're here to help you understand your emotions and take control" +
            "of your mental health journey—one check-in at a time."}
           
        reverse
        />

        <div>
          <div>Team</div>
        </div>
    </section>
  )
}
