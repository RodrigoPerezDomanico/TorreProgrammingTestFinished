import SearchIcon from "@/components/icons/SearchIcon";
import React from "react";

interface Props {
  getUser: (username:string)=>Promise<void>;
}



const FormSearchUser = ({ getUser }: Props)=>{
    const handleType = async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const username= e.currentTarget.username.value
      // if(!username)return;
      console.log(username)
      await getUser(username)
    }
    return (
        
          <form onChange={handleType} className="grid gap-2 w-screen grid-cols-[1fr_10fr] bg-gray-700 mx-5 py-2 rounded-md max-w-3xl align-middle">
            <span>
              <SearchIcon className='fill-green-400 pl-2 justify-center' />
            </span>
            <input name="username" type='text' placeholder='Type the username' className='bg-transparent h-full outline-none text-white'/>
            {/* <button className='bg-green-700 rounded-md px-3 mr-3'>Search</button> */}
          </form>
        
      );
};
export default FormSearchUser;