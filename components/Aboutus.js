'use client'
import { Fugaz_One, Poppins } from 'next/font/google';
import React from 'react'
import AboutusElement from './AboutusElement';
import TeamMember from './TeamMember';
import OurAdvantages from './OurAdvantages';
import { useAuth } from '@/context/AuthContext';

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const uniSplash = "https://images.unsplash.com/"

const demoTeamMembers = [
  {
    name: 'Bob Smith',
    imgSrc: 'https://plus.unsplash.com/premium_photo-1663047610372-8ce07a023009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VvfGVufDB8fDB8fHww', 
    position: 'Project Manager',
  },
  {
    name: 'Alice Johnson',
    imgSrc: 'https://media.istockphoto.com/id/2161986811/photo/portrait-of-modern-businesswoman.jpg?s=612x612&w=0&k=20&c=yzzoXxN2uegfO-RflGYHezCkm6_cYkURT3CCboHIPOQ=',
    position: 'UX Designer',
  },
  {
    name: 'Angela Yu',
    imgSrc: 'https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg', 
    position: 'Lead Developer',
  },
];


export default function Aboutus() {

  const {totalUsers, totalEmotions, totalFeedback } = useAuth()

  return (
    <section className='w-full flex flex-col gap-6 '>
      <div className='min-h-[300px] flex flex-row justify-center min-w-[400px] w-full '>
        <img src='https://imgcdn.stablediffusionweb.com/2024/9/12/c057c246-d34d-4a90-bb4c-484bea5d955e.jpg' 
        className='w-full h-full object-cover '
        />
        <h1 className={'text-xl text-center mt-[60px] text-gray-100 z-3 absolute ' + poppins.className} > About Us </h1>
      </div>

        <section> 
          <div className='border border-gray-200 flex flex-col items-center bg-indigo-200 '>  
            
            <h1 className={'text-xl textGradient p-4 ' + fugaz.className }> Stats section</h1> 
            
            <div className={'text-base flex flex-row gap-6 p-4 whitespace-nowrap '} >
                <div className=' flex flex-col items-center border bg-white '>
                  <div className={'text-lg flex gap-2 p-2 items-center '  + poppins.className}> <p className='text-red-500 '> Total Users </p> <i className="fa-solid fa-user text-xl "></i> </div> 
                  <p className={'text-red-500 text-lg '  + poppins.className}> {totalUsers} </p>
                </div>
                <div className=' flex flex-col items-center border  bg-white '>
                  <div className={'text-lg flex gap-2 p-2 items-center '  + poppins.className}> <p className='text-red-500 '> Total Emotions </p> <i className="fa-solid fa-face-grin-stars text-xl "></i> </div> 
                  <p className={'text-red-500 text-lg '  + poppins.className}> {totalEmotions} </p>
                </div>
                <div className=' flex flex-col items-center border bg-white '>
                  <div className={'text-lg flex gap-2 p-2 items-center '  + poppins.className}> <p className='text-red-500 '> Total Feedback </p> <i className="fa-regular fa-comments text-xl "></i> </div> 
                  <p className={'text-red-500 text-lg '  + poppins.className}> {totalFeedback} </p>
                </div>
            </div>  

          </div> 

        </section>

        <AboutusElement 
        title= "Our Mission "
        imgSrc = {uniSplash + 'photo-1463438690606-f6778b8c1d10?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        dsec = {"At Moodcheck, our mission is to empower individuals to take charge of their emotional well-being." + 
           "We strive to create a safe and supportive space where users can easily monitor their moods, reflect on their feelings," +
            "and gain insights into their emotional health. Through our user-friendly platform, we aim to foster a community that promotes" +
            "self-awareness, resilience, and proactive mental health practices. Together, we can break the stigma around mental" +
            "wellness and inspire a journey toward a more balanced and fulfilling life."}
        />

        <OurAdvantages />

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

        <div className='flex flex-col border border-gray-200 min-w-[430px] '>
          <div className={'text-center text-base lg:text-lg textGradient ' + fugaz.className}> Our Team </div>
          <div className='flex flex-row justify-around p-4 gap-4 overflow-hideen '>
            {demoTeamMembers.map((member, index ) => (
              <TeamMember 
              key={index} 
              name={member.name}
              imgSrc={member.imgSrc}
              position= {member.position}
            />
            ))} 
          </div>
        </div>

        <div className='text-gray-100 flex flex-row justify-around gap-6 min-w-[430px] '> 
            <div className='flex flex-col items-center bg-blue-400 w-full py-8 gap-2 '>
              <i className="fa-solid fa-mountain text-4xl "></i>
              <h1 className={' text-lg ' + fugaz.className }> Goal </h1>
              <div className='flex flex-cols justify-center '>
                <div className={'text-sm text-center ' + poppins.className } >Adventure, Balance, Growth </div> 
              </div>
                <div className='flex h-[150px] mt-6 text-sm px-1 text-center '> At Moodcheck, we aim to enhance customer satisfaction through exceptional service and build lasting relationships. 
                  We also seek to grow our market share by exploring new opportunities and fostering a culture of innovation. 
                </div>
                <div className='pb-2 text-center '> Goals aren't strictly measured </div>
            </div>

            <div className='flex flex-col items-center bg-blue-400 w-full py-8 gap-2 '>
              <i className="fa-solid fa-bullseye text-4xl  "></i>
              <h1 className={' text-lg '+  fugaz.className }> Objective </h1>
              <div className='flex flex-cols justify-center '>
                <div className={'text-sm ' + poppins.className }>Focus, Achieve, Learn</div>
              </div>
              <div className='flex h-[150px] mt-6 text-sm px-1 text-center '> We aim for a 90% customer satisfaction rating next year through effective feedback. 
                We plan to expand into two new markets and launch three innovative products by year-end.
              </div>
              <div className='pb-2 text-center '> Objectives aren't strictly measured </div>
            </div>
        </div>

    </section>
  )
}
