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
    <div className='grid justify-center w-full mt-10'>
  <div className='grid justify-center pt-10 align-middle border border-lime-500 rounded-md w-full p-10'>
    <Image 
    src={character.image}
    width={150}
    height={150}
    alt={`profile img character ${character.name}`}
    className='justify-self-center'
    />
    <div className='pt-2'>
    <h1 className='text-white'>Nombre : {character.name}</h1>
    <h2 className='text-white'>Origen: {character.origin.name}</h2>
    <h2 className='text-white'>Gender: {character.gender}</h2>
    <h2 className='text-white'>Actual Location: {character.location.name}</h2>
    <h2 className='text-white'>API URL: {character.url}</h2>
    </div>
  </div>
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