import React from 'react'
import { useGetProductsByIdQuery} from './Redux/services/products';
import {
  useParams,
} from "react-router-dom";
const Product = () => {
  const {id}=useParams();
  const {data,isError,isLoading}=useGetProductsByIdQuery(id);
  console.log(data);
  console.log("params",id)
  if(isLoading){
    return <p>Loading ...</p>
  }
  if (isError){
    return <p>Something Went Wrong</p>
  }
  return (
    <>
    <div>title:{data?.title}</div>
    <div>description:-{data?.description}</div>
    <div>price:-{data?.price}</div>
     <div>category:-{data?.category}</div>
    </>
  )
}

export default Product