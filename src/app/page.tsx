'use client';

import React from 'react'
import FormSearchUser from '@/components/FormSearchUser'
import SearchUserList from '@/components/SearchUserList'
import { useState } from 'react';
import { UserList } from "@/interfaces/userList";

const Home = () => {
  const [userlist, setUserList] = useState<UserList | null>(null);
  const [error, setError] = useState<string | null>(null);
  const getUser = async (username:string)=>{
    if(username===""){
      setUserList(null);
      setError(null);
      return;
    }
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${username}`);
    const data = await res.json()
    if(!res.ok){
      console.log("User not found");
      setUserList(null);
      setError("User not found");
      return ;

    }
  
    console.log(data);
    setUserList(data);
    setError(null);

    
  }
  
  return(
    <>
  <div className=' flex justify-center w-screen mt-30'>
  <div className='flex  flex-col'>
  <FormSearchUser getUser={getUser}/>
  <SearchUserList userList={userlist}/>
  </div>
  </div>
  </>
  )
}

export default Home