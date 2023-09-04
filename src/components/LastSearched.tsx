import React, { useEffect, useState } from 'react'
import { User } from '../interfaces/user';


const LastSearched = () => {
    const [selectedUsers, setSelectedUsers] = useState<User[]>([])
    useEffect(()=>{
        const selectedUsersLS = localStorage.getItem("selectedUsers") ;
        if (selectedUsersLS){
          setSelectedUsers(JSON.parse(selectedUsersLS))
      }
      },[])

    return (
     <div className='absolute bottom-0 left-0 text-white'>
      <ul>Ultimos buscados:
        {
            selectedUsers.map((character:User)=>(
                <li key={character.id}>{character.name}</li>
                ))

        }
        </ul>
    </div>
  )
}

export default LastSearched