import React, {useEffect, useState} from 'react'
import { Alert, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ListProducts from '../products.json'
import { selectProducts } from '../redux/slices/productSlice'
import { getallProducts } from '../Service/api'
import ProductFn from './ProductFn'


function ProductsFn() {
  
  const [products,error]=useSelector(selectProducts)
  console.log(error)
  // const[products,setProducts]=useState([])
  const[alert,setAlert]=useState(false);
  const[alert1,setAlert1]=useState(true);  
  useEffect(()=>{setTimeout(()=>setAlert1(false),3000)})
  function buy(){
    setAlert(true);
    setTimeout(()=>{
      setAlert(false);      
    },2000)
  }
  // const getList=async()=>{
  //   const res=await getallProducts()
  //   if(res.status===200)
  //   setProducts(res.data)
  //   console.log(res)
  // }
  // useEffect(()=>{getList()},[])
    
  return (
    <Container>
      { alert1 &&(
      <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                    Hey, Welcome To Our Shop MyStore
                    </p>
                    <hr />
                    <p className="mb-0">
                    Thank you for choosing our store, we hope you enjoy your shopping experience!
                    </p>
                  </Alert>)}
        <Row>
        {products?.map((product,i)=>(<ProductFn key={i} prod={product} B={buy}  />)
        )}
        </Row>
        {alert && (<div className="alert alert-info">You bought an item</div>)}


    </Container>
  )
}

export default ProductsFn