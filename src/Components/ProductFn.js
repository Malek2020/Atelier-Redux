import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/slices/CarteSlice';
import { deleteProductReducer, setErrors } from '../redux/slices/productSlice';
import { deleteProduct, getallProducts } from '../Service/api';

function ProductFn(props) {
  const dispatch=useDispatch()
  
  const navigate=useNavigate()
    const [product , setProduct]=useState(props.prod);
    
     function HandleClickLikes(){
        setProduct({...product,like:product.like+1})
      };
      function HandleClickquantity(){
        
         setProduct({...product,quantity:product.quantity-1})
      }
    const HandeleDeleteProd=async(id)=>{
      // const res=await deleteProduct(id)
      deleteProduct(id).then(
        ()=>{dispatch(deleteProductReducer(id)); dispatch(setErrors(null))}
      ).catch(error=>dispatch(error))

    }
    const HandeleUpdateProd=async(id)=>{
      const res=await getallProducts(id)
      navigate('/products/update/'+id) 
    }
    const AddToCart = (e) => {
      // console.log(e)
      // ADD(e) => single items lai add garko
      dispatch(addToCart(e))
    }

      
      return (
        <Col>
        <div className={product.like>5 ? "card bestproduct":"card"} style={{width: '18rem'}}>
        <img style={{height:'15rem'}} src={require('../assets/images/'+props.prod.img)} className="card-img-top" alt="..."/>
        <div className="card-body text-center">

        <Link style={{textDecoration:'none'}} to={`/products/${props.prod.id}`}><h5 className="card-title">{props.prod.name}</h5></Link>  

        <p className="card-text"> price : {props.prod.price}</p>
        <p className="card-text"> Quantity : {product.quantity}</p>
        <p className="card-text"> Likes : {product.like}</p>
        <button onClick={HandleClickLikes} className='btn btn-primary'>Like</button>
        <button onClick={()=>{HandleClickquantity(); props.B();}} disabled={product.quantity===0}  className='btn btn-primary offset-6'>Buy</button>
        <button onClick={()=>HandeleUpdateProd(props.prod.id)} className='btn btn-success mt-2'>Update</button>
        <button onClick={()=>HandeleDeleteProd(props.prod.id)} className='btn btn-danger offset-4 mt-2'>Delete</button>
        <button onClick={()=>AddToCart(product)} className='btn btn-success mt-2'>Add to Cart +</button>
        </div>
        </div>
        
    </Col>
  )
}

export default ProductFn