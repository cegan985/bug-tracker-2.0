import React from 'react'
import PostHeader from './PostHeader'
import Posts from './Posts'
import SideNav from './SideNav'

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-5 md:max-w-full xl:grid-cols-5 xl:max-w-full mx-auto'>
      <section className='hidden xl:inline-grid md:col-span-1'>
      <SideNav />
      </section>

      <section className='col-span-4 w-full bg-gray-100'>
      <PostHeader className='sticky top-0 z-20'/>
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
      </section>
      
    </main>
  )
}

export default Feed
