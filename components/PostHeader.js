import React from 'react'

function PostHeader() {
  return (
    <div className='hidden lg:grid lg:grid-col-6 lg:grid-flow-col items-center bg-[rgb(72,69,210)] text-white rounded-full mr-4 ml-4 shadow-lg fixed overflow-scroll'>
      <div className='flex items-center mt-3 mb-3 mr-8 ml-8'>
      <div className='w-64'>
        <p className='font-semibold text-xs lg:text-base'>Bug</p>
        </div>
        <div className=' pr-1 ml-16'>
        <p className='font-semibold text-xs lg:text-base'>Reporter</p>
        </div>
        <div className='pr-3 ml-20'>
        <p className='font-semibold text-xs lg:text-base'>Date</p>
        </div>
        <div className='pr-1 ml-28'>
        <p className='font-semibold text-xs lg:text-base'>Status</p>
        </div>
        <div className='pr-2 ml-16'>
        <p className='font-semibold text-xs lg:text-base'>Assignee</p>
        </div>
        <div className='pr-3 ml-8'>
        <p className='font-semibold text-xs lg:text-base'>Severity</p>
        </div>
      </div>
    </div>
  )
}

export default PostHeader
