import { PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { modalState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil'

function PostHeader() {
  const [open, setOpen] = useRecoilState(modalState)
  return (
          
    <div class="container mx-auto px-4 sm:px-8 w-full">
    <div class="fixed z-40">
      <div class="-mx-4 sm:-mx-8 sm:px-8 overflow-x-auto">
        <div
          class="hidden md:inline-block min-w-full overflow-hidden"
        >
          <table class="min-w-full leading-normal">
          <thead>
                <tr >
                  <th
                    class="px-5 py-3 border-b-2 w-52 border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-900 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Bug
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 w-44 border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-900 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Reporter
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 w-36 border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-900 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Posted
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 w-32 border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-900 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 w-32 border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-900 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Assignee
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 w-28 border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-900 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Severity
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 cursor-pointer dark:hover:bg-slate-700 hover:bg-gray-300 w-5  border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-900 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                    onClick={() => setOpen(true)}
                  >
                    <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn text-gray-900 dark:text-gray-300 hover:text-[rgb(72,69,210)]'/>
                  </th>
                </tr>
              </thead>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PostHeader
