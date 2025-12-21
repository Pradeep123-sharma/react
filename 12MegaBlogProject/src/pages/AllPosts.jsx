import React, {useState, useEffect} from 'react'
import service from '../appwrite/service'
import { PostCard, Container } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        /* Sari posts array format mei hi aayegi kyunki listRows array format mei result dega */
        service.getAllPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.rows)
            }
        })
    }, [])
    return (
        <div className='py-8 w-full'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
