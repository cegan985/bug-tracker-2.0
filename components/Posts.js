import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import {db} from '../firebase'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import Table from './Table'





function Posts() {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
          setPosts(snapshot.docs)
        })
  }, [])


  /*useEffect(() => {
    ;(async () => {
        const colRef = collection(db, 'posts')
        //const q = query(colRef, orderBy('timestamp', 'desc'))
        const q = query(collection(db, 'posts'), orderBy('timeStamp', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data()

            data.id = doc.id

            return data
        });
        
        setPosts(querySnapshot.docs)
        unsubscribe();
    }, [db]);
    
    //console.log(posts); 

    })()
}, [])
*/
  return (
    <div>
        {posts.map((post) => (
            <Post
            key={post.id}
            id={post.id}
            bug={post.data().bug}
            reporter={post.data().username}
            date={post.date}
            status={post.data().status}
            assignee={post.data().assignee}
            severity={post.data().severity}
            />
        ))}
    </div>
  )
}

export default Posts
