import React from 'react'

function PostHeader() {
  return (
    <div className='grid grid-col-6 grid-flow-col items-center border mt-4 mr-4 ml-4 shadow-md sticky top-5'>
      <div className='flex items-center mt-3 mb-3 mr-8 ml-8'>
      <div className=' w-64'>
        <p className='font-semibold'>Bug</p>
        </div>
        <div className='pr-1 ml-16'>
        <p className='font-semibold'>Reporter</p>
        </div>
        <div className='pr-3 ml-20'>
        <p className='font-semibold'>Date</p>
        </div>
        <div className='pr-1 ml-28'>
        <p className='font-semibold'>Status</p>
        </div>
        <div className='pr-2 ml-16'>
        <p className='font-semibold'>Assignee</p>
        </div>
        <div className='pr-3 ml-8'>
        <p className='font-semibold'>Severity</p>
        </div>
      </div>
    </div>
  )
}

export default PostHeader
