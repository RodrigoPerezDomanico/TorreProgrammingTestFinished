import React from 'react'
import { User } from '../interfaces/user';
interface Props {
    character:User ;
   }

const Character = ({character}:Props) => {
  return (
    <li className='border-b-2 max-w-3xl'>
        {/* <img src=`{character.image}` alt="" /> */}
        <a href={`https://rickandmortyapi.com/api/character/${character.id}`} > 
        <p className='text-base'>{character.name}</p>
        <p className='pl-3 text-sm'>From: {character.origin.name}</p>
        </a>
    </li>
  )
}

export default Character