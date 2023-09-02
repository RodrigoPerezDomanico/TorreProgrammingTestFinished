import SearchIcon from "@/components/icons/SearchIcon";


const FormSearchUser = ()=>{
    
    return (
        <div className='flex justify-center w-screen'>
          <form className="grid gap-2 w-screen grid-cols-[1fr_10fr_3fr] bg-blue-900 mx-5 py-2 rounded-md max-w-3xl ">
            <span>
              <SearchIcon className='fill-blue-300' />
            </span>
            <input  type='text' placeholder='Type the username' className='bg-transparent h-full outline-none'/>
            <button className='bg-blue-500 rounded-md px-3 mr-3'>Search</button>
          </form>
        </div>
      );
};
export default FormSearchUser;