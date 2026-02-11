import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDataContext } from "../context/ProductContext";

const ProductDetails = () => {
  const Data = useContext(ProductDataContext);
  let {ProductId} = useParams();
  const selectedProduct = Data.find((elem) =>
    elem.id == ProductId
  );
  
  if (!selectedProduct) {
    return <div className="text-white text-center mt-10">Product not found</div>;
  }
  
  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <div className="flex flex-col justify-center items-center gap-7 bg-slate-900 h-100 w-90">
        <img src={selectedProduct.image} alt="" className="h-30 w-30" />
        <h2 className="text-white text-2xl">{selectedProduct.title}</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
