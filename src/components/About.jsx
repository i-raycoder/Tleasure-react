import React from 'react'
import idea from '../components/Assets/idea.png'

const About = () => {
  return (
    <div className='w-full bg-black py-16 px-4'>
    <div className='max-w-[1240px]  mx-auto grid md:grid-cols-2 items-center'>
        <img className='w-[300px] mx-auto my-1'  src={idea} alt="/" />
        <div className='text-white max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>What is Tleasure?</p>
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>A one stop solution to your daily faced problems.</h1>
            <p className='md:text-2xl text-xl font-extralight text-gray-200'>Tleasure is a dynamic platform designed to help you uncover and showcase unique skills and talents. Whether you are a 'Talent Seeker' looking to discover exceptional services or a 'Talent Provider' eager to share your abilities with the world, Tleasure offers the perfect space to connect, collaborate, and thrive. Monetize your talents, find clients, or hire skilled professionals effortlessly. Join Tleasure today and explore a world where hidden talents shine and opportunities abound!</p>
            <button className='bg-white hover:bg-gray-300 text-black font-bold py-2 w-[200px] rounded-3xl my-6 mx-auto px-6'>Get Started.</button>
        </div>
    </div>
    </div>
  )
}

export default About