
import React from 'react';
import { Posting } from '../types/Posting';

//TODO: redirect to the posting page of /[id]

const PostingCard = ({id, employer, employerIng, location, title, type, salary, createdAt} : Posting) => {
  return (
    <a href="#" className='m-4 flex flex-row bg-gray-200 w-[23rem] max-h-32 rounded-2xl px-8 py-6 gap-4 items-center hover:scale-[1.02] hover:bg-gray-300'>
      <img src={employerIng} alt={employer} width={64} height={64} />
      <div>
        <h1 className='font-semibold text-lg'>{title}</h1>
        <div className='text-sm'>{employer} - {location}</div>
        <div className='text-sm'>{type} - {salary}</div>
        <div className='text-sm'>Posted: {createdAt.toLocaleDateString()}</div>
      </div>
    </a>
  )
}

export default PostingCard