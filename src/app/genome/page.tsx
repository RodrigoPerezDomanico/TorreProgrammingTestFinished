'use client';
import React, { useEffect , useState } from 'react';
import {  useSearchParams } from 'next/navigation';
import { User } from '../../interfaces/user';
import UserGenome from './UserGenome'

const Page = () => {
    const searchParams  = useSearchParams()
    const id = searchParams.get('id')
    const [character, setCharacter] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
          
        if(character===null){
        console.log(id)
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then((data)=>{
                console.log(data)
                setCharacter(data)
                setIsLoading(false)
            })
          }
            
    })
    // const getCharacter = async () =>{
    //     const res= await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    //     const data = await res.json()
    //     setCharacter(data)
    //     console.log(character)
        


    // }
    // useEffect(async () => {
    //     // Access the character data here and do something with it
    //     console.log(character);
    //   }, [character]);
  if (isLoading){
  return (
    <div className='grid justify-center text-white mt-20'>
    --- Cargando Datos ---
    
    </div>
  )
}
return (
  <div>
    {character && <UserGenome character={character}/>}
    
    </div>
)
}

export default Page