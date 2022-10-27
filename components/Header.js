import Image from 'next/image'
import React from 'react'
import MyImageSvg from 'file:///Users/connoregan/Downloads/logoipsum-250.svg'
import { MagnifyingGlassIcon, PlusCircleIcon, BellIcon, Bars3Icon } from '@heroicons/react/24/outline'

function Header() {
  return (
    <div className='border-b shadow-sm bg-white sticky top-0 left-0 right-0 z-50'>
        <div className='flex justify-between max-w-6xl pt-1 pb-1 mx-5 xl:mx-auto'>
            {/* Left */}
            <div className='relative w-32 cursor-pointer'>
                <Image 
                src={MyImageSvg} 
                layout='fill' 
                objectFit='contain'
                />
               
            </div>
           
            {/* Middle */}
            <div className='relative p-3 rounded-md'>
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                    <MagnifyingGlassIcon className='h-5 w-5 text-gray-500'/>
                </div>
                <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black' type='text' placeholder='Search by Names, Bugs or Other'/>
            </div>

            {/* Right */}
            <div className='flex items-center justify-end space-x-6'>
                <PlusCircleIcon className='navBtn text-indigo-500'/>
                
                <BellIcon className='navBtn'/>
                <img className='h-10 rounded-full cursor-pointer' src='https://pbs.twimg.com/profile_images/1339645767456317440/I88FwsEv_400x400.jpg' alt='profile pic' />
            </div>
        </div>
    </div>
  )
}

export default Header
