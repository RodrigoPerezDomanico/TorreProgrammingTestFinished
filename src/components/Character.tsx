import React, { useEffect, useState } from 'react'
import { User } from '../interfaces/user';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { time } from 'console';
// import {useNavigation } from 'next/navigation';
interface Props {
    character:User ;
   }

const Character = ({character}:Props) => {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([])

    const router = useRouter();
    // const pathname = usePathname()
    // const searchParams = useSearchParams()
      useEffect(()=>{
        const selectedUsersLS = localStorage.getItem("selectedUsers") ;
        if (selectedUsersLS){
          setSelectedUsers(JSON.parse(selectedUsersLS))
          setTimeout(()=>{

            console.log(selectedUsers)

          },300)
      }
      },[])
      // const handleRepeted=(character:User)=>{
      //   if (selectedUsers.find(character)){
      //     console.log(selectedUsers.find(character))
      //   }
      // }
    const redirectToDestinationPage = () => {
      var index=-1;
      var rewrite = 0
      const filteredObj =selectedUsers.find((item,i)=>{
        if(item.id===character.id){
          index=i;
          rewrite=1
          return i;
        }
      })
      index = index ===-1 ? 0:index
      // console.log(index,filteredObj);
      if (selectedUsers && selectedUsers.length<10){

        selectedUsers.splice(index,rewrite,character)
      }else if(selectedUsers.length===10){
        selectedUsers.splice(index,rewrite,character)
        selectedUsers.pop()
      }else{
        selectedUsers.push(character)
      }
      console.log(selectedUsers)
      // selectedUsers.splice(0,0,JSON.stringify(character))
      localStorage.setItem("selectedUsers",JSON.stringify(selectedUsers))

      // if (selectedUsers.length<10){
      //   selectedUsers.splice(0,0,JSON.stringify(character))
      //   console.log(selectedUsers)
      //   console.log('agregando personaje')
      // }
      // if(selectedUsers.length===10){
      //   selectedUsers.splice(0,0,JSON.stringify(character))
      //   console.log('agregando personaje')
      //   selectedUsers.pop()
      //   console.log('quitando personaje')
      //   localStorage.setItem("selectedUsers",JSON.stringify(selectedUsers))
      // }
        
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