import React from 'react'
import { ReactTyped, Typed } from "react-typed";
import { useAuth0 } from "@auth0/auth0-react";



const Hero = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className='text-black'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-blue-500 font-bold md:text-5xl sm:text-4xl text-2xl pt-2'> FIND TALENT OR SHOWCASE IT.</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>HELPING EVERYONE</h1>
            <div className=' flex justify-center items-center'>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>A reliable & convenient platform to</p>
            <ReactTyped className='md:text-3xl sm:text-3xl text-xl font-bold pl-2' strings={['BUY','SELL','GROW']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-2xl text-xl font-extralight text-gray-500'>One stop solution for your day-to-day problems that you thought had no solution near-by. </p>
            <button className='bg-black hover:bg-blue-700 text-white font-bold py-2 w-[150px] rounded-3xl ease-in-out duration-500 my-6 mx-auto px-6' onClick={() => loginWithRedirect()}>Log In</button>

        </div>
    </div>
  )
}

export default Hero