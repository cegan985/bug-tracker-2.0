import React from 'react'

function Post({id, bug, reporter, date, status, assignee, severity}) {
  return (
    <div className='grid grid-col-6 grid-flow-col items-center border-b mr-4 ml-4'>
      <div className='flex justify-between items-center mt-3 mb-3 mr-8 ml-8'>
        <div className='pr-3 w-24 lg:w-64 h-6 overflow-y-scroll text-xs lg:text-base'>
        <p>{bug}</p>
        </div>
        <div className='pr-3 text-xs lg:text-base'>
        <p>{reporter}</p>
        </div>
        <div className='pr-3 text-xs lg:text-base'>
        <p>{date}</p>
        </div>
        <div className='pr-3 text-xs lg:text-base'>
        <p>{status}</p>
        </div>
        <div className='pr-3 text-xs lg:text-base'>
        <p>{assignee}</p>
        </div>
        <div className='pr-3 text-xs lg:text-base'>
        <p>{severity}</p>
        </div>
      </div>
    </div>
  )
}

export default Post
