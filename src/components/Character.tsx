import React from 'react'
import { User } from '../interfaces/user';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
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
    <li className='border-b-2 max-w-3xl'>
        {/* <img src=`{character.image}` alt="" /> */}
        <div onClick={redirectToDestinationPage} className='text-white cursor-pointer'>
        
        <p className='text-base'>{character.name}</p>
        <p className='pl-3 text-sm'>From: {character.origin.name}</p>
        
        </div>
    </li>
  )
}

export default Character