import React from 'react'
import { User } from '../interfaces/user';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
// import {useNavigation } from 'next/navigation';
interface Props {
    character:User ;
   }

const Character = ({character}:Props) => {
    const router = useRouter();
    // const pathname = usePathname()
    // const searchParams = useSearchParams()
    const redirectToDestinationPage = () => {
        // Redirect to the destination page and pass character data as a query parameter
        router.push(`/genome?id=${character.id}`);
      };
  return (
    <li className='border-b border-lime-600 max-w-3xl'>
        

        <div onClick={redirectToDestinationPage} className='grid gap-2 w-screen grid-cols-[1fr_20fr] text-white cursor-pointer '>
        <Image 
          src={character.image}
          width={30}
          height={30}
          alt={`profile img character ${character.name}`}
          className='rounded-full pt-1'
        />
        <div className=''>
        <p className='text-base'>{character.name}</p>
        <p className='pl-3 text-sm'>From: {character.origin.name}</p>
        </div>
        </div>
    </li>
  )
}

export default Character