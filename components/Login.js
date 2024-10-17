'use client'
import React, { useState } from 'react'
import { Fugaz_One } from 'next/font/google';
import Button from './Button';
import { useAuth } from '@/context/AuthContext';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [authenticating, setAuthenticating] = useState(false)
  const [errorResponseMessage, setErrorResponseMessage] = useState("")
  const [loginError, setLoginError] = useState("")

  const { signup, login } = useAuth()

  async  function handleSubmit() {

    // late with single itteration
    if(!email || !password || password.length < 6) {
      if(password.length < 6 ) {
        setErrorResponseMessage("Password should consist atleast 6 char")
      }
      return
    }
    setErrorResponseMessage("")
    setAuthenticating(true)
    try {
      if(isRegister) {
        console.log("signing up a new user")
        setLoginError("")
        await signup(email, password)
      } else {
        console.log("Logging in exsisting user")
        setLoginError("")
        await login(email, password)
      } 
    } catch(err) {
      {isRegister ? setLoginError("Invalid Email") : setLoginError("Invalid email or password. Please try again.")}
    } finally {
      setAuthenticating(false)
    }
      
  }

  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + fugaz.className}>{isRegister ? 'Register' : 'Log In'}</h3>
      <p> You're one step away! </p>
      {loginError? <p className='text-red-500'> {loginError} </p> : null}
      <input className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-md outline-none '
      placeholder='Email'
      value={email}
      onChange={(e) => {
        setEmail(e.target.value)
      }}
      />
      <input className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-md outline-none '
      placeholder='Password' type='password'
      value={password}
      onChange={(e) => {
        setPassword(e.target.value)
      }}
      />
      {errorResponseMessage ? <p className='text-red-500'> {errorResponseMessage} </p> : null}
      <div className=' max-w-[400px] w-full mx-auto '>
        <Button clickHandler={handleSubmit} text={authenticating ? 'Submitting' : 'Submit'} full />
      </div>
      <p className='text-center'>{isRegister ? "Already have an account? " : "Don\'t have an accaunt? "}
      <button
        onClick={() => {
          setIsRegister(!isRegister);
          setErrorResponseMessage("");
          setLoginError("");
        }}
         className='text-indigo-600'>{isRegister ? "Login" : "Sign up"}</button>
        </p>
    </div>
  )
}