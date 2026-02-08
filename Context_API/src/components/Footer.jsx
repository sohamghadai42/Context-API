import React, { useContext } from 'react'
import { UserData } from '../../Context/UserContext'

const Footer = () => {
    const data = useContext(UserData)
  return (
    <div className='p-5 h-40 w-screen bg-blue-500 mt-54'>
      <h1 className='text-2xl text-white font-bold '>{data}</h1>
    </div>
  )
}

export default Footer
