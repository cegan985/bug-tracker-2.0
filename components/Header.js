import Image from 'next/image'
import React from 'react'
import MyImageSvg from 'file:///Users/connoregan/Downloads/logoipsum-250.svg'
import { MagnifyingGlassIcon, PlusCircleIcon, BellIcon, Bars3Icon, BugAntIcon } from '@heroicons/react/24/outline'
import { signIn, signOut, useSession, } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { useRouter } from 'next/router'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'


function Header() {
    const {data: session} = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    const router = useRouter()

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    //console.log(session)

  return (
    <div className='border-b dark:border-slate-700 bg-white dark dark:bg-slate-800 sticky top-0 z-50'>
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
                <input className='bg-gray-50 dark:bg-slate-900 dark:text-gray-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-slate-700 rounded-md focus:ring-[rgb(72,69,210)] focus:border-[rgb(72,69,210)]' type='text' placeholder='Search by Names, Bugs or Other'/>
            </div>

            {/* Right */}
            <div className='flex items-center justify-end space-x-6'>
                <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn text-gray-900 dark:text-white hover:text-[rgb(72,69,210)]'/>
                
                <BellIcon className='navBtn dark:text-white'/>
                <Bars3Icon className='md:hidden h-8 inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out active:scale-100 '/>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="">
                <img className='h-10 w-10 rounded-full cursor-pointer border p-[1.5px]' src={session.user.image} alt='profile pic' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md border dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 dark:bg-slate-700 dark:text-white text-gray-900 border-b dark:border-slate-700' : 'text-gray-700 dark:text-white border-b dark:border-slate-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 dark:bg-slate-700 dark:text-white text-gray-900 border-b dark:border-slate-700' : 'text-gray-700 dark:text-white border-b dark:border-slate-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 dark:bg-slate-700 dark:text-white text-gray-900 border-b dark:border-slate-700' : 'text-gray-700 dark:text-white border-b dark:border-slate-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => { signOut({ redirect: true, callbackUrl: '/auth/signin', }); }}
                    type='button'
                    className={classNames(
                      active ? 'bg-gray-100 dark:bg-slate-700 dark:text-white text-gray-900' : 'text-gray-700 dark:text-white',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

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
