import React, { useContext } from 'react'
import UserContext, { UserData } from '../../Context/UserContext'

const Main = () => {
    const data = useContext(UserData)
  return (
    <div className='p-5 h-70 w-screen bg-slate-600 '>
      <h1 className='text-3xl text-white font-bold '>{data}</h1>
    </div>
  )
}

export default Main
