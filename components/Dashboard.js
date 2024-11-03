'use client'
import { Fugaz_One, Play, Playpen_Sans } from 'next/font/google';
import React, { useEffect, useState } from 'react'
import Calendar from './Calendar';
import { useAuth } from '@/context/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import Login from './Login';
import Loading from './Loading';
import Button from './Button';
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const playFont = Playpen_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Dashboard() {
  const { currentUser, userDataObj, setUserDataObj, loading } = useAuth()
  const [data, setData] = useState({})
  const [joke, setJoke] = useState("")
  const [moodSentence, setMoodSentence ] = useState('')
  const [moodScale, setMoodScale] = useState("")
  const now = new Date()

  function countValues() {
    let total_number_of_days = 0
    let sum_moods = 0
    for (let year in data) {
      for (let month in data[year]) {
        for (let day in data[year][month]) {
          let days_mood = data[year][month][day]["scale"]
          total_number_of_days++
          sum_moods += days_mood
        }
      }
    }
    return { num_days: total_number_of_days, average_mood: (sum_moods / total_number_of_days).toFixed(2) }
  }

  const statuses = {
    ...countValues(),
    time_remaining: `${23 - now.getHours()}H ${60 - now.getMinutes()}M`,
  }
  
  async function handleSetMood(mood) {

    setMoodScale(mood)

    const day = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
     
    try {
      const newData = { ...userDataObj }
      if (!newData?.[year]) {
        newData[year] = {}
      }
      if (!newData?.[year]?.[month]) {
        newData[year][month] = {}
      }
      newData[year][month][day] = mood

      setData(newData)

      setUserDataObj(newData)

      const docRef = doc(db, 'users', currentUser.uid)
      const res = await setDoc(docRef, {
        [year]: {
          [month]: {
            [day]: {
              "scale": mood,
            }
          }
        }
      }, { merge: true })

    } catch (err) {
      console.log('Failed to set data: ', err.message)
    }
  }

  async function handleMoodSentence() {

    const day = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
     
    try {
      const newData = { ...userDataObj }
      if (!newData?.[year]) {
        newData[year] = {}
      }
      if (!newData?.[year]?.[month]) {
        newData[year][month] = {}
      }

      newData[year][month][day] = moodScale

      setData(newData)

      setUserDataObj(newData)

      const docRef = doc(db, 'users', currentUser.uid)
      const res = await setDoc(docRef, {
        [year]: {
          [month]: {
            [day]: {
              "desc": moodSentence
            }
          }
        }
      }, { merge: true })
    } catch (err) {
      console.log('Failed to set data: ', err.message)
    }
    setMoodSentence("")
  }

  async function getJoke() {
    try {
      const generateJokeApi = await axios.get("https://api.api-ninjas.com/v1/jokes", {  
          headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_JOKE_API_KEY }
      });

      if (generateJokeApi.data && generateJokeApi.data.length > 0) {
          setJoke(generateJokeApi.data[0].joke);
      } else {
          setJoke("No joke found.");
      }
  } catch (err) {
      console.log("Error During Generating Joke: ", err.response.data); 
      setJoke("Error fetching joke.");
  }
    
  }


  const moods = {
    '&*@#$': '😭',
    'Sad': '😔',
    'Existing': '😶',
    'Good': '😊',
    'Elated': '😍',
  }

  useEffect(() => {
    if (!currentUser || !userDataObj) {
      return
    }
    setData(userDataObj)
  }, [currentUser, userDataObj])

  if(loading) {
    return <Loading />
  }

  if (!currentUser) {
    return <Login />
  }

  return (
    <div className='flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16 '>
      <div className='grid grid-cols-3 bg-indigo-50 text-indigo-500 p-4 gap-4 rounded-lg'>
        {Object.keys(statuses).map((status, statusIndex) => {
          return(
            <div key={statusIndex} className=' flex flex-col gap-1 sm:gap-2 '>
              <p className='font-medium capitalize text-xs sm:text-sm truncate '> {status.replaceAll("_", " ")} </p>
              <p className={'text-base sm:text-lg truncate ' + fugaz.className}> {statuses[status]}{status === 'num_days' ? ' 🔥' : ''}</p>
            </div>
          )
        } )}
      </div>
      <h4 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className}> How do you <span className='textGradient'>feel</span> today? </h4>
      <div className='flex items-strech flex-wrap gap-4 '>
        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <button onClick={() => {
              const currentMoodValue = moodIndex + 1
              handleSetMood(currentMoodValue)
            }} className={' p-4 px-8 rounded-2xl duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex flex-col items-center gap-2 flex-1 shadow '} key={moodIndex}> 
              <p className='text-4xl sm:text-5xl md:text-6xl'>{moods[mood]}</p>
              <p className={'text-indigo-500 text-xs sm:text-sm md:text-base ' + fugaz.className}>{mood}</p>
            </button>
          )
        })}
      </div>

      <div className='p-4 flex flex-row gap-6 '>
        <input className='p-2 border-2 border-indigo-500 rounded-lg w-full max-w-[700px] min-w-[150px] focus:outline-none '
         placeholder='sentence'
         value={moodSentence}
         onChange={(e)=>{
          setMoodSentence(e.target.value)
         }}
         />
        <Button text='Submit'
         dark 
         clickHandler={handleMoodSentence}
         />
      </div>
      
      <Calendar completeData={data} handleSetMood={handleSetMood} moodScale={moodScale} />
      <div className='flex flex-col justify-center items-center py-6 gap-4 bg-indigo-100 rounded-lg shadow '> 
        <h1 className={'p-4 sm:text-lg md:text-xl ' + fugaz.className }> Make Your Day <span className='textGradient '> Better </span> </h1> 
        <h1 className={'px-6 text-center ' + playFont.className }> {joke} </h1>
        <div></div>
        <Button 
        text="Generate Joke"
        dark 
        clickHandler={getJoke}
        />
      </div>
    </div>
  )
}
