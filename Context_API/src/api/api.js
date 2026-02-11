import axios from "axios";
import ProductContext from "../context/ProductContext";

export const getData = async ()=>{
        let response = await axios.get('https://fakestoreapi.com/products')
        return response.data
    }

