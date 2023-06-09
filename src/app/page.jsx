import React from 'react'
import Image from 'next/image'
import logo1 from './images/logo.png'
import Link from 'next/link'
import { FaUser, FaLock, FaEye, FaEnvelope } from "react-icons/fa"

export const metadata = {
  title: 'Sign In',
  description: 'Generated by Benson Ibeabuchi',
}

export default function page() {
  return (    
    <div>
      <div className='bg-background bg-cover h-screen flex justify-center items-center'>
        <div className='bg-gradient-to-b from-[#E2ECFE] from-85% to-[#9EA8FA] to-100% w-96 overflow-clip rounded-3xl shadow-lg h-4/5 border'>
          <div className='h-3/6 text-white flex justify-center items-center'>
            <Image src={logo1} alt='logo' width={200}/>
          </div>
          <div className='grid place-content-center h-3/6'>
            <div className='grid absolute place-content-center w-96'>
                <div className='space-x-20 text-center font-semibold uppercase text-[#2B40F4]'>
                    <Link href={'/'}>
                        <button className='uppercase'>Sign In</button>
                    </Link>
                    <Link href={'/sign_up'}>
                        <button className='uppercase text-[#B5D3FD] hover:text-[#5f6ce2]'>Sign up</button>
                    </Link>
                </div>
                <div className='m-auto'>
                    <div className='bg-[#B5D3FD] h-1 rounded-full w-64 items-center'>
                        <div className='bg-[#2B40F4] h-1 rounded-l-full w-32'></div>
                    </div>
                </div>
                
                <div className='grid place-content-center'>
                    {/* <div className='relative flex items-center'>
                        <FaEnvelope className='absolute ml-3 text-[#2B40F4] pointer-events-none ' />
                        <input 
                        type="text"
                        name="email"
                        id="email"
                        placeholder='Email'
                        className='placeholder-[#AFAFAF] text-[#2B40F4] shadow-sm shadow-[#9EA8FA] my-2 w-72 rounded-full border-2 p-2 pl-8 border-[#9EA8FA]'/>
                    </div> */}

                    <div className='relative flex items-center'>
                        <FaUser className='absolute ml-3 text-[#2B40F4] pointer-events-none ' />
                        <input 
                        type="text"
                        name="username"
                        id="username"
                        placeholder='User name'
                        className='placeholder-[#AFAFAF] text-[#2B40F4] shadow-sm shadow-[#9EA8FA] my-2 w-72 rounded-full border-2 p-2 pl-8 border-[#9EA8FA]'/>
                    </div>
                
                    <div className='relative flex items-center'>
                        <FaLock className='absolute ml-3 text-[#2B40F4] pointer-events-none'/>
                        <input
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder='Password' 
                        className='placeholder-[#AFAFAF] text-[#2B40F4] shadow-sm shadow-[#9EA8FA] my-2 w-72 rounded-full border-2 p-2 pl-8 border-[#9EA8FA]'/>
                        <FaEye className=' absolute ml-64 text-[#a3b0c9] '/>
                    </div>
                </div>
                <div className='text-[#2B40F4] mt-16 font-semibold grid place-content-center justify-center'>
                    <button className='uppercase'>Sign in</button>
                    <div className='bg-[#2B40F4] h-1 rounded-full w-20 mb-2'></div>
                </div>
                <Link className='text-center' href={'/forgot_pass'}>
                  <button className='text-[#618cf7] text-xs mt-16'>Forgot your password?</button>  
                </Link>
                
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}