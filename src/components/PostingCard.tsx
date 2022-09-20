
import React from 'react';
import { Posting } from '../types/Posting';
import { useRouter } from 'next/router';

const PostingCard = ({id, employer, employerIng, location, title, type, salary, createdAt} : Posting) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(`/${id}`);
  }
  return (
    <a href={id} onClick={handleClick} className='m-4 flex flex-row bg-gray-200 w-[23rem] max-h-32 rounded-2xl px-8 py-6 gap-4 items-center hover:scale-[1.02] hover:bg-gray-300'>
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