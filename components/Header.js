import Image from 'next/image'
import React from 'react'
import MyImageSvg from 'file:///Users/connoregan/Downloads/logoipsum-250.svg'
import { MagnifyingGlassIcon, PlusCircleIcon, BellIcon, Bars3Icon, BugAntIcon } from '@heroicons/react/24/outline'
import { signIn, signOut, useSession, } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { useRouter } from 'next/router'

function Header() {
    const {data: session} = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    const router = useRouter()

    //console.log(session)

  return (
    <div className='border-b bg-white sticky top-0 left-0 right-0 z-50'>
        <div className='flex justify-between max-w-6xl pt-1 pb-1 mx-5 xl:mx-auto'>
            {/* Left */}
            <div className='relative w-32 cursor-pointer'>
                <Image 
                src={MyImageSvg} 
                layout='fill' 
                objectFit='contain'
                />
               
            </div>
           { session ? (
            <>
            {/* Middle */}
            <div className='relative p-3 rounded-md'>
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                    <MagnifyingGlassIcon className='h-5 w-5 text-gray-500'/>
                </div>
                <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black' type='text' placeholder='Search by Names, Bugs or Other'/>
            </div>

            {/* Right */}
            <div className='flex items-center justify-end space-x-6'>
                <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn text-[rgb(72,69,210)]'/>
                
                <BellIcon className='navBtn'/>
                <Bars3Icon className='md:hidden h-8 inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out active:scale-100 '/>
                <img className='h-10 w-10 rounded-full cursor-pointer border p-[1.5px] ' src={session.user.image} alt='profile pic' />
            </div>
            </>
           ): (
            <button className='relative p-3 rounded-md' onClick={signIn}>Sign In</button>
           )}
        </div>
    </div>
  )
}

export default Header
