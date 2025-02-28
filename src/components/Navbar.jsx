import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useAuth0 } from "@auth0/auth0-react";


export const Navbar = () => {

    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [nav, setNav] = useState(false)
    const   handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-20 max-2-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full text-3xl font-bold text-blue-500'>Tleasure.</h1>
        <ul className='hidden md:flex'>
            
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Developers</li>
            <li className='p-4'>Contact</li>
            <li className='p-4'><button onClick={() => loginWithRedirect()}>LogIn</button></li>
            
        </ul>

    
 
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu color='black' size={25} />}
            
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-[#f0f8ff] ease-in-out duration-700' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-blue-500 m-4'>Tleasure.</h1>

                <ul className='uppercase p-2'>
            <li className='p-4 border-b border-b-black'>Home</li>
            <li className='p-4 border-b border-b-black'>About</li>
            <li className='p-4 border-b border-b-black'>Developers</li>
            <li className='p-4'>Contact</li>
                </ul>
            </div>
    </div>
  )
}
