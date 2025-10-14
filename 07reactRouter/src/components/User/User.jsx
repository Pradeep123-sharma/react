import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { userId } = useParams();

    return (
        <div className='text-center font-bold mt-4 mb-4 text-2xl'>User: {userId}</div>
    )
}