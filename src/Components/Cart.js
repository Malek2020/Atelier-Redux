import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart, deleteItem } from '../redux/slices/CarteSlice'

function Cart() {
    const dispatch=useDispatch()
    const getData=useSelector((state)=>state.Cart.carts)
    
    const total=()=>{
        let tot=0;
        getData.map(pr=>tot+=pr.quantity*pr.price)
        return tot
    }
  return (
    <div className='container'>
        <div className='card mt-5 shadow p-3 mb-5 bg-body rounded'>

    <div style={{textAlign:'center',fontSize:'30px',fontWeight:'bold',marginBottom:'40px'}}>Shopping Cart</div>
    <div>
    {getData.map(pr=>(
    <div key={pr.id} className='row' >
    <div className='col-2'>
    <img className='w-100' src={require('../assets/images/'+pr.img)} alt=""/>
    </div>
    <div className='col-1 mt-4'>
    <div className='mb-3 text-primary fw-bold'>{pr.name}</div>
    <div className='fw-bold'>{pr.price} DT</div>
    </div>
    <div className='col-2 mt-5 fw-bold'>
        <button onClick={pr.quantity <= 1 ? () => dispatch(deleteFromCart(pr.id)) : () => dispatch(deleteItem(pr))} className='btn btn-outline-danger mx-5'>-</button>
        {pr.quantity}
    </div>
    <div className='col-1 mt-5'>
        <button onClick={()=>dispatch(addToCart(pr))} className='btn btn-outline-success'>+</button>
    </div>
    <div className='col-2 mt-5 fw-bold'>
        Total Price : {pr.price * pr.quantity} DT
    </div>
    <div className='col-1 mt-5'>
    <button onClick={()=>dispatch(deleteFromCart(pr.id))} className='btn btn-outline-danger'>×</button>
    </div>
    </div>
    ))}
    <hr style={{height:"2px",border:"none",color:"blue",backgroundColor:"blue"}} />

    <div style={{backgroundColor:"#D0E6FF",fontWeight:"bold" ,display:"flex",justifyContent:"space-between"}} className='p-2' >
    <div>Total :</div> 
    <div>{total()} DT</div>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Cart