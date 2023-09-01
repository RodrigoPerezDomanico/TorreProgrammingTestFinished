import React from 'react'
import SearchIcon from '@/components/Icons/SearchIcon'

const Home = () => {
  return (
    <form>
      <span>
        <SearchIcon/>
      </span>
      <input type='text' />
      <button>Search User</button>
    </form>

  )
}

export default Home