import React from 'react';

type SkillProps = {
  skill: string;
}

const Skill = ({skill} : SkillProps) => {
  return (
    <div className='bg-purple-600 text-white font-semibold w-max px-2 py-1 rounded-lg hover:scale-105 hover:bg-purple-800'>
      {skill}
    </div>
  )
}

export default Skill