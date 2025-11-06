import React from 'react'
/* Hum ise import isliyekar rhe hai kyunki hume posts chahiye to iske liye query lagani padegi aur kyunki vo state mei available nhi hai to ye service ye query laga degi. */ 
import service from '../appwrite/service'
import { Link } from 'react-router-dom'

/* Appwrite se aa rha hai to 'id' '$id' karke hi liya jata hai, aur ye post ki id hai.
'featuredImage' image ki id hai. */
function PostCard({$id, title, featuredImage}) {
    return (
        /* Kyunki pura card hi clickable hoga. Us card ko click karke hi article padenge isliye link tag mei wrap karenge.
        Its a very important feature of link is ki hum jaha par hai uske aage se url de skte hai pura url dene ki jarurat nhi hai.
        Kyunki $id hi pura variable ka name hai to hume as it is hi use karna padega. */
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {/* For image we have to display file preview so we have already made a method in service file so we'll simply call that method and pass the id. */} 
                    <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
