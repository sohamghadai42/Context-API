import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='h-full w-full text-white absolute flex flex-col gap-7 items-center justify-center'>
      <h1 className='text-6xl font-bold'>This is home page!!</h1>
      <button onClick={()=>{
        navigate('/products')
      }} className='px-4 py-5 bg-purple-500 text-xl font-bold rounded-xl cursor-pointer'>Explore Products</button>
    </div>
  )
}

export default Home
