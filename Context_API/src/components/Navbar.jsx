import React, { useContext } from 'react'
import UserContext, { UserData } from '../../Context/UserContext';


const Navbar = () => {
  
  const data = useContext(UserData);
  
  return (
    <div className='p-5 bg-pink-400'>
      <h1 className='text-2xl text-white font-bold '>{data}</h1>
    </div>
  )
}

export default Navbar;
