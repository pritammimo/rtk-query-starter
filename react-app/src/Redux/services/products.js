import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ProductsApi=createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://my-json-server.typicode.com/pritammimo/json-server/",
}),
endpoints:(builder)=>({
  getAllProducts:builder.query({
      query:()=>"products"
  }),
  getProductsById:builder.query({
      query:(productId)=>`products/${productId}`
  })
})
})
export const {useGetAllProductsQuery,useGetProductsByIdQuery}=ProductsApi