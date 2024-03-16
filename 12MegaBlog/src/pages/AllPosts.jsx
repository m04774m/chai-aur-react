import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import service from "../appwrite/config"; //service was imported instead of appwriteService from config

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        } //this code was put inside the useEffect scope previously it was not
    })
    }, [])
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts
