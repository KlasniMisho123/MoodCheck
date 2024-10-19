import React from 'react'
import AdvantagesCard from './AdvantagesCard'
import { Fugaz_One } from 'next/font/google';


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const advantageCardArray = [
  {
    title: "Private",
    icon: <i className="fa-solid fa-shield-halved"></i>
  }, 
  {
    title: "Simple",
    icon: <i className="fa-solid fa-egg"></i>
  },
  {
    title: "Targeted",
    icon: <i className="fa-solid fa-bullseye"></i>
  },
  {
    title: "Insightful",
    icon: <i className="fa-solid fa-lightbulb"></i>
  },
  {
    title: "Engaging",
    icon: <i className="fa-brands fa-sketch"></i>
  }, 
  {
    title: " User Friendly ",
    icon: <i className="fa-solid fa-users"></i>
  }, 
]

export default function OurAdvantages() {
  return (
    <div className='py-8 border border-gray-200 flex flex-col justify-center items-center gap-4 min-w-[430px] overflow-hidden '>
        <h1 className={'text-center text-base lg:text-lg textGradient ' + fugaz.className}> Our Advantages </h1>
        <div className='flex flex-row py-4 overflow-hidden '> 
        {advantageCardArray.map((card, index) => ( 
            <div className='flex-shrink-0 w-1/3' key={index}> 
                <AdvantagesCard 
                    title={card.title}
                    icon={card.icon}
                />
            </div>
        ))}
        </div>
    </div>
  )
}
