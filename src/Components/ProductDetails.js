import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getallProducts } from '../Service/api'
// import products from '../products.json'

function ProductDetails() {
    const param=useParams()
    const [p,setP]=useState({})
    const getProduct= async ()=>{
      const res=await getallProducts(param.id)
      if(res.status===200)
      setP(res.data)
    }
    useEffect(()=>{
      getProduct()
    },[])
  return (
    <>
    {p.id !==undefined ? 
    <div className='row m-5'>
      <div className='offset-1 col-4'>
               <img className='w-75' src={require("../assets/images/"+p.img)} />
      </div>
      <div className='col-6'>
              <h2>{p.name}</h2> 
              <h4>description :</h4>  
              <div className='mx-3'>{p.description}</div>
              <h4>Price :</h4>  
              <div className='mx-3'>{p.price}</div>
              <h4>Likes :</h4>  
              <div className='mx-3'>{p.like}</div>
      </div>
    
    
    </div>
    :
    <p> there is no product</p>}
    </>
  )
}

export default ProductDetails