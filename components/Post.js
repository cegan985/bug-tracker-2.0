import { Menu, Transition } from '@headlessui/react'
import { useSession } from 'next-auth/react'
import React, { Fragment, useState } from 'react'
import PostHeader from './PostHeader'
import {menuState} from '../atoms/bugDropAtom'
import { useRecoilState } from 'recoil'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import moment from 'moment'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Post({ bug, reporter, date, status, assignee, severity }) {
  const {data: session} = useSession()
  const [open, setOpen] = useRecoilState(menuState)


  return (
    <div className='container mx-auto sm:px-8'>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md overflow-hidden"
      >
      <table className='min-w-full leading-normal'>
    <tbody>
            <tr className='cursor-pointer duration-300 ml-3'>
              <td class="px-5 py-5 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 w-52 text-sm">
                <p class="text-gray-900 dark:text-white whitespace-no-wrap overflow-y-scroll">{bug}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 dark:border-slate-700 overflow-y-scroll bg-white dark:bg-slate-800 w-10 sm:w-44 text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10 overflow-y-scroll">
                    <img
                      class="w-full h-full rounded-full"
                      src={session.user.image}
                      alt=""
                    />
                  </div>
                  <div class="flex items-center ml-3">
                    <p class="text-gray-900 dark:text-white whitespace-no-wrap">
                      {reporter}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 w-36 text-sm">
                <p class="text-gray-900 dark:text-white whitespace-no-wrap">{moment(date.toDate()).format("MMM Do YY")}</p>
                <p class="text-gray-600 dark:text-slate-200 whitespace-no-wrap">Due in 3 days</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 w-32 text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 dark:text-green-300 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">{status}</span>
                </span>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 w-32 text-sm">
                <p class="text-gray-900 dark:text-white whitespace-no-wrap">{assignee}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 w-28 text-sm">
                <p class="text-gray-900 dark:text-white whitespace-no-wrap">{severity}</p>
              </td>
              <td
                class="px-5 py-5 border-b border-gray-200 dark:border-slate-700 items-center bg-white dark:bg-slate-800 text-sm text-right"
              >
                <button
                  onClick={() => setOpen(true)}
                  type="button"
                  class="inline-block text-gray-500 dark:hover:text-gray-300 hover:text-gray-700"
                >
                  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td> 
          
            </tr>
            <tr>  
            </tr> 
          </tbody>
          </table>
          </div>
          </div>
          </div>
  )
}

export default Post
