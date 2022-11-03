import React from 'react'
import { HomeIcon, BugAntIcon, AdjustmentsHorizontalIcon, ArrowLeftOnRectangleIcon} from '@heroicons/react/24/outline'
import { signIn, signOut, useSession, } from 'next-auth/react'

function SideNav() {
    const {data: session} = useSession()
  return (
    <div>
        <div className='grid grid-cols-1 justify-start bg-white dark:bg-slate-800 border-r p-6 w-1/2 h-[calc(100vh-71px)] z-20 fixed -left-96 lg:w-64 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
            <div className='flex flex-col justify-start items-center'>
                <div className='my-4 border-b border-gray-100 dark:border-slate-700 pb-4'>
                    <div className='flex hover:scale-105 transition-all duration-150 ease-out active:scale-100 mb-2 justify-start items-center gap-4 hover:bg-gray-100 hover:dark:bg-slate-900 p-3 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                        <HomeIcon className='navBtn dark:text-white'/>
                        <h3 className='font-semibold text-gray-900 dark:text-white'>Dashboard</h3>
                    </div>
                    <div className='flex hover:scale-105 transition-all duration-150 ease-out active:scale-100 mb-2 justify-start items-center gap-4 hover:bg-gray-100 hover:dark:bg-slate-900 p-3 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                        <BugAntIcon className='navBtn dark:text-white'/>
                        <h3 className='font-semibold text-gray-900 dark:text-white'>Bugs</h3>
                    </div>
                    <div className='flex hover:scale-105 transition-all duration-150 ease-out active:scale-100 mb-2 justify-start items-center gap-4 hover:bg-gray-100 hover:dark:bg-slate-900 p-3 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                        <AdjustmentsHorizontalIcon className='navBtn dark:text-white'/>
                        <h3 className='font-semibold text-gray-900 dark:text-white'>Settings</h3>
                    </div>
                    <div onClick={() => { signOut({ redirect: true, callbackUrl: '/auth/signin', }); }} className='flex hover:scale-105 transition-all duration-150 ease-out active:scale-100 mb-2 justify-start items-center gap-4 hover:bg-gray-100 hover:dark:bg-slate-900 p-3 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                        <ArrowLeftOnRectangleIcon className='navBtn dark:text-white'/>
                        <h3 className='font-semibold text-gray-900 dark:text-white'>Sign out</h3>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default SideNav
