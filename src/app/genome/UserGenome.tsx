import React from 'react'
import { User } from '../../interfaces/user';
import Image from 'next/image';
interface Props {
   character:User | null;
  }
const UserGenome = ({character}:Props) => {

  if(character===null){
    return(
      <ul></ul>
    )
  };
  return (
  <div>
    <Image 
    src={character.image}
    width={96}
    height={96}
    alt={`profile img character ${character.name}`}
    className='roundedd-full'
    />
    <h1>Nombre : {character.name}</h1>
    <h2>Origen: {character.origin.name}</h2>
    <h2>Gender: {character.gender}</h2>
    <h2>Actual Location: {character.location.name}</h2>
    <h2>API URL: {character.url}</h2>
  </div>  
    // <ul className='flex flex-col justify-center mt-1'>
    //     {
    //     character.map((character,index)=>(
          
          
    //       (index<10) ? (<Character character={character}/>) : (null)
            
    //       )
    //     )
    //     }
    // </ul>
    
    
  )
}


export default UserGenome