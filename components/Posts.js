import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        bug: 'Issue with design format',
        reporter: 'cegan985',
        date: '10/26/2022',
        status: 'Open',
        assignee: 'Matt',
        severity: 'Medium', 
    }
]



function Posts() {
  return (
    <div>
        {posts.map((post) => (
            <Post 
            key={post.id}
            id={post.id}
            bug={post.bug}
            reporter={post.reporter}
            date={post.date}
            status={post.status}
            assignee={post.assignee}
            severity={post.severity}
            />

        ))}
    </div>
  )
}

export default Posts
