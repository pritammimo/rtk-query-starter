import React from 'react'
import { useGetAllProductsQuery } from './Redux/services/products';
import { Link,useNavigate } from "react-router-dom";
const Products = () => {
  const navigate=useNavigate();
    const {data,isError,isLoading}=useGetAllProductsQuery();
    const handleChange=(id)=>{
      navigate(`product/${id}`)
    }
    if(isLoading){
        return <p>Loading ...</p>
      }
      if (isError){
        return <p>Something Went Wrong</p>
      }
  return (
    <div>
    {
      data?.map(product=>(
        <div key={product.id}>
          <h4>{product.description}</h4>
          <h1>{product.title}</h1>
          <button onClick={()=>handleChange(product.id)}>
            Product
              </button>
        </div>
      ))
    }
  </div>
  )
}

export default Products