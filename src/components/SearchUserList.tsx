import React from 'react'
import Character from '@/components/Character'
import { UserList } from '../interfaces/userList';
interface Props {
   userList:UserList | null;
  }
const SearchUserList = ({userList}:Props) => {
  if(userList===null){
    return(
      <ul></ul>
    )
  };
  return (
    
    <ul className='flex flex-col justify-center mt-1'>
        {
        userList.results.map((character,index)=>(
          
          
          (index<10) ? (<Character character={character}/>) : (null)
            
          )
        )
        }
    </ul>
    
    
  )
}


export default SearchUserList