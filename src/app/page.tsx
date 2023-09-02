'use client';

import React from 'react'
import FormSearchUser from '@/components/FormSearchUser'
// import { useState } from 'react';
// import { User } from "@/interfaces/user";

const Home = () => {
  // const [user, setUser] = useState<User | null>(null);
  // const [error, setError] = useState<string | null>(null);
  const getUser = async (username:number)=>{
    const res = await fetch(`https://rickandmortyapi.com/api/character/${username}`);
    const data = res.json()
    if(!res.ok){
      console.log("User not found")
      // setUser(null);
      // setError("User not found");
      return ;

    }

    console.log(data);
    
  }
  
  return(
    <>
  <FormSearchUser getUser={getUser}/>
  
  </>
  )
}

export default Home