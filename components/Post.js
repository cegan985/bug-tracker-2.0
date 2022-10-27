import React from 'react'

function Post({id, bug, reporter, date, status, assignee, severity}) {
  return (
    <div className='grid grid-col-6 grid-flow-col items-center border-b mr-4 ml-4 '>
      <div className='flex justify-between items-center mt-3 mb-3 mr-8 ml-8'>
        <div className='pr-3 w-64 h-6 overflow-y-scroll'>
        <p>{bug}</p>
        </div>
        <div className='pr-3'>
        <p>{reporter}</p>
        </div>
        <div className='pr-3'>
        <p>{date}</p>
        </div>
        <div className='pr-3'>
        <p>{status}</p>
        </div>
        <div className='pr-3'>
        <p>{assignee}</p>
        </div>
        <div className='pr-3'>
        <p>{severity}</p>
        </div>
      </div>
    </div>
  )
}

export default Post
