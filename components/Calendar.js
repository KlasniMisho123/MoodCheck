'use client'
import { baseRating, gradients } from '@/utils';
import { Fugaz_One, Playpen_Sans } from 'next/font/google';
import React, { useState } from 'react'


const months = { 'January': 'Jan', 'February': 'Feb', 'March': 
  'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 
  'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct',
  'November': 'Nov', 'December': 'Dec' };
const monthArr = Object.keys(months)
const now = new Date();
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'];

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const playFont = Playpen_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Calendar(props) {
  const { demo, completeData, handleSetMood } = props
  
  const now = new Date()
  const currMonth = now.getMonth()
  const [selectedMonth, setSelectMonth] = useState(Object.keys(months)[currMonth])
  const [selectedYear, setSelectedYear] = useState(now.getFullYear())
  const [selectedDay, setSelectedDay] = useState("")
  const [selectedDateSentence, setSelectedDateSentence] = useState()
  const [moodDescActive, setMoodDescActive] = useState(false)
  const [noteMonth, setNoteMonth] = useState("")
  const [noteYear, setNoteYear] = useState("")

  const numericMonth = monthArr.indexOf(selectedMonth)
  const data = completeData?.[selectedYear]?.[numericMonth] || {}


  function handleIncrementMonth(val) {
    // value = +1 -1
    /*if we hit bounds of the months, \then we can just adjust year 
    that is displayed instead */
    if(numericMonth + val < 0) {
      //set month value == 11 and decrement the year
      setSelectedYear(selectedYear - 1)
      setSelectMonth(monthArr[monthArr.length - 1])
    } else if(numericMonth + val > 11) {
      //set month value = 0 and increment the year
      setSelectedYear(selectedYear + 1)
      setSelectMonth(monthArr[0])
    } else {
      setSelectMonth(monthArr[numericMonth + val])
    }
  }

  function handleMoodDesc(day) {
    if(selectedDay === day ) {
      setMoodDescActive(!moodDescActive)
    } else {
      setMoodDescActive(moodDescActive)
    }
    setSelectedDay(day)
  }
  
  const monthNow = new Date(selectedYear, Object.keys(months).indexOf(selectedMonth), 1)
  const firstDayOfMonth = monthNow.getDay();
  const daysInMonth  = new Date(selectedYear, Object.keys(selectedMonth).indexOf(selectedMonth) + 1, 0).getDate()

  const daysToDisplay = firstDayOfMonth + daysInMonth;
  const numRows = (Math.floor(daysToDisplay / 7 )) + (daysToDisplay % 7 ? 1 : 0)
  
  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-5 gap-4'> 
        <button onClick={() => {
          handleIncrementMonth(-1)
        }} className='mr-auto text-indigo-400 text-lg sm:text-xl duration-200 hover:opacity-60'> 
          <i className="fa-solid fa-circle-chevron-left"></i> 
        </button>

        <p className={'text-center col-span-3 capitalized whitespace-nowrap textGradient ' + fugaz.className }> {selectedYear} - {selectedMonth} </p>

        <button onClick={() => {
          handleIncrementMonth(+1)
        }} className='ml-auto text-indigo-400 text-lg sm:text-xl duration-200 hover:opacity-60'>
           <i className="fa-solid fa-circle-chevron-right"> </i>
        </button>
      </div>
      <div className='flex flex-col overflow-hidden gap-1
      py-4 sm:py-6 md:py-10'>
        {[...Array(numRows).keys()].map((row, rowIndex) => {
          return(
            <div key={rowIndex} className='grid grid-cols-7 gap-1'> 
              {dayList.map((dayOfWeek, dayOfWeekIndex) => {
                let dayIndex = (rowIndex * 7) + 
                dayOfWeekIndex - (firstDayOfMonth - 1)
                
                let dayDisplay = dayIndex > daysInMonth ? 
                false : (row === 0 && dayOfWeekIndex < firstDayOfMonth) ? false : true

                let isToday = dayIndex === now.getDate()
                
                if(!dayDisplay) {
                  return (
                    <div className='bg-white' key={dayOfWeekIndex} />
                  )
                }

                let color = demo ?
                gradients.indigo[baseRating[dayIndex]]:
                dayIndex in data ?
                 gradients.indigo[data[dayIndex].scale]:
                 'white';

                let sentenceExits = data[dayIndex]?.desc ? true : false

                return(
                  <button onClick={() => {
                    setMoodDescActive(!moodDescActive)
                    setSelectedDay(dayIndex)
                    setNoteMonth(selectedMonth)
                    setNoteYear(selectedYear)
                    if (data[dayIndex]) {
                      if (data[dayIndex].desc) {
                          setSelectedDateSentence(data[dayIndex].desc);
                      } else {
                          setSelectedDateSentence("");
                      }
                  } else {
                      setSelectedDateSentence("");
                  }
                    
                    if(selectedDay === dayIndex ) {
                      setMoodDescActive(!moodDescActive)
                    } else {
                      setMoodDescActive(true)
                    }
                    
                  }}>
                    <div style={{background: color}} className={'text-xs sm:text-sm border  \
                      border-solid p-2 flex items-center gap-2 \
                    justify-between rounded-lg ' + 
                    (isToday ? " border-indigo-400 " : " border-indigo-100 ") + 
                    (color === "white" ? " text-indigo-400 " : " text-white ")} 
                    key={dayOfWeekIndex}>
                      <p>{dayIndex} </p>
                      {sentenceExits ? <i className="fa-solid fa-anchor hover:text-black mr-2 "></i> : " "}
                    </div>
                  </button>
                )
              })}
            </div>
          )
        })}

      </div>
      {moodDescActive ? 
      (<div className='p-4 border border-gray rounded-lg bg-gray-100 '>
          <div className={'flex flex-col justify-center items-center gap-8  ' + playFont.className}>
            <h1 className='ml-4 ' > {selectedDay} {noteMonth} {noteYear} </h1> 
            <h2 className='p-2 '> {selectedDateSentence} </h2>
          </div>
      </div>)
      : null}
    </div>
  )
}
