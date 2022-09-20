import React from 'react';
import Skill from './Skill';

type SkillsListProps = {
  skills: string;
}

//TODO: split string to array on semi colons

const SkillsList = ({skills} : SkillsListProps) => {
  const skillsList = skills.split(';');

  return (
    <div className='flex flex-wrap justify-center gap-1'>
      {
        skillsList.map((skill, index) => {
          return (
            <Skill key={index} skill={skill} />
          )
        })
      }
    </div>
  )
}

export default SkillsList