import React from 'react'
import PostHeader from './PostHeader'
import Posts from './Posts'
import SideNav from './SideNav'

function Feed() {
  return (
    <main className='grid w-100 grid-cols-1 flex-shrink sm:w-full md:grid-cols-5 md:max-w-full xl:grid-cols-5 xl:max-w-full overflow-scroll'>
      <section className='hidden xl:inline-grid md:col-span-1 sm:col-span-1'>
      <SideNav />
      </section>

      <section className='flex-shrink sm:col-span-4 md:col-span-4 lg:col-span-4 w-full bg-gray-100 overflow-scroll'>
      <PostHeader />
      <div className='lg:mt-12'>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      </div>
      </section>
      
    </main>
  )
}

export default Feed
