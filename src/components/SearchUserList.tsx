import React from 'react'
import { UserList } from '../interfaces/userList';
interface Props {
   userList:UserList;
  }
const SearchUserList = ({userList}:Props) => {
  return (
    <ul>
        {userList.results.map((character)=>(
            <li>¨{character.name}</li>
        ))}
    </ul>
    
  )
}

export default SearchUserList