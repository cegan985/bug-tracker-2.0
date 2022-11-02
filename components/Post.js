import { useSession } from 'next-auth/react'
import React from 'react'
import PostHeader from './PostHeader'


function Post({ bug, reporter, date, status, assignee, severity }) {
  const {data: session} = useSession()

  return (
    <tbody>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white rounded-l-md text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{bug}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img
                      class="w-full h-full rounded-full"
                      src={session.user.image}
                      alt=""
                    />
                  </div>
                  <div class="flex items-center ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {reporter}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">{status}</span>
                </span>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{assignee}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{severity}</p>
              </td>
              <td
                class="px-5 py-5 border-b rounded-r-md border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  class="inline-block text-gray-500 hover:text-gray-700"
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
  )
}

export default Post
