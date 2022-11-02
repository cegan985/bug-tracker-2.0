import { useSession } from 'next-auth/react'
import React from 'react'
import Post from './Post'

function Table({ bug, reporter, date, status, assignee, severity }) {
    const {data: session} = useSession()
  return (
    <div class="container mx-auto px-4 sm:px-8">
  <div class="">
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <Post /> 
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default Table
