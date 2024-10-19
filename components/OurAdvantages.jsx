import React from 'react'
import AdvantagesCard from './AdvantagesCard'

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
    <div className='py-8 bg-green-200 flex flex-col justify-around items-around gap-4'>
        <h1 className='text-center '> Our Advantages </h1>
        <div className='flex flex-row py-4 gap-8 '> 
          {advantageCardArray.map((card, index) => ( 
            <AdvantagesCard 
              key={index}
              title={card.title}
              icon={card.icon}
            />
          ))}
        </div>
    </div>
  )
}
