import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Products = () => {
  const productData = useContext(ProductDataContext);
  let renderData = '';
  if(productData.length > 0){
    renderData = productData.map(function(elem){
        return <div>
            <Link target='_blank' to={`/products/${elem.id}`} className='text-white block w-[330px] h-83 text-center p-10 bg-slate-800 overflow-auto no-scroll rounded-md'>
                <div className='flex flex-col justify-center items-center gap-7'>
                    <img src={elem.image} alt="" className='h-30 w-30' />
                    <h2 className='text-white text-2xl'>{elem.title}</h2>
                </div>
            </Link>
        </div>
      })
  }
  return (
    <div className='p-7 flex flex-wrap gap-10'>
      {renderData}
    </div>
  )
}

export default Products;
