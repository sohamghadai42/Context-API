import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getData } from "../api/api";

export const ProductDataContext = createContext();

const ProductContext = (props) => {
  const [productData, setProductData] = useState([]);
  const setData = async() =>{
    setProductData(await getData())
  }

  useEffect(function () {
    setData();
  }, []);

  return (
    <ProductDataContext.Provider value={productData}>
      {props.children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
