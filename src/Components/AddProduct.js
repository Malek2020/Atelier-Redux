import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addProductReducer, setErrors, updateProductReducer } from '../redux/slices/productSlice'

import { addProduct, editProduct, getallProducts } from '../Service/api'

export default function AddProduct() {
  const dispatch=useDispatch()
  const param=useParams()
  const getProduct= async ()=>{
    const res=await getallProducts(param.id)
    // if(res.status===201)
    setProduct(res.data)
  }
  useEffect(()=>{getProduct()},[param.id])


    const navigate = useNavigate();
    const [product,setProduct]=useState({
      "id": "",
      "name": "",
      "price": 0,
      "img": "",
      "like": 0,
      "quantity": "",
      "description": ""
    })
    const{name,price,img,quantity,description}=product
    const handleformInput=(e)=>{
        setProduct({
            ...product,[e.target.name]:e.target.value
        })
    }
    const handlefileInput=(e)=>{
        setProduct({
            ...product,[e.target.name]:e.target.files[0].name
        })
    }
    const addProd=async()=>{
        // const res=await addProduct(product)
        addProduct(product).then(
          ()=>{dispatch(addProductReducer(product)); dispatch(setErrors(null))}
        ).catch(error=>dispatch(error))
    }
    const UpdateProd=async()=>{
      // const res= await editProduct(param.id,product)
      editProduct(param.id,product).then(
        ()=>{dispatch(updateProductReducer(product)); dispatch(setErrors(null))}
      ).catch(error=>dispatch(error))
    }
    const save=()=>{
      param.id?UpdateProd():addProd()
      navigate('/products/listP')
    }
    
  return (
    <div>
        <Container style={{ marginTop: "30px" }}>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control  as="textarea" type="text" placeholder="Enter the name" name="name" value={name} onChange={(e)=>handleformInput(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter the product description" name="description" value={description} onChange={(e)=>handleformInput(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control   type="number"  name="price" value={price} onChange={(e)=>handleformInput(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Quantity</Form.Label>
        <Form.Control   type="number"  name="quantity" value={quantity} onChange={(e)=>handleformInput(e)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control   type="file"  name="img" onChange={(e)=>{handlefileInput(e)}}/>
      </Form.Group>
      <Button onClick={save} variant="primary" >
        Save Product
      </Button>

      <Link to="/products/listP">
      <Button variant="danger" >
        cancel
        </Button>
      </Link>
      
      
    </Form>
    </Container>
    </div>
  )
}

